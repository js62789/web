import React from 'react';
import Select from './Select';

export default {
  component: Select,
  title: 'Components/Select',
  args: {
    disabled: false,
    name: 'test',
  },
};

const Template = args => <Select {...args} />;

export const withDefaults = Template.bind({});

export const withOptions = args => (
  <Select {...args}>
    <Select.Option value="1">One</Select.Option>
    <Select.Option value="2">Two</Select.Option>
    <Select.Option value="3">Three</Select.Option>
  </Select>
);
