import React, {useState} from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri'
import logo from '../../assets/logo.svg';
import'./navbar.css';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] =useState(false);

  return (
    <div className="navbar">
      <div className="navbar-links">
        <div className="navbar-links_logo">
          <img id="logo" src={logo} alt="logo" />  
        </div>
        <div className="navbar-links_container">
          <p><a href="#home">Home</a></p>
          <p><a href="#about">About</a></p>
          <p><a href="#reviews">Find Reviews</a></p>
          <p><a href="#features">Post Reviews</a></p>
          <p><a href="#blog">Posts</a></p>
        </div>
      </div>
      <div className="navbar-sign">
        <p>Log In</p>
        <button type="button">Register</button>
      </div>
      <div className="navbar-menu">
        {toggleMenu
        ? <RiCloseLine color="#fff" size-{27} onClick={() => setToggleMenu(false)}/>
        : <RiMenu3Line color="#fff" size-{27} onClick={() => setToggleMenu(true)}/>
      }
      </div>
    </div>
  )
}

export default Navbar