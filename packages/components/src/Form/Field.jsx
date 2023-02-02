import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames/bind';
import styles from './Form.module.css';

const cx = classnames.bind(styles);

function Field({ className, ...rest }) {
  return (
    <div className={cx('field', className)} {...rest} />
  );
}

Field.propTypes = {
  className: PropTypes.string,
};

Field.defaultProps = {
  className: undefined,
};

export default Field;
