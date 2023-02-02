import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames/bind';
import styles from './Hero.module.css';
import Container from '../Container';

const cx = classnames.bind(styles);

const Hero = React.forwardRef(({ children, className, ...rest }, ref) => {
  return (
    <div className={cx('hero', className)} ref={ref} {...rest}>
      <Container breakpoints>
        {children}
      </Container>
    </div>
  );
});

Hero.displayName = 'Hero';

Hero.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

Hero.defaultProps = {
  children: undefined,
  className: undefined,
};

export default Hero;
