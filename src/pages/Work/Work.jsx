import React from 'react';
import { WorkContainer, PortfolioGrid, PortfolioItem, PortfolioItemTitle } from './Work.styles';

const Work = () => {
  // This data would typically come from a CMS or API call
  const portfolioItems = [
    { id: 1, title: 'Project One', image: '/path/to/image1.jpg', description: 'Description for Project One.' },
    { id: 2, title: 'Project Two', image: '/path/to/image2.jpg', description: 'Description for Project Two.' },
    // Add more projects as needed
  ];

  return (
    <WorkContainer>
      <h1>My Work</h1>
      <PortfolioGrid>
        {portfolioItems.map((item) => (
          <PortfolioItem key={item.id}>
            <img src={item.image} alt={item.title} />
            <PortfolioItemTitle>{item.title}</PortfolioItemTitle>
            {/* Additional information can be added here */}
          </PortfolioItem>
        ))}
      </PortfolioGrid>
    </WorkContainer>
  );
};

export default Work;
