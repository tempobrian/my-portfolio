import React from 'react';
import { Button } from '../../components/Button/Button';
import Typography from '../../components/Typography/Typography';
import { Wrapper } from '../../components/Wrapper/Wrapper';

const Home = () => {
  return (
    <><Wrapper>
      <Typography gradient variant="h1" color="primary">Software Engineer</Typography>
      <Typography variant="body">I'm a Front-End Developer passionate about building beautiful and functional user experiences.</Typography>
      <Button color="primary" href="#work">See My Work</Button>
    </Wrapper>
      <Wrapper color="accentBackground">
        <Typography variant="h2" >Hi, I’m Brian. Nice to meet you.</Typography>
        <Typography variant="body">I'm an experienced Software Engineer based in New York City. I have worked with start-ups and large organizations helping them write efficient code for their websites and mobile apps using modern frameworks and tools.</Typography>
      </Wrapper></>
  );
};

export default Home;