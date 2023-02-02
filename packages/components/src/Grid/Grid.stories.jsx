import React from 'react';
import Grid from './Grid';
import Tile from '../Tile';

export default {
  component: Grid,
  title: 'Components/Grid',
  args: {
    padded: false,
  },
};

export const withSpecificWidths = args => (
  <Grid {...args}>
    <Grid.Column md={3}><Tile grow>3 Cell Column on medium devices</Tile></Grid.Column>
    <Grid.Column md={3}><Tile grow>3 Cell Column on medium devices</Tile></Grid.Column>
    <Grid.Column md={3}><Tile grow>3 Cell Column on medium devices</Tile></Grid.Column>
    <Grid.Column md={3}><Tile grow>3 Cell Column on medium devices</Tile></Grid.Column>
    <Grid.Column md={4}><Tile grow>4 Cell Column on medium devices</Tile></Grid.Column>
    <Grid.Column md={4}><Tile grow>4 Cell Column on medium devices</Tile></Grid.Column>
    <Grid.Column md={4}><Tile grow>4 Cell Column on medium devices</Tile></Grid.Column>
    <Grid.Column md={6}><Tile grow>6 Cell Column on medium devices</Tile></Grid.Column>
    <Grid.Column md={6}><Tile grow>6 Cell Column on medium devices</Tile></Grid.Column>
    <Grid.Column md={12}><Tile grow>12 Cell Column on medium devices</Tile></Grid.Column>
  </Grid>
);
