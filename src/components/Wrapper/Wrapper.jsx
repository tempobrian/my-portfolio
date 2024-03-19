import styled from 'styled-components';

export const Wrapper = styled.section`
  border-bottom: thin solid ${(props) => props.theme.colors.boxShadow};
  padding: 4rem;
  background: ${(props) => props.theme.colors[props.color || 'body']};
  color: ${(props) => props.theme.text};
`;