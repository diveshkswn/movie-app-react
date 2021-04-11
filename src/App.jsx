/* eslint-disable linebreak-style */
/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable linebreak-style */
import React, { useEffect, useState } from 'react';
import Movie from './components/Movie';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import MovieListHeading from './components/MovieListHeading';
import SearchBox from './components/SearchBox';
import AddFavourites from './components/AddFavourites';
import RemoveFavouties from './components/RemoveFavourites';

function App() {
  const [movies, setMovies] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  const [favourites, setFavourites] = useState([]);

  async function getMovieRequest() {
    const URL = `https://www.omdbapi.com/?s=${searchValue}&apikey=ae6db3a8`;

    const response = await fetch(URL);
    const responseJSON = await response.json();
    setMovies(responseJSON.Search);
  }

  useEffect(() => {
    getMovieRequest();
  }, [searchValue]); // useEffect will call getMovieRequest
  // function everytime there is a change in seachValue

  function addFavouriteMovie(movie) {
    const newFavList = [...favourites, movie];
    setFavourites(newFavList);
  }

  function removeFavouriteMovie(movie) {
    const newFavouriteList = favourites.filter((fav) => fav.imdbID !== movie.imdbID);
    setFavourites(newFavouriteList);
  }

  return (
    <div className="container-fluid movie-app">
      <div className="row d-flex align-items-center mt-4 mb-4">
        <MovieListHeading
          heading={searchValue.length > 0 ? searchValue : 'Movies'}
        />
        <SearchBox
          searchValue={searchValue}
          setSearchValue={setSearchValue}
        />
      </div>
      <div className="row image-row">
        <Movie
          handleFovouritesClick={addFavouriteMovie}
          addToFavourites={AddFavourites}
          movies={movies}
        />
      </div>

      <div className="row d-flex align-items-center mt-4 mb-4">
        <MovieListHeading
          heading={favourites.length > 0 ? 'Favourites' : null}
        />
      </div>
      <div className="row image-row">
        <Movie
          handleFovouritesClick={removeFavouriteMovie}
          addToFavourites={RemoveFavouties}
          movies={favourites}
        />
      </div>

    </div>

  );
}

export default App;
