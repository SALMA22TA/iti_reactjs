import React, { useState, useEffect } from 'react';
import axios from 'axios';
import MovieCard from '../Components/MovieCard';  
import '../Sty.css';  

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState(''); 
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

  // Filter movies based on the search term
  const filteredMovies = movies.filter(movie => 
    movie.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="home-page">
      {/* Search Bar */}
      <div className="search-bar">
        <input 
          type="text" 
          placeholder="Search for a movie..." 
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)} 
        />
      </div>

      {/* Movies Grid */}
      <div className="movies-container">
        {filteredMovies.length > 0 ? (
          filteredMovies.map(movie => (
            <MovieCard
              key={movie.id}
              title={movie.title}
              posterPath={`${imgPath}${movie.poster_path}`}
              rating={movie.vote_average}
              movieId={movie.id}  
            />
          ))
        ) : (
          <p>No movies found. <br></br><br></br> try something else to search</p>
        )}
      </div>
    </div>
  );
};

export default Home;
