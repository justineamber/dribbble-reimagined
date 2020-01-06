import React from 'react';
import { Eye, MessageCircle, Heart, Paperclip } from 'react-feather';
import './Content.css';

function Content() {
  return (
<div className="card-wrapper">
<img src="/rick-morty.png" alt="dribbble card" className="dribbblecard">
</img>
<div className="card-info-wrapper">
  <div className="info-left">
    <img src="/icon-team.png" alt="designer-team-icon" className="teamicon">
    </img>
    <span className="designer-name">Pierre Kleinhouse</span>
    <sup>PRO</sup>
  </div>
  <div className="info-right">
      <ul className="engagement-metrics">
      <li><a href="#"><Eye /></a>
      <span>3096</span></li>
      <li><a href="#"><MessageCircle /></a>
      <span>18</span></li>
      <li><a href="#"><Heart /></a>
      <span>540</span></li>
      </ul>
    </div>
  </div>
</div>
  );
}

export default Content;
