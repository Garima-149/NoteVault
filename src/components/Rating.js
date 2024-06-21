import React, { useState, useEffect } from 'react';
import './Rating.css';

const Rating = ({ totalStars = 5, onRate, initialRating = 0 }) => {
  const [rating, setRating] = useState(initialRating);
  const [hoverRating, setHoverRating] = useState(0);

  useEffect(() => {
    setRating(initialRating);
  }, [initialRating]);

  const handleMouseEnter = (index) => {
    setHoverRating(index);
  };

  const handleMouseLeave = () => {
    setHoverRating(0);
  };

  const handleClick = (index) => {
    setRating(index);
    if (onRate) {
      onRate(index);
    }
  };

  return (
    <div className="rating">
      {[...Array(totalStars)].map((_, index) => {
        index += 1;
        return (
          <span
            key={index}
            className={index <= (hoverRating || rating) ? 'star active' : 'star'}
            onClick={() => handleClick(index)}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
          >
            &#9733;
          </span>
        );
      })}
    </div>
  );
};

export default Rating;
