import React from "react";
import "../../App.css";
import "./header.css";
import landingpage from "../../assets/landingpage.JPG";

const Header = () => {
  return (
    <div className="header section__padding" id="home">
      <div className="header-content">
        <div className="scale-up-center">
          <h1>Simply The Best Reviews</h1>
          <p>
            Help your community by giving your honest review of those you've
            worked with.
          </p>
          <div className="header-content__input scale-up-center">
            <input type="email" placeholder="Sign up with your email here" />
            <button type="button">Make a Difference</button>
          </div>
        </div>
      </div>
      <div className="header-image scale-up-center">
        <img src={landingpage} alt="landing-page" />
      </div>
    </div>
  );
};

export default Header;
