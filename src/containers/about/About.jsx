import React from "react";
import "./about.css";
import Feature from "../../components/feature/Feature";

const About = () => {
  return (
    <div className="about section__margin" id="about">
      <div className="about-feature">
        <Feature
          title="Who Are We?"
          text="We are a company dedicated to improving the community. Making positive changes inside and out. Also, providing a product to improve lives. But most importantly we want to make the world a safer place."
        />
      </div>
      <div className="about-heading">
        <h1 className="about-text">
          Connect with your community and make a difference.
        </h1>
        <p>Explore Reviews</p>
      </div>
      <div className="about-container">
        <Feature
          title="Find Reviews"
          text="Read reviews from vetted individuals, companies, or organizations whose indetities have been verified for accuracy."
        />
        <Feature
          title="Post Reviews"
          text="Give your honest opinion and first-hand experience working with others in the community."
        />
        <Feature
          title="Find A Job"
          text="Search for jobs from quality employer's that have a positive, vetted reputation."
        />
      </div>
    </div>
  );
};

export default About;
