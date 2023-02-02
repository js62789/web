import React from 'react';
import List from './List';

export default {
  component: List,
  title: 'Components/List',
};

export const withItems = args => (
  <List {...args}>
    <List.Item>List Item</List.Item>
    <List.Item>List Item</List.Item>
    <List.Item>List Item</List.Item>
  </List>
);

export const withNestedItems = args => (
  <List {...args}>
    <List.Item>List Item</List.Item>
    <List.Item>
      <List>
        <List.Item>List Item</List.Item>
        <List.Item>
          <List>
            <List.Item>List Item</List.Item>
            <List.Item>List Item</List.Item>
          </List>
        </List.Item>
      </List>
    </List.Item>
    <List.Item>List Item</List.Item>
  </List>
);
