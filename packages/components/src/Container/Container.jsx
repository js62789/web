import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames/bind';
import styles from './Container.module.css';

const cx = classnames.bind(styles);

const Container = React.forwardRef(({ className, breakpoints, ...rest }, ref) => {
  return (
    <div className={cx({ breakpoints }, className)} ref={ref} {...rest} />
  );
});

Container.displayName = 'Container';

Container.propTypes = {
  breakpoints: PropTypes.bool,
  className: PropTypes.string,
};

Container.defaultProps = {
  breakpoints: false,
  className: undefined,
};

export default Container;
