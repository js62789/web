import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames/bind';
import styles from './Text.module.css';

const cx = classnames.bind(styles);

const Text = React.forwardRef(({ caption, centered, className, subtitle, tagName, title, ...rest }, ref) => {
  const Element = caption ? 'figcaption' : tagName;

  return (
    <Element className={cx({ caption, centered, subtitle, title }, className)} ref={ref} {...rest} />
  );
});

Text.displayName = 'Text';

Text.propTypes = {
  caption: PropTypes.bool,
  centered: PropTypes.bool,
  className: PropTypes.string,
  subtitle: PropTypes.bool,
  tagName: PropTypes.string,
  title: PropTypes.bool,
};

Text.defaultProps = {
  caption: false,
  centered: false,
  className: undefined,
  subtitle: false,
  tagName: 'span',
  title: false,
};

export default Text;
