import React from 'react';
import { HomeContainer, Title, Subtitle } from './Home.styles';
import { Button } from '../../components/Button/Button';

const Home = () => {
  return (
    <HomeContainer>
      <Title>Welcome to My Portfolio</Title>
      <Subtitle>I'm a Front-End Developer passionate about building beautiful and functional user experiences.</Subtitle>
      <Button href="#work">See My Work</Button>
    </HomeContainer>
  );
};

export default Home;