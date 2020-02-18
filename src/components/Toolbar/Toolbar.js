import React from "react";
import "./Toolbar.css";

function Toolbar() {
  return (
    <div className="toolbar">
      <ul className="toolbar_lists">
        <li>
          <a href="#">Following</a>
        </li>
        <li>
          <a href="#">Popular</a>
        </li>
        <li>
          <a href="#">Recent</a>
        </li>
        <li>
          <a href="#">Debuts</a>
        </li>
        <li>
          <a href="#">Teams</a>
        </li>
        <li>
          <a href="#">Playoffs</a>
        </li>
        <li>
          <a href="#">Suggestions</a>
        </li>
      </ul>
    </div>
  );
}

export default Toolbar;
