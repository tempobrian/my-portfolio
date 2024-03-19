import React from 'react';
import { NavLink } from 'react-router-dom';
import { HeaderContainer, Logo, Nav, ThemeSwitcher } from './Header.styles';
import { Moon, Sun } from '@styled-icons/fa-solid';
import Typography from '../Typography/Typography';

const Header = ({ onToggleTheme, theme }) => {
  return (
    <HeaderContainer>
      <Logo to="/">brianpena.dev</Logo>
      <Nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/work">Work</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </Nav>
      <ThemeSwitcher onClick={onToggleTheme}>
        {theme === 'light' ? <Moon size="24" /> : <Sun size="24" />}
      </ThemeSwitcher>
    </HeaderContainer>
  );
};

export default Header;
