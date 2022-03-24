import React from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri'
import logo from '../../assets/logo.svg';
import'./navbar.css';

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-links">
        <div className="navbar-links_logo">
          <img id="logo" src={logo} alt="logo" />  
        </div>
        <div></div>
      </div>
    </div>
  )
}

export default Navbar