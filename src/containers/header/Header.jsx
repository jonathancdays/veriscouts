import React from 'react';
import'./header.css';
import landingpage from '../../assets/landingpage.JPG';

const Header = () => {
  return (
    <div className="header section__padding" id="home">
      <div className="header-content">
        <h1>Simply The Best Reviews.</h1>
        <div className="header-content__input">
          <p>Help your community by giving your honest review of those you've worked with.</p>
          <input type="email" placeholder="Sign up with your email."/>
          <button type="button">Make a Difference</button>
        </div>
        <div className="header-image">
        {/*<img src={landingpage} alt="landing-page image"/>*/}  
        </div>
      </div>
    </div>
  )
}

export default Header