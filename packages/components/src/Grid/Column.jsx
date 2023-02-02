import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames/bind';
import styles from './Grid.module.css';

const cx = classnames.bind(styles);

function Column({ className, grow, xs, sm, md, lg, xl, ...rest }) {
  const dynamicClasses = {
    grow,
    [`xs${xs}`]: xs,
    [`sm${sm}`]: sm,
    [`md${md}`]: md,
    [`lg${lg}`]: lg,
    [`xl${xl}`]: xl,
  };

  return (
    <div className={cx(className, 'col', dynamicClasses)} {...rest} />
  );
}

Column.propTypes = {
  className: PropTypes.string,
  grow: PropTypes.bool,
  xs: PropTypes.number,
  sm: PropTypes.number,
  md: PropTypes.number,
  lg: PropTypes.number,
  xl: PropTypes.number,
};

Column.defaultProps = {
  className: undefined,
  grow: false,
  xs: undefined,
  sm: undefined,
  md: undefined,
  lg: undefined,
  xl: undefined,
};

export default Column;
