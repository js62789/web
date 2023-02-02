import React from 'react';
import Grid from '../../src/Grid';
import Image from '../../src/Image';
import List from '../../src/List';
import Text from '../../src/Text';
import Tile from '../../src/Tile';

export default {
  title: 'Templates/Dashboard',
  parameters: {
    layout: 'fullscreen',
  },
};

export const withSidebar = () => (
  <Grid style={{ flexDirection: 'column', flexWrap: 'nowrap', height: '100vh' }}>
    <Grid.Column sm="auto" style={{ backgroundColor: '#123456', color: 'white' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <Image src="https://via.placeholder.com/200x50" />
        <nav>
          <a href="#" style={{ color: 'inherit', display: 'inline-block', padding: '1rem 2rem' }}>Nav Item</a>
          <a href="#" style={{ color: 'inherit', display: 'inline-block', padding: '1rem 2rem' }}>Nav Item</a>
          <a href="#" style={{ color: 'inherit', display: 'inline-block', padding: '1rem 2rem' }}>Nav Item</a>
        </nav>
      </div>
    </Grid.Column>
    <Grid.Column style={{ flexGrow: 1 }}>
      <Grid style={{ flexWrap: 'nowrap', height: '100%' }}>
        <Grid.Column style={{ backgroundColor: '#123456', color: 'white', flexBasis: 200, flexShrink: 0 }}>
          <List>
            <List.Item>
              <a href="#" style={{ color: 'inherit', display: 'block', padding: '1rem' }}>Nav Item</a>
            </List.Item>
            <List.Item>
              <a href="#" style={{ color: 'inherit', display: 'block', padding: '1rem' }}>Nav Item</a>
            </List.Item>
            <List.Item>
              <a href="#" style={{ color: 'inherit', display: 'block', padding: '1rem' }}>Nav Item</a>
            </List.Item>
          </List>
        </Grid.Column>
        <Grid.Column grow sm="auto" style={{ backgroundColor: '#f8f8f8'}}>
          <div style={{ padding: '1.5rem' }}>
            <Grid padded>
              <Grid.Column sm="4">
                <Tile grow>
                  <Text title>Some Metric</Text>
                  <Image src="https://via.placeholder.com/100" style={{ display: 'block', margin: '0 auto' }} />
                </Tile>
              </Grid.Column>
              <Grid.Column sm="4">
                <Tile grow>
                  <Text title>Some Metric</Text>
                  <Image src="https://via.placeholder.com/100" style={{ display: 'block', margin: '0 auto' }} />
                </Tile>
              </Grid.Column>
              <Grid.Column sm="4">
                <Tile grow>
                  <Text title>Some Metric</Text>
                  <Image src="https://via.placeholder.com/100" style={{ display: 'block', margin: '0 auto' }} />
                </Tile>
              </Grid.Column>
              <Grid.Column sm="12">
                <Tile grow>
                  <Text title>Some Chart</Text>
                  <Image src="https://via.placeholder.com/1000x200" />
                </Tile>
              </Grid.Column>
            </Grid>
          </div>
        </Grid.Column>
      </Grid>
    </Grid.Column>
  </Grid>
);
