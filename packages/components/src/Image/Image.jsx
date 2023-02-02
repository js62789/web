import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames/bind';
import styles from './Image.module.css';

const cx = classnames.bind(styles);

const Image = React.forwardRef(({ className, grow, ...rest }, ref) => {
  return (
    <img className={cx('img', { grow }, className)} ref={ref} {...rest} />
  );
});

Image.displayName = 'Image';

Image.propTypes = {
  className: PropTypes.string,
  grow: PropTypes.bool,
};

Image.defaultProps = {
  className: undefined,
  grow: false,
};

export default Image;
