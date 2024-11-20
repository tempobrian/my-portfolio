import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { opacify } from 'polished';

export const HeaderContainer = styled.header`
  background: ${(props) => props.theme.colors.body};
  color: ${(props) => props.theme.colors.text};
  border-bottom: thin solid ${(props) => opacify(-0.8, props.theme.colors.secondary)};
  padding: 20px 0;
`;

export const Logo = styled(Link)`
  font-size: 2rem;
  color: ${(props) => props.theme.colors.primary};
  text-decoration: none;
`;

export const Nav = styled.nav`

  a {
    color: ${(props) => props.theme.colors.text};
    text-decoration: none;
    padding: 0.5rem 1rem;
    transition: color 0.3s ease;

    &.active {
      color: ${(props) => props.theme.colors.primary};
    }

    &:hover {
      color: ${(props) => props.theme.colors.primary};
    }
  }
`;

export const ThemeSwitcher = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  color: ${(props) => props.theme.colors.text};
`;
