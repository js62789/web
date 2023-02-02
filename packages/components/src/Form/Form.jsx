import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames/bind';
import styles from './Form.module.css';
import Field from './Field';

const cx = classnames.bind(styles);

const Form = React.forwardRef(({ className, ...rest }, ref) => {
  return (
    <form className={cx(className)} ref={ref} {...rest} />
  );
});

Form.displayName = 'Form';

Form.propTypes = {
  className: PropTypes.string,
};

Form.defaultProps = {
  className: undefined,
};

Form.Field = Field;

export default Form;
