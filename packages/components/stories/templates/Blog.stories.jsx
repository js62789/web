import React from 'react';
import Container from '../../src/Container';
import Grid from '../../src/Grid';
import Header from '../../src/Header';
import Image from '../../src/Image';
import Text from '../../src/Text';

export default {
  title: 'Templates/Blog',
};

export const withBlogPosts = () => (
  <Container breakpoints>
    <Header>The Blog</Header>
    <a href="#">
      <Image grow src="https://via.placeholder.com/600x200" />
    </a>
    <br/>
    <Text href="#" tagName="a" title>Lorem Ipsum Dolor Sit Amet</Text>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed risus ultricies tristique nulla. Nulla aliquet enim tortor at auctor urna. Non consectetur a erat nam at lectus...</p>
    <br/><br/>
    <Header tagName="h2">Trending</Header>
    <Grid padded>
      <Grid.Column sm="4">
        <a href="#">
          <Image grow src="https://via.placeholder.com/600x200" />
        </a>
        <br/>
        <Text href="#" tagName="a" title>Lorem Ipsum Dolor Sit Amet</Text>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed risus ultricies tristique nulla. Nulla aliquet enim tortor at auctor urna. Non consectetur a erat nam at lectus...</p>
      </Grid.Column>
      <Grid.Column sm="4">
        <a href="#">
          <Image grow src="https://via.placeholder.com/600x200" />
        </a>
        <br/>
        <Text href="#" tagName="a" title>Lorem Ipsum Dolor Sit Amet</Text>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed risus ultricies tristique nulla. Nulla aliquet enim tortor at auctor urna. Non consectetur a erat nam at lectus...</p>
      </Grid.Column>
      <Grid.Column sm="4">
        <a href="#">
          <Image grow src="https://via.placeholder.com/600x200" />
        </a>
        <br/>
        <Text href="#" tagName="a" title>Lorem Ipsum Dolor Sit Amet</Text>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed risus ultricies tristique nulla. Nulla aliquet enim tortor at auctor urna. Non consectetur a erat nam at lectus...</p>
      </Grid.Column>
    </Grid>
    <br/><br/>
    <Header tagName="h2">The Latest</Header>
    <Grid padded>
      <Grid.Column sm="4">
        <a href="#">
          <Image grow src="https://via.placeholder.com/600x200" />
        </a>
        <br/>
        <Text href="#" tagName="a" title>Lorem Ipsum Dolor Sit Amet</Text>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed risus ultricies tristique nulla. Nulla aliquet enim tortor at auctor urna. Non consectetur a erat nam at lectus...</p>
      </Grid.Column>
      <Grid.Column sm="4">
        <a href="#">
          <Image grow src="https://via.placeholder.com/600x200" />
        </a>
        <br/>
        <Text href="#" tagName="a" title>Lorem Ipsum Dolor Sit Amet</Text>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed risus ultricies tristique nulla. Nulla aliquet enim tortor at auctor urna. Non consectetur a erat nam at lectus...</p>
      </Grid.Column>
      <Grid.Column sm="4">
        <a href="#">
          <Image grow src="https://via.placeholder.com/600x200" />
        </a>
        <br/>
        <Text href="#" tagName="a" title>Lorem Ipsum Dolor Sit Amet</Text>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed risus ultricies tristique nulla. Nulla aliquet enim tortor at auctor urna. Non consectetur a erat nam at lectus...</p>
      </Grid.Column>
    </Grid>
  </Container>
);
