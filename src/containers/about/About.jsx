import React from "react";
import Feature from "../../components/feature/Feature";
import "./about.css";

const What = () => {
  return (
    <div className="about section__margin" id="about">
      <div className="about-feature">
        <Feature />
      </div>
      <div className="about-heading">
        <h1 className="about__text">
          Connect with your community and make a difference.
        </h1>
        <p>Explore Reviews</p>
      </div>
      <div className="about-container">
        <Feature />
        <Feature />
        <Feature />
      </div>
    </div>
  );
};

export default What;
