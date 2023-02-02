import Button from './Button';

export default {
  component: Button,
  title: 'Components/Button',
  args: {
    disabled: false,
  },
};

const Template = args => <Button {...args} />;

export const withText = Template.bind({});

withText.args = {
  children: 'Press Me',
};
