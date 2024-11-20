import React from 'react';
import { Link } from 'react-router-dom';
import '../Sty.css'; 

const MovieCard = ({ title, posterPath, rating, movieId }) => {
  return (
    <div className="movie-card">
      <img src={posterPath} alt={title} className="movie-poster" />
      <div className="movie-info">
        <h3 className="movie-title">{title}</h3>
        <p className="movie-rating">Rating: {rating}</p>
        <Link to={`/movie/${movieId}`} className="show-more-button">Show More</Link>
      </div>
    </div>
  );
};

export default MovieCard;
