import React from 'react';
import { Link } from 'react-router-dom';
import { HeaderContainer } from './HeaderStyles';

function Header({ onDarkMode }) {
  return (
    <HeaderContainer>
      <h1 onClick={() => onDarkMode((darkMode) => !darkMode)}>brianpena.dev</h1>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/portfolio">Portfolio</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li><Link to="/resume">Resume/CV</Link></li>
        </ul>
      </nav>
    </HeaderContainer>
  );
}

export default Header;