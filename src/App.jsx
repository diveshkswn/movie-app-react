/* eslint-disable linebreak-style */
/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable linebreak-style */
import React, { useEffect, useState } from 'react';
import MovieList from './components/MovieList';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import MovieListHeading from './components/MovieListHeading';
import SearchBox from './components/SearchBox';

function App() {
  const [movies, setMovies] = useState([]);
  //   const [searchValue, setSearchValue] = useState('');

  async function getMovieRequest() {
    const URL = 'https://www.omdbapi.com/?s=Avengers&apikey=ae6db3a8';

    const response = await fetch(URL);
    const responseJSON = await response.json();
    setMovies(responseJSON.Search);
  }

  useEffect(() => {
    getMovieRequest();
  }, []);

  return (
    <div className="container-fluid movie-app">
      <div className="row">
        <MovieListHeading
          heading="IRON MAN"
        />
        <SearchBox />
      </div>
      <div className="row">
        <MovieList
          movies={movies}
        />
      </div>

    </div>

  );
}

export default App;
