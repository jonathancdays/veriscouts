import React from "react";
import "./attribute.css";

const Attribute = ({ title, text }) => {
  return (
    <div className="attributes-container__attribute">
      <div className="attributes-container__attribute-title">
        <div />
        <h1>{title}</h1>
      </div>
      <div className="attributes-container_attribute-text">
        {text}
      </div>
    </div>
  )
}

export default Attribute
