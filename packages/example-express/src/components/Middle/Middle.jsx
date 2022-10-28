import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames/bind';
import styles from './Middle.module.css';

const cx = classnames.bind(styles);

function Middle({ children, className, fullscreen, ...rest }) {
  return (
    <div className={cx('middle', { fullscreen }, className)} {...rest}>{children}</div>
  );
}

Middle.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  fullscreen: PropTypes.bool,
};

Middle.defaultProps = {
  children: undefined,
  className: undefined,
  fullscreen: false,
};

export default Middle;
