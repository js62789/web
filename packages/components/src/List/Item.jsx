import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames/bind';
import styles from './List.module.css';

const cx = classnames.bind(styles);

const Item = React.forwardRef(({ className, ...rest }, ref) => {
  return (
    <li className={cx(className)} ref={ref} {...rest} />
  );
});

Item.displayName = 'Item';

Item.propTypes = {
  className: PropTypes.string,
};

Item.defaultProps = {
  className: undefined,
};

export default Item;
