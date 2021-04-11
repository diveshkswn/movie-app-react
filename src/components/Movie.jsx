/* eslint-disable linebreak-style */
/* eslint-disable padded-blocks */
/* eslint-disable linebreak-style */
/* eslint-disable no-trailing-spaces */
/* eslint-disable linebreak-style */
/* eslint-disable no-multiple-empty-lines */
/* eslint-disable linebreak-style */
/* eslint-disable linebreak-style */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable linebreak-style */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
/* eslint-disable linebreak-style */
import React from 'react';
import MovieList from './MovieList';

function Movie(props) {


    
  function populateList(movie, index) {
    return (
      <MovieList
        Poster={movie.Poster}
        addToFavourites={props.addToFavourites}
        key={index}
        handleFovouritesClick={props.handleFovouritesClick}
        movie={movie}
      />
    );
  }

  return (
    <>
      {props.movies !== undefined ? props.movies.map(populateList) : null}

    </>
  );
}

export default Movie;
