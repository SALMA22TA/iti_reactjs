// Home.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import MovieCard from '../Components/MovieCard'; 
import '../Sty.css';  

const Home = () => {
  const [movies, setMovies] = useState([]);
  const apiKey = '9813ce01a72ca1bd2ae25f091898b1c7';
  const imgPath = 'https://image.tmdb.org/t/p/w500';

  useEffect(() => {
    axios.get(`https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=${apiKey}`)
      .then(response => {
        setMovies(response.data.results);
      })
      .catch(error => {
        console.error('Error fetching movies:', error);
      });
  }, []); 

  return (
    <div className="movies-container">
      {movies.map(movie => (
        <MovieCard
          key={movie.id}
          title={movie.title}
          posterPath={`${imgPath}${movie.poster_path}`}
          rating={movie.vote_average}
          movieId={movie.id}  
        />
      ))}
    </div>
  );
};

export default Home;
