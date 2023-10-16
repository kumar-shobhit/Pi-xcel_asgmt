import React, { useState, useEffect } from 'react';

const ListMovies = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function getData() {
      const response = await fetch('/api/movies');
      const payload = await response.json();
      setMovies(payload.data);
    }
    getData();
  }, []);

  return (
    <div>
      <h2>List of Movies</h2>
      <ul>
        {movies.map(movie => (
          <li key={movie.id}>
            <p>Title: {movie.title}</p>
            <p>Tagline: {movie.tagline}</p>
            <p>Vote Average: {movie.vote_average}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListMovies;
