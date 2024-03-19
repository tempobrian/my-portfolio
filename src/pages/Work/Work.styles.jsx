import styled from 'styled-components';

export const WorkContainer = styled.section`
  padding: 4rem;
  text-align: center;
  background: ${(props) => props.theme.colors.body};
  color: ${(props) => props.theme.colors.text};
`;

export const PortfolioGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
`;

export const PortfolioItem = styled.div`
  background: ${(props) => props.theme.colors.itemBackground};
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  transition: 0.3s;
  
  &:hover {
    box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
  }
  
  img {
    width: 100%;
    height: auto;
  }
`;

export const PortfolioItemTitle = styled.h3`
  font-size: 1.25rem;
  margin: 0.5rem 0;
`;
