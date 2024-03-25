import React from 'react';
import { NavLink } from 'react-router-dom';
import { HeaderContainer, Logo, Nav, ThemeSwitcher } from './Header.styles';
import { Moon, Sun } from '@styled-icons/fa-solid';
import { Container, Row, Col } from '../Grid/Grid';

const Header = ({ onToggleTheme, theme }) => {
  return (
    <HeaderContainer>
      <Container>
        <Row>
          <Col xs="4">
            <Logo to="/">brianpena.dev</Logo>
          </Col>
          <Col xs="4" align="center">
            <Nav>
              <NavLink to="/">Home</NavLink>
              <NavLink to="/work">Work</NavLink>
              <NavLink to="/about">About</NavLink>
              <NavLink to="/contact">Contact</NavLink>
            </Nav>
          </Col>
          <Col xs="4" align="right">
            <ThemeSwitcher onClick={onToggleTheme}>
              {theme === 'light' ? <Moon size="24" /> : <Sun size="24" />}
            </ThemeSwitcher>
          </Col>
        </Row>
      </Container>
    </HeaderContainer>
  );
};

export default Header;
