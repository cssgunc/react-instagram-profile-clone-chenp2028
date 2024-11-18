import React from 'react';
import './Navbar.css';
import { igName, igLogo, heart, compass, person, camera } from './assets';

function Navbar() {
  return (
    <div className="navbar">

        <div className = "container">
            <div className = "c1">
            <div className = "icon">
                <img src = {igLogo} alt = "Instagram icon" width = "25"/>
            </div>

            <div className="vertical-line"></div>

            <div class="icon">
                <img src = {igName} alt = "Instagram" width = "120px" height = "auto"/>
            </div>
            </div>


            <div className="search-bar">
                <input type="text" placeholder="Search"/>
            </div>

            <div class="header-icons">
                <a href="#"><img src={compass} alt="Home Icon"/></a>
                <a href="#"><img src={heart} alt="Messages Icon"/></a>
                <a href="#"><img src={person} alt="Notifications Icon"/></a>
                <a href="#"><img src={camera} alt="Profile Icon"/></a>
            </div>
            </div>

    </div>
  );
}

export default Navbar;