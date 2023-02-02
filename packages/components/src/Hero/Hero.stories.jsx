import React from 'react';
import Hero from './Hero';

export default {
  component: Hero,
  title: 'Components/Hero',
};

const Template = args => <Hero {...args} />;

export const withDefaults = Template.bind({});
