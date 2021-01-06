import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../KTP_brackets_logo.png';
import profile from '../Profile.png';
import styled from 'styled-components';

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  padding: 0.5em;
  background-color: #c4c4c4;
`;

const Logo = styled.a`
  margin-left: 1em;
`;

const NavLinks = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;

  margin: 0;
  padding: 0;
`;

const StyledLink = styled(NavLink)`
  display: inline-block;
  font-size: 1.5rem;
  background-color: black;
  text-decoration: none;
  color: inherit;
  padding: 0.2em 0.5em;
  margin: 0px 0.3em;
  text-align: center;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  &.active {
    color: black;
    background-color: white;
    font-weight: bold;
  }
`;

const Header = () => (
  <Nav className='header'>
    <Logo>
      <img style={{ height: '100%' }} src={logo} alt='logo'></img>
    </Logo>

    <NavLinks>
      <StyledLink exact to='/'>
        Home
      </StyledLink>
      <StyledLink to='/brackets'>Brackets</StyledLink>
      <StyledLink to='/leaderboard'>Leaderboard</StyledLink>
    </NavLinks>
  </Nav>
);

export default Header;
