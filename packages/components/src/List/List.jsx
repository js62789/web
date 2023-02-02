import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames/bind';
import styles from './List.module.css';
import Item from './Item';

const cx = classnames.bind(styles);

const List = React.forwardRef(({ className, ...rest }, ref) => {
  return (
    <ul className={cx('list', className)} ref={ref} {...rest} />
  );
});

List.displayName = 'List';

List.propTypes = {
  className: PropTypes.string,
};

List.defaultProps = {
  className: undefined,
};

List.Item = Item;

export default List;
