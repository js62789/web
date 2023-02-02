import React from 'react';
import Image from './Image';

export default {
  component: Image,
  title: 'Components/Image',
};

const Template = args => <Image {...args} />;

export const withDefaults = Template.bind({});
