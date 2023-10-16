import React from 'react';

const SingleMovie = ({ movie }) => {
  return (
    <div className="single-movie">
      <h2>{movie.title}</h2>
      <p>Tagline: {movie.tagline}</p>
      <p>Vote Average: {movie.vote_average}</p>
      <p>Release Date: {movie.release_date}</p>
      <p>Runtime: {movie.runtime} minutes</p>
    </div>
  );
};

export default SingleMovie;
