import React from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri'
import'./navbar.css';

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-links">
        <div className="navbar-links_logo">
          <img src={logo} alt="logo" />  
        </div>
      </div>
    </div>
  )
}

export default Navbar