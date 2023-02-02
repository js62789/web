import React from 'react';
import { withFields } from '../Form/Form.stories';
import ThemeProvider from './ThemeProvider';

export default {
  component: ThemeProvider,
  title: 'Components/ThemeProvider',
};

export const withCustomTheme = args => (
  <ThemeProvider {...args}>
    {withFields()}
  </ThemeProvider>
);

withCustomTheme.args = {
  theme: {
    buttonBackgroundColor: '#123456',
    buttonBorderColor: '#234567',
    buttonBorderRadius: '3px',
    buttonTextColor: '#eee',
    buttonPadding: '0.8rem 2rem',
    buttonBackgroundHover: '#234567',
    buttonBackgroundActive: '#345678',
    primaryColor: 'rgba(80, 120, 160, 0.8)',
    primaryColorBorder: 'rgba(80, 120, 160, 0.9)',
    primaryColorHover: 'rgba(80, 120, 160, 0.9)',
    primaryColorActive: 'rgba(80, 120, 160, 1)',
    inputBackgroundColor: '#f8f8f8',
    inputBorderColor: 'transparent',
    inputBorderRadius: '3px',
    inputBorderSize: '2px',
    inputPadding: '1rem',
    inputBorderColorFocus: '#aaa',
    selectBackgroundColor: '#f8f8f8',
    selectBorderColor: 'transparent',
    selectBorderRadius: '3px',
    selectBorderSize: '2px',
    selectPadding: '1rem 2rem 1rem 1rem',
    selectBorderColorFocus: '#aaa',
    textAreaBackgroundColor: '#f8f8f8',
    textAreaBorderColor: 'transparent',
    textAreaBorderRadius: '3px',
    textAreaBorderSize: '2px',
    textAreaPadding: '1rem',
    textAreaBorderColorFocus: '#aaa',
  }
}
