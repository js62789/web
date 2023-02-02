import React, { useCallback, useEffect, useImperativeHandle, useRef } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames/bind';
import styles from './TextArea.module.css';

const cx = classnames.bind(styles);

const TextArea = React.forwardRef(({ className, grow, ...rest }, ref) => {
  const innerRef = useRef();

  const onInput = useCallback(() => {
    const { minHeight, borderBottomWidth, borderTopWidth } = window.getComputedStyle(innerRef.current);
    const minHeightNum = parseFloat(minHeight);
    const borders = parseFloat(borderTopWidth) + parseFloat(borderBottomWidth);

    innerRef.current.style.height = 'auto';
    innerRef.current.style.height = `${Math.max(minHeightNum, innerRef.current.scrollHeight + borders)}px`;
    innerRef.current.style.resize = 'none';
  }, []);

  useEffect(() => {
    onInput();
  }, [onInput]);

  useImperativeHandle(ref, () => innerRef.current);

  return (
    <textarea
      aria-label={rest.name}
      className={cx('textarea', { grow }, className)}
      onInput={onInput}
      ref={innerRef}
      {...rest}
    />
  );
});

TextArea.displayName = 'TextArea';

TextArea.propTypes = {
  className: PropTypes.string,
  grow: PropTypes.bool,
};

TextArea.defaultProps = {
  className: undefined,
  grow: false,
};

export default TextArea;
