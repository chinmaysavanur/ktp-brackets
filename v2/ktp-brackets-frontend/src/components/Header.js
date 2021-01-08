import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../KTP_brackets_logo.png';
import profile from '../Profile.png';
import * as AiIcons from 'react-icons/ai';
import './Header.css';

const Header = () => {
  const [toggle, setToggle] = useState(false);

  const handleClick = () => {
    setToggle(!toggle);
  };

  return (
    <header>
      <div className='nav-left-items'>
        <Link className='nav-logo' to='/'>
          <img src={logo} alt=''></img>
        </Link>

        <Link className='nav-menu-bars' onClick={handleClick}>
          <AiIcons.AiOutlineMenu></AiIcons.AiOutlineMenu>
        </Link>
      </div>

      <nav className={'nav-right-items' + (toggle ? ' active' : '')}>
        <ul className={'nav-items-list' + (toggle ? ' active' : '')}>
          <li className='nav-item'>
            <NavLink
              className='nav-item-link'
              exact
              to='/home'
              activeClassName='current-page'
            >
              Home
            </NavLink>
          </li>
          <li className='nav-item'>
            <NavLink
              className='nav-item-link'
              to='/brackets'
              activeClassName='current-page'
            >
              Brackets
            </NavLink>
          </li>
          <li className='nav-item'>
            <NavLink
              className='nav-item-link'
              to='/leaderboard'
              activeClassName='current-page'
            >
              Leaderboard
            </NavLink>
          </li>
          <li className='nav-item-profile'>
            <NavLink className='nav-profile-link' to='/personal'>
              <img src={profile} alt=''></img>
              <p>Last, First</p>
            </NavLink>
          </li>
          <li className='nav-item-profile-responsive'>
            <NavLink
              className='nav-item-link'
              to='/personal'
              activeClassName='current-page'
            >
              Profile
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
