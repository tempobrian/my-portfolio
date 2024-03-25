import React from 'react';
import Jammming from '../../assets/jammming.png'
import omgkawaii from '../../assets/omgkawaii.png'
import Typography from '../../components/Typography/Typography';
import { Container, Row, Col } from '../../components/Grid/Grid';
import { Wrapper } from '../../components/Wrapper/Wrapper';


const Work = () => {
  // This data would typically come from a CMS or API call
  const portfolioItems = [
    { id: 1, title: 'Jammming', image: Jammming, description: 'Create playlists using Spotify API.' },
    { id: 2, title: 'OMG Kawaii', image: omgkawaii, description: 'Our passion to make people smile provides us the motivation and the determination to rise this amazing plushies to a high level of quality with a customer’s satisfaction as our main goal!' },
    // Add more projects as needed
  ];

  return (
    <>
      <Wrapper>
        <Container>
          <Typography variant="h1" color="primary" gradient="true">My Work</Typography>
        </Container>
      </Wrapper>
      {
        portfolioItems.map((item) => (
          <Wrapper key={item.id} $gradient={item.id % 2 === 0}>
            <Container>
              <Row>
                <Col align="center">
                  <img width="100%" height="auto" src={item.image} alt={item.title} />
                  <Typography variant="h3">{item.title}</Typography>
                  <Typography>{item.description}</Typography>
                </Col>
              </Row>
            </Container>

          </Wrapper>
        ))
      }

    </>

  );
};

export default Work;
