import React from 'react';
import'./feature.css';

const Feature = ( {title, text} ) => {
  return (
    <div className="about-container__feature">
      <div className="features-container__feature-title">
        <div />
        <h1>{title}</h1>
        <div className="features-container_feature-text">
          {text}
        </div>
      </div>
    </div>
  )
}

export default Feature