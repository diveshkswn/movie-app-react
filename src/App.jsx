/* eslint-disable linebreak-style */
/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable linebreak-style */
import React, { useEffect, useState } from 'react';
import MovieList from './components/MovieList';
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

  useEffect(() => {
    const movieFavouriteInLocalStorage = JSON.parse(localStorage.getItem('react-movie-app-favourites'));
    setFavourites(movieFavouriteInLocalStorage);
  }, []);

  function saveToLocalStorage(items) {
    localStorage.setItem('react-movie-app-favourites', JSON.stringify(items));
  }

  function addFavouriteMovie(movie) {
    if (favourites) {
      const newFavList = [...favourites, movie];
      setFavourites(newFavList);
      saveToLocalStorage(newFavList);
    } else {
      const newFavList = [movie];
      setFavourites(newFavList);
      saveToLocalStorage(newFavList);
    }
  }

  function removeFavouriteMovie(movie) {
    const newFavouriteList = favourites.filter((fav) => fav.imdbID !== movie.imdbID);
    setFavourites(newFavouriteList);
    saveToLocalStorage(newFavouriteList);
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
        <MovieList
          handleFovouritesClick={addFavouriteMovie}
          addToFavourites={AddFavourites}
          movies={movies}
        />
      </div>

      <div className="row d-flex align-items-center mt-4 mb-4">
        <MovieListHeading
          heading={favourites ? 'Favourites' : null}
        />
      </div>
      <div className="row image-row">
        <MovieList
          handleFovouritesClick={removeFavouriteMovie}
          addToFavourites={RemoveFavouties}
          movies={favourites}
        />
      </div>
      <h6 className="m-3 text-center footer-section">
        Developed by
        <a href="https://diveshkswn.github.io/portfolio_"> Divesh Keswani</a>
      </h6>

    </div>

  );
}

export default App;
