import React from 'react';
import Button from '../Button/Button';
import Input from '../Input/Input';
import Select from '../Select/Select';
import TextArea from '../TextArea/TextArea';
import Form from './Form';

export default {
  component: Form,
  title: 'Components/Form',
};

export const withFields = args => (
  <Form {...args}>
    <Form.Field>
      <Input grow name="firstName" placeholder="First Name" />
    </Form.Field>
    <Form.Field>
      <Input grow name="lastName" placeholder="Last Name" />
    </Form.Field>
    <Form.Field>
      <TextArea grow name="description" placeholder="Description" />
    </Form.Field>
    <Form.Field>
      <Select grow name="ageRange">
        <Select.Option>Age Range</Select.Option>
        <Select.Option value="10">0-10</Select.Option>
        <Select.Option value="20">11-20</Select.Option>
        <Select.Option value="30">21-30</Select.Option>
        <Select.Option value="40">31-40</Select.Option>
      </Select>
    </Form.Field>
    <Button type="reset">Clear</Button>
    <Button primary type="submit">Submit</Button>
  </Form>
);
