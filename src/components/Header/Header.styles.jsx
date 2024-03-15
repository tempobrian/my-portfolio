import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const HeaderContainer = styled.header`
  background: ${(props) => props.theme.headerBackground};
  color: ${(props) => props.theme.text};
  padding: 1rem 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: inset 0 0 1px ${(props) => props.theme.secondary};
`;

export const Logo = styled(Link)`
  font-size: 2rem;
  color: ${(props) => props.theme.primary};
  text-decoration: none;
`;

export const Nav = styled.nav`
  display: flex;
  gap: 1rem;

  a {
    color: ${(props) => props.theme.text};
    text-decoration: none;
    padding: 0.5rem 1rem;
    transition: color 0.3s ease;

    &.active {
      color: ${(props) => props.theme.primary};
    }

    &:hover {
      color: ${(props) => props.theme.primary};
    }
  }
`;

export const ThemeSwitcher = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  color: ${(props) => props.theme.text};
`;
