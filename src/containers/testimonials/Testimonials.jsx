import React from "react";
import Attribute from "../../components/attribute/Attribute";
import "./testimonials.css";
import testimonials from "../../assets/testimonials.jpg";

const attributesData = [
  {
    title: "Ensure a safe workplace",
    text: "By joining our community you can be positive your future workplaces will be warm and welcoming.",
  },
  {
    title: "Vett potential clients",
    text: "By joining our community you can be positive your future workplaces will be warm and welcoming.",
  },
  {
    title: "Connect with like-minded individuals",
    text: "By joining our community you can be positive your future workplaces will be warm and welcoming.",
  },
  {
    title: "Give your honest opinion",
    text: "By joining our community you can be positive your future workplaces will be warm and welcoming.",
  },
];

const Testimonials = () => {
  return (
    <div className="testimonials section__padding" id="testimonials">
      <div className="testimonials-heading">
        <h1>
          Help others by giving your experience so they can make the right
          decisions.
        </h1>
        <p>Sign Up Today</p>
        <div className="testimonials-image">
          <img src={testimonials} alt="dancer" />
        </div>
      </div>
      <div className="testimonials-container">
        {attributesData.map((item, index) => (
          <Attribute
            title={item.title}
            text={item.text}
            key={item.title + index}
          />
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
