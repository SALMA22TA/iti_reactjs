import React from 'react';
import './Sty.css';

const Movie = ({ title, posterPath, rating }) => {
  return (
    <div className="movie-card">
      <img src={posterPath} alt={title} className="movie-poster" />
      <div className="movie-info">
        <h3 className="movie-title">{title}</h3>
        <p className="movie-rating">Rating: {rating}</p>
      </div>
    </div>
  );
};

export default Movie;
