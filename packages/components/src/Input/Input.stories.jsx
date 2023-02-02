import Input from './Input';

export default {
  component: Input,
  title: 'Components/Input',
  args: {
    disabled: false,
    name: 'test',
  },
};

const Template = args => <Input {...args} />;

export const withDefaults = Template.bind({});
