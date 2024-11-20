import React from 'react';
import { Button } from '../../components/Button/Button';
import Typography from '../../components/Typography/Typography';
import { Wrapper } from '../../components/Wrapper/Wrapper';
import { Container, Row, Col } from '../../components/Grid/Grid';
import penabrianbg from '../../assets/penabrianbg.jpg'
import { Html5, Javascript, Css3, ReactLogo, Nodedotjs, Github, Git, Mocha, Redux, Typescript } from "@styled-icons/simple-icons"
import Card from "../../components/Card/Card";


const Home = ({ theme }) => {
  return (
    <><Wrapper>
      <Container>
        <Row>
          <Col align="center">
            <Typography gradient="true" variant="h1" color="primary">Software Engineer</Typography>
            <Typography color="secondary" variant="body">I'm a Front-End Developer passionate about building beautiful and functional user experiences.</Typography>
            <Button color="primary" href="#work">See My Work</Button>

          </Col>
        </Row>

      </Container>
    </Wrapper>
      <Wrapper $gradient="true">
        <Container>
          <Row align="center"><img src={penabrianbg} width="250px" align="right" style={{ borderRadius: "50%", marginBottom: "2rem" }} /></Row>
          <Row align="center">
            <Col xs="12">
              <Typography variant="h3" >Hi, I’m Brian. Nice to meet you.</Typography>
            </Col>
            <Col xs="12" md="5">
              <Typography color="secondary" variant="body" >I'm an experienced Software Engineer based in New York City.
                I have worked with start-ups and large organizations helping them write efficient code for their websites and mobile apps using modern frameworks and tools.
                I enjoy turning complex problems into simple, beautiful and intuitive interfaces with responsive design.</Typography>
            </Col>

          </Row>

          <Typography gradient="true" variant="h5" $noGutterBottom>Programming</Typography>
          <Typography variant="h3">Languages</Typography>
          <Row>
            <Col xs="12" md="6" lg="4"><Card title="HTML5" description="Markup language used for structuring and presenting hypertext documents" icon={<Html5 color="#e44d26" />}></Card></Col>
            <Col xs="12" md="6" lg="4"><Card title="CSS3" description="Styles and layouts web pages, controlling design, fonts, colors, and responsive elements" icon={<Css3 color="#1572b6" />}></Card></Col>
            <Col xs="12" md="6" lg="4"><Card title="Javascript" description="Scripting language that allows you to implement complex features on web pages" icon={<Javascript color="#f0db4f" />}></Card></Col>
          </Row>


          <Typography gradient="true" variant="h5" $noGutterBottom>Dev</Typography>
          <Typography variant="h3">Toolkit</Typography>
          <Row>
            <Col xs="12" md="6" lg="4"><Card title="React" description="Declarative, efficient, and flexible JavaScript library for building user interfaces" icon={<ReactLogo color="#61dafb" />}></Card></Col>
            <Col xs="12" md="6" lg="4"><Card title="Node.js" description="Server-side JavaScript runtime for building scalable, fast, and event-driven applications" icon={<Nodedotjs color="#68a063" />}></Card></Col>
            <Col xs="12" md="6" lg="4"><Card title="Github" description="Platform for version control, collaboration, and hosting code repositories using Git" icon={<Github color={theme === 'light' ? '#000' : "#FFF"} />}></Card></Col>
            <Col xs="12" md="6" lg="4"><Card title="Git" description="Distributed version control system for tracking changes and collaborating on code" icon={<Git color="#e84e31" />}></Card></Col>
            <Col xs="12" md="6" lg="4"><Card title="Mocha" description="JavaScript test framework for running and organizing asynchronous tests in Node.js" icon={<Mocha color="#896446" />}></Card></Col>
            <Col xs="12" md="6" lg="4"><Card title="Redux" description="State management library for JavaScript apps, enabling predictable and centralized state updates" icon={<Redux color="#7248b6" />}></Card></Col>
            <Col xs="12" md="6" lg="4"><Card title="Typescript" description="Superset of JavaScript adding static typing for safer, scalable development" icon={<Typescript color="#3178c6" />}></Card></Col>
          </Row>
        </Container>
      </Wrapper ></>
  );
};

export default Home;