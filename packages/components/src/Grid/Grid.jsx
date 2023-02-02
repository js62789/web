import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames/bind';
import styles from './Grid.module.css';
import Column from './Column';

const cx = classnames.bind(styles);

const Grid = React.forwardRef(({ className, padded, ...rest }, ref) => {
  return (
    <div className={cx('grid', { padded }, className)} ref={ref} {...rest} />
  );
});

Grid.displayName = 'Grid';

Grid.propTypes = {
  className: PropTypes.string,
  padded: PropTypes.bool,
};

Grid.defaultProps = {
  className: undefined,
  padded: false,
};

Grid.Column = Column;

export default Grid;
