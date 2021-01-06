import React from 'react';
import logo from '../KTP_brackets_logo.png';
import profile from '../Profile.png';

const Header = () => (
    <nav className="navbar">
        <a className="logo" href="#"><img src={logo} alt="logo"></img></a>
        <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Brackets</a></li>
            <li><a href="#">Leaderboard</a></li>
            {/* <li><a className="profile-link" href="#"><img src={profile} alt="logo"></img></a></li> */}
        </ul>
    </nav>
);

export default Header;