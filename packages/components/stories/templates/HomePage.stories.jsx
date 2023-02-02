import React from 'react';
import Button from '../../src/Button';
import Container from '../../src/Container';
import Grid from '../../src/Grid';
import Header from '../../src/Header';
import Hero from '../../src/Hero/Hero';
import Image from '../../src/Image';
import Text from '../../src/Text';
import Tile from '../../src/Tile';

export default {
  title: 'Templates/HomePage',
  parameters: {
    layout: 'fullscreen',
  },
};

export const withHero = () => (
  <div>
    <Container breakpoints style={{ display: 'flex', justifyContent: 'space-between' }}>
      <Image src="https://via.placeholder.com/150x40" />
      <nav>
        <a href="#" style={{ color: 'inherit', display: 'inline-block', padding: '1rem 2rem' }}>Nav Item</a>
        <a href="#" style={{ color: 'inherit', display: 'inline-block', padding: '1rem 2rem' }}>Nav Item</a>
        <a href="#" style={{ color: 'inherit', display: 'inline-block', padding: '1rem 2rem' }}>Nav Item</a>
      </nav>
    </Container>
    <Hero breakpoints style={{ backgroundColor: '#123456', color: '#eee' }}>
      <Grid>
        <Grid.Column sm="6">
          <Header>Do Something You&apos;ve Never Done Before</Header>
          <Text subtitle>Go Ahead. Make It Count</Text>
          <Button>Get Started</Button>
        </Grid.Column>
        <Grid.Column sm="2" />
        <Grid.Column sm="4">
          <Image grow src="https://via.placeholder.com/200" />
        </Grid.Column>
      </Grid>
    </Hero>
    <Hero>
      <Container>
        <Grid padded>
          <Grid.Column sm="4">
            <Image src="https://via.placeholder.com/300" />
          </Grid.Column>
          <Grid.Column sm="8">
            <Text title>This is a title summarizing the content below</Text>
            <p>This is some information about some feature or functionality that this product can provide.</p>
          </Grid.Column>
        </Grid>
      </Container>
    </Hero>
    <Hero>
      <Container>
        <Grid padded>
          <Grid.Column sm="8">
            <Text title>This is a title summarizing the content below</Text>
            <p>This is some information about some feature or functionality that this product can provide.</p>
          </Grid.Column>
          <Grid.Column sm="4">
            <Image src="https://via.placeholder.com/300" />
          </Grid.Column>
        </Grid>
      </Container>
    </Hero>
    <Hero style={{ backgroundColor: '#444' }}>
      <Text centered style={{ color: '#eee' }} title>This is some bogus information that is supposed to entice you to buy our product.</Text>
    </Hero>
    <Hero>
      <Header tagName="h2">Tiers</Header>
      <Grid padded>
        <Grid.Column sm="4">
          <Tile grow style={{ height: '100%' }}>
            <Text title>Free</Text>
            <Text subtitle>For personal use</Text>
            <Text tagName="p">$0 per month</Text>
            <ul>
              <li>Do Something x times</li>
              <li>Do Something x times</li>
            </ul>
          </Tile>
        </Grid.Column>
        <Grid.Column sm="4">
          <Tile grow style={{ height: '100%' }}>
            <Text title>Premium</Text>
            <Text subtitle>For small teams</Text>
            <Text tagName="p">$99 per month</Text>
            <ul>
              <li>Do Something unlimited times</li>
              <li>Do Something unlimited times</li>
              <li>Do Something unlimited times</li>
            </ul>
          </Tile>
        </Grid.Column>
        <Grid.Column sm="4">
          <Tile grow style={{ height: '100%' }}>
            <Text title>Enterprise</Text>
            <Text subtitle>For large teams</Text>
            <Text tagName="p">Call to get a quote</Text>
            <ul>
              <li>Get whatever you want</li>
              <li>Get whatever you want</li>
              <li>Get whatever you want</li>
              <li>Get whatever you want</li>
            </ul>
          </Tile>
        </Grid.Column>
      </Grid>
    </Hero>
    <Hero style={{ backgroundColor: '#234567', color: 'white' }}>
      <Grid>
        <Grid.Column sm="4">
          <a href="#" style={{ color: 'inherit', display: 'block', padding: '1rem' }}>Link to somewhere</a>
          <a href="#" style={{ color: 'inherit', display: 'block', padding: '1rem' }}>Link to somewhere</a>
          <a href="#" style={{ color: 'inherit', display: 'block', padding: '1rem' }}>Link to somewhere</a>
          <a href="#" style={{ color: 'inherit', display: 'block', padding: '1rem' }}>Link to somewhere</a>
        </Grid.Column>
        <Grid.Column sm="4">
          <a href="#" style={{ color: 'inherit', display: 'block', padding: '1rem' }}>Link to somewhere</a>
          <a href="#" style={{ color: 'inherit', display: 'block', padding: '1rem' }}>Link to somewhere</a>
          <a href="#" style={{ color: 'inherit', display: 'block', padding: '1rem' }}>Link to somewhere</a>
          <a href="#" style={{ color: 'inherit', display: 'block', padding: '1rem' }}>Link to somewhere</a>
        </Grid.Column>
        <Grid.Column sm="4">
          <p>Copyright 2023</p>
          <p>123 Sesame St</p>
          <p>Chicago, IL 00000</p>
        </Grid.Column>
      </Grid>
    </Hero>
  </div>
);
