import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames/bind';
import styles from './Select.module.css';
import Option from './Option';

const cx = classnames.bind(styles);

const Select = React.forwardRef(({ className, grow, ...rest }, ref) => {
  return (
    <select aria-label={rest.name} className={cx('select', { grow }, className)} ref={ref} {...rest} />
  );
});

Select.displayName = 'Select';

Select.propTypes = {
  className: PropTypes.string,
  grow: PropTypes.bool,
};

Select.defaultProps = {
  className: undefined,
  grow: false,
};

Select.Option = Option;

export default Select;
