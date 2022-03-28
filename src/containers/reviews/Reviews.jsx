import React from 'react';
import'./reviews.css';
import reviews from '../../assets/reviews.jpg'

const Reviews = () => {
  return (
    <div className="reviews section__padding" id="reviews">
      <div className="reviews-image">
        <img src={reviews} alt="reviews" />
      </div>
      <div className="reviews-content">
        <h4>Make A Difference Now</h4>
        <h1>Join Our Community To Help Yourself And Others</h1>
        <p>Explore our reviews to see how impactful an honest review of your colleagues can be. All of our information is checked for validity and accuracy.</p>
        <h4>Sign Up Today</h4>
      </div>
    </div>
  )
}

export default Reviews