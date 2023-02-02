import React from 'react';
import Header from './Header';

export default {
  component: Header,
  title: 'Components/Header',
  args: {
    children: 'This is a header',
  },
};

const Template = args => <Header {...args} />;

export const withDefaults = Template.bind({});
