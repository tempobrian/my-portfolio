import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const HeaderContainer = styled.header`
  background: ${(props) => props.theme.colors.headerBackground};
  color: ${(props) => props.theme.colors.text};
  padding: 1rem 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: inset 0 0 1px ${(props) => props.theme.colors.secondary};
`;

export const Logo = styled(Link)`
  font-size: 2rem;
  color: ${(props) => props.theme.colors.primary};
  text-decoration: none;
`;

export const Nav = styled.nav`
  display: flex;
  gap: 1rem;

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
