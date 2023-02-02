import { useEffect } from 'react';
import PropTypes from 'prop-types';

function ThemeProvider({ children, theme }) {
  useEffect(() => {
    const lastTheme = {};

    for (const key in theme) {
      lastTheme[key] = document.documentElement.style.getPropertyValue(`--${key}`);
      document.documentElement.style.setProperty(`--${key}`, theme[key]);
    }

    return () => {
      for (const key in theme) {
        document.documentElement.style.setProperty(`--${key}`, lastTheme[key]);
      }
    };
  }, [theme]);

  return children;
}

ThemeProvider.propTypes = {
  children: PropTypes.node,
  theme: PropTypes.shape({}),
};

ThemeProvider.defaultProps = {
  children: undefined,
  theme: undefined,
};

export default ThemeProvider;
