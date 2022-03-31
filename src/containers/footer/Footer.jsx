import React from "react";
import "./footer.css";
import logo from "../../assets/logo.svg";

const Footer = () => {
  return (
    <div className="footer section__padding">
      <div className="footer-heading">
        <h1>
          Help your community by giving your honest review of those you've
          worked with.
        </h1>
      </div>
      <div className="footer-btn">
        <p>Make A Difference</p>
      </div>
      <div className="footer-links">
        <div className="footer-links_logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="footer-links_div">
          <h4>Navigation</h4>
          <p>Account</p>
          <p>Social Media</p>
          <p>Reviews</p>
          <p>Jobs</p>
        </div>
        <div className="footer-links_div">
          <h4>Company</h4>
          <p>Terms & Conditions</p>
          <p>Privacy Policy</p>
          <p>Accessibility Statement</p>
        </div>
        <div className="footer-links_div">
          <h4>Contact</h4>
          <p>Address</p>
          <p>Phone</p>
          <p>E-Mail</p>
        </div>
      </div>
      <div className="footer-copyright">
        <p>
          Copyright Disclaimer under Section 107 of the copyright act 1976,
          allowance is made for fair use for purposes such as criticism,
          comment, news reporting, scholarship, and research.
        </p>
        <p>
        Disclaimer: Under the Fair Use Copyright Act I have taken
            inspiration and my experience from my previous employer to design
            and code a personal project for creative purposes. I do not own any
            Veriscouts assets.
        </p>
      </div>
    </div>
  );
};

export default Footer;
