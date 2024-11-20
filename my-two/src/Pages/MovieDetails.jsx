// import React, { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';
// import axios from 'axios';

// const MovieDetails = () => {
//   const { id } = useParams(); 
//   const [movie, setMovie] = useState(null);
//   const apiKey = '9813ce01a72ca1bd2ae25f091898b1c7';
//   const imgPath = 'https://image.tmdb.org/t/p/w500';

//   useEffect(() => {
//     axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}`)
//       .then(response => {
//         setMovie(response.data);
//       })
//       .catch(error => {
//         console.error('Error fetching movie details:', error);
//       });
//   }, [id]);

//   if (!movie) return <div>Loading...</div>;

//   return (
//     <div className="movie-details">
//       <h2>{movie.title}</h2>
//       <img src={`${imgPath}${movie.poster_path}`} alt={movie.title} className="movie-poster" />
//       <p>{movie.overview}</p>
//       <p>Rating: {movie.vote_average}</p>
//       <p>Release Date: {movie.release_date}</p>
//     </div>
//   );
// };

// export default MovieDetails;
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import '../Sty.css'; 

const MovieDetails = () => {
  const { id } = useParams(); 
  const [movie, setMovie] = useState(null);
  const apiKey = '9813ce01a72ca1bd2ae25f091898b1c7';
  const imgPath = 'https://image.tmdb.org/t/p/w500';

  useEffect(() => {
    axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}`)
      .then(response => {
        setMovie(response.data);
      })
      .catch(error => {
        console.error('Error fetching movie details:', error);
      });
  }, [id]);

  if (!movie) return <div className="loading">Loading...</div>;

  return (
    <div className="movie-details-container">
      <div className="movie-details-header">
        <h2 className="movie-title">{movie.title}</h2>
        <p className="movie-release-date">Release Date: {movie.release_date}</p>
      </div>
      <div className="movie-details-content">
        <img src={`${imgPath}${movie.poster_path}`} alt={movie.title} className="movie-poster" />
        <div className="movie-info">
          <p className="movie-overview">{movie.overview}</p>
          <p className="movie-rating">Rating: {movie.vote_average}</p>
        </div>
      </div>
      <button className="btn-watch-trailer">Watch Trailer</button>
    </div>
  );
};

export default MovieDetails;
