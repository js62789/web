import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames/bind';
import styles from './Input.module.css';

const cx = classnames.bind(styles);

const Input = React.forwardRef(({ className, grow, ...rest }, ref) => {
  return (
    <input aria-label={rest.name} className={cx('input', { grow }, className)} ref={ref} {...rest} />
  );
});

Input.displayName = 'Input';

Input.propTypes = {
  className: PropTypes.string,
  grow: PropTypes.bool,
};

Input.defaultProps = {
  className: undefined,
  grow: false,
};

export default Input;
