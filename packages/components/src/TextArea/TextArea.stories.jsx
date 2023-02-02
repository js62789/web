import TextArea from './TextArea';

export default {
  component: TextArea,
  title: 'Components/TextArea',
  args: {
    disabled: false,
    name: 'test',
  },
};

const Template = args => <TextArea {...args} />;

export const withDefaults = Template.bind({});
