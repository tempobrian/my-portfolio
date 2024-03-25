import React from 'react';
import { Button } from '../../components/Button/Button';
import Typography from '../../components/Typography/Typography';
import { Wrapper } from '../../components/Wrapper/Wrapper';
import { Container, Row, Col } from '../../components/Grid/Grid';
import penabrianbg from '../../assets/penabrianbg.jpg'
import { Html5, Javascript, Css3, ReactLogo, Nodedotjs, Github, Git, Mocha, Redux } from "@styled-icons/simple-icons"



const Home = ({ theme }) => {
  return (
    <><Wrapper>
      <Container>
        <Row>
          <Col xs="8">
            <Typography gradient="true" variant="h1" color="primary">Software Engineer</Typography>
            <Typography variant="body">I'm a Front-End Developer passionate about building beautiful and functional user experiences.</Typography>
            <Button color="primary" href="#work">See My Work</Button>
          </Col>
          <Col xs="4">
            <img src={penabrianbg} width="300px" align="right" />
          </Col>
        </Row>

      </Container>
    </Wrapper>
      <Wrapper $gradient="true">
        <Container>
          <Typography variant="h3" align="center" >Hi, I’m Brian. Nice to meet you.</Typography>
          <Typography color="secondary" variant="body" align="center">I'm an experienced Software Engineer based in New York City.
            I have worked with start-ups and large organizations helping them write efficient code for their websites and mobile apps using modern frameworks and tools.
            I enjoy turning complex problems into simple, beautiful and intuitive interfaces with responsive design.</Typography>
          <Typography gradient="true" variant="h5">Languages I speak:</Typography>
          <Html5 size="56" color="#e54d26"></Html5>
          <Css3 size="56" color="#1572b6"></Css3>
          <Javascript size="56" color="#f0db4f"></Javascript>

          <Typography gradient="true" variant="h5">Developer Tools:</Typography>
          <ReactLogo size="56" color="#61dafb"></ReactLogo>
          <Nodedotjs size="56" color="#68a063"></Nodedotjs>
          <Github size="56" color={theme === 'light' ? '#000' : "#FFF"}></Github>
          <Git size="56" color="#e84e31"></Git>
          <Mocha size="56" color="#896446"></Mocha>
          <Redux size="56" color="#7248b6"></Redux>
        </Container>
      </Wrapper></>
  );
};

export default Home;