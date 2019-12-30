import React from 'react';
import { MoreHorizontal, Activity, Mail, UploadCloud } from 'react-feather';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <div className="wrapper">
        <a className="logo" href="/">
        <img src="/dribbble-logo.png" alt="dribble logo" className="dribbblelogo"></img>
        </a>
        <ul className="lists">
          <li><a href="#">Shots</a></li>
          <li><a href="#">Designers</a></li>
          <li><a href="#">Meetups</a></li>
          <li><a href="#">Jobs</a></li>
          <li><a href="#"><MoreHorizontal/></a></li>
        </ul>
        </div>
      <ul className="lists">
          <li><a className="profilepicture" href="/">
          <img src="/justine.png" alt="Justine Hill profile" className="profile-picture"/></a></li>
          <li><a href="#"><Mail /></a></li>
          <li><a href="#"><Activity /></a></li>
          <li><a href="#"><UploadCloud /></a></li>
      </ul>
    </header>
  );
}

export default Header;
