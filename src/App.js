import React, { useState, useEffect } from 'react';
import './App.css';
import SingleMovie from './SingleMovie';

const App = () => {
  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch('/api/movies');
        const data = await response.json();
        setMovies(data.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }

    fetchData();
  }, []);

  const handleMovieClick = (movie) => {
    setSelectedMovie(movie);
  };

  return (
    <div className="App">
      <header className="App-header">
        <p>Nice Movies:</p>
        <div className="movie-grid">
          {movies && movies.length > 0 ? (
            movies.map((movie, index) => (
              <div
                key={movie.id}
                className="movie-card"
                onClick={() => handleMovieClick(movie)}
              >
                <p>Title: {movie.title}</p>
                <p>Tagline: {movie.tagline}</p>
                <p>Vote Average: {movie.vote_average}</p>
              </div>
            ))
          ) : (
            <div>No movies available</div>
          )}
        </div>
      </header>

      {selectedMovie && <SingleMovie movie={selectedMovie} />}
    </div>
  );
};

export default App;
