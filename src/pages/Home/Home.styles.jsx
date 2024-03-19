import styled from 'styled-components';

export const HomeContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 4rem;
  text-align: center;
  background: ${(props) => props.theme.body};
  color: ${(props) => props.theme.text};
`;

export const Title = styled.h1`
  font-size: 3rem;
  margin-bottom: 1rem;
  color: ${(props) => props.theme.colors.primary};
`;

export const Subtitle = styled.p`
  font-size: 1.5rem;
  margin-bottom: 2rem;
  color: ${(props) => props.theme.secondary};
`;

export const CallToAction = styled.a`
  padding: 1rem 2rem;
  font-size: 1.25rem;
  text-transform: uppercase;
  border: none;
  border-radius: 5px;
  background: ${(props) => props.theme.accent};
  color: ${(props) => props.theme.buttonText};
  text-decoration: none;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${(props) => props.theme.accentHover};
  }
`;
