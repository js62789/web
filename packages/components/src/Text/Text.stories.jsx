import React from 'react';
import Text from './Text';

export default {
  component: Text,
  title: 'Components/Text',
  args: {
    children: 'This is text.',
  },
};

const Template = args => <Text {...args} />;

export const withDefaults = Template.bind({});
