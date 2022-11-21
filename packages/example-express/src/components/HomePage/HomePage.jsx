import classnames from 'classnames/bind';
import useClock from '../../hooks/useClock';
import styles from './HomePage.module.css';

const cx = classnames.bind(styles);

export default function HomePage() {
  const time = useClock();

  return (
    <div className={cx('time')}>
      <span className={cx('digits')}>{time.slice(0, -2)}</span>
      <span className={cx('meridian')}>{time.slice(-2)}</span>
    </div>
  );
}
