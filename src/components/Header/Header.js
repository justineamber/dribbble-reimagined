import React from 'react';
import { MoreHorizontal, Activity, Mail, UploadCloud } from 'react-feather';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <div className="wrapper">
        <img className="logo" src="/dribbble-logo.png" alt="dribble logo"/>
        <ul className="lists">
          <li>Shots</li>
          <li>Designers</li>
          <li>Meetups</li>
          <li>Jobs</li>
        <li><MoreHorizontal /></li>
        </ul>
      </div>
      <ul className="lists">
        <li><img className="profile-picture" src="/justine.png" alt="Justine Hill profile"/></li>
        <li><Mail /></li>
        <li><Activity /></li>
        <li><UploadCloud /></li>
      </ul>
    </header>
  );
}

export default Header;
