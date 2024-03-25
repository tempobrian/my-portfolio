import styled from 'styled-components';
import { darken, lighten } from 'polished';


export const Wrapper = styled.section`
  border-bottom: thin solid ${(props) => props.theme.colors.boxShadow};
  background: ${(props) =>
    props.$gradient
      ? `linear-gradient(180deg, ${props.theme.colors.body
      } 0%, ${props.theme.mode === 'light'
        ? lighten(0.45, props.theme.colors.primary)
        : darken(0.4, props.theme.colors.primary)
      } 100%)`
      : props.theme.colors[props.color || 'body']};
  color: ${(props) => props.theme.text};
  padding: 16px 0;
  width: 100%;
`;