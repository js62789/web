import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames/bind';
import styles from './Button.module.css';

const cx = classnames.bind(styles);

const Button = React.forwardRef(({ className, grow, primary, ...rest }, ref) => {
  return (
    <button className={cx('button', { grow, primary }, className)} ref={ref} {...rest} />
  );
});

Button.displayName = 'Button';

Button.propTypes = {
  /** Class name applied to button element */
  className: PropTypes.string,
  /** Grow the component to fit within its container */
  grow: PropTypes.bool,
  /** Draw the users attention to this button most */
  primary: PropTypes.bool,
};

Button.defaultProps = {
  className: undefined,
  grow: false,
  primary: false,
};

export default Button;
