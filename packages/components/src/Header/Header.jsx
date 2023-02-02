import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames/bind';
import styles from './Header.module.css';

const cx = classnames.bind(styles);

const Header = React.forwardRef(({ className, tagName: Element, ...rest }, ref) => {
  return (
    <Element className={cx('header', className)} ref={ref} {...rest} />
  );
});

Header.displayName = 'Header';

Header.propTypes = {
  className: PropTypes.string,
  tagName: PropTypes.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6']),
};

Header.defaultProps = {
  className: undefined,
  tagName: 'h1',
};

export default Header;
