import { useCallback, useEffect, useState } from 'react';

const seconds = n => n * 1000;
const minutes = n => n * seconds(60);

const leadingZero = n => n.toString().length < 2 ? `0${n}` : n;

function formatTime(date = new Date()) {
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const meridian = hours > 11 ? 'pm' : 'am';
  return `${hours % 12 || 12}:${leadingZero(minutes)}${meridian}`;
}

export default function useClock() {
  const [time, setTime] = useState(formatTime());

  const updateTime = useCallback(() => {
    setTime(formatTime());
  }, []);

  useEffect(() => {
    const date = new Date();
    const remainingSeconds = 60 - date.getSeconds();
    let interval;

    const synchronize = () => {
      updateTime();
      interval = setInterval(updateTime, minutes(1));
    };

    setTimeout(synchronize, seconds(remainingSeconds));

    return () => {
      clearInterval(interval);
    };
  }, [updateTime]);

  return time;
}
