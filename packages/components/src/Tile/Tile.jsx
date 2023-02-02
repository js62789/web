import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames/bind';
import styles from './Tile.module.css';

const cx = classnames.bind(styles);

const Tile = React.forwardRef(({ className, grow, ...rest }, ref) => {
  return (
    <span className={cx('tile', { grow }, className)} ref={ref} {...rest} />
  );
});

Tile.displayName = 'Tile';

Tile.propTypes = {
  className: PropTypes.string,
  grow: PropTypes.bool,
};

Tile.defaultProps = {
  className: undefined,
  grow: false,
};

export default Tile;
