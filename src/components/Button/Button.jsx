import styled, { css } from 'styled-components';

export const sizeVariants = {
  small: css`
    padding: 5px 10px;
    font-size: 0.8rem;
  `,
  medium: css`
    padding: 10px 20px;
    font-size: 1rem;
  `,
  large: css`
    padding: 15px 30px;
    font-size: 1.2rem;
  `,
};

export const Button = styled.button`
  background-color: ${(props) => props.theme.primary};
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.2s ease;
  
  ${(props) => sizeVariants[props.size || 'medium']}

  &:hover {
    background-color: ${(props) => props.theme.secondary};
    transform: scale(1.05);
  }

  &:focus {
    outline: 3px solid ${(props) => props.theme.secondary};
    outline-offset: 2px;
  }
`;
