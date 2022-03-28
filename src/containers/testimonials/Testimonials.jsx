import React from "react";
import Attribute from "../../components/attribute/Attribute";
import "./testimonials.css";
import testimonials from "../../assets/testimonials.jpg";

const attributesData = [
  {
    title: "Ensure a safe workplace",
    text: "By using these reviews I can research potential models to predict their behavior. -Arcelia Vegas",
  },
  {
    title: "Vett potential clients",
    text: "I always make sure to check what kind of person clients are before even meeting them. -Zuri Obi",
  },
  {
    title: "Connect with like-minded individuals",
    text: "The days of struggling to find quality friends are over. You can tell just by looking at their profile. -Sato Kohaku",
  },
  {
    title: "Give your honest opinion",
    text: "With this site I don't have to tip-toe around the turh anymore! -Dmitriy Osipov",
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
