/* eslint-disable linebreak-style */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable linebreak-style */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
/* eslint-disable linebreak-style */
import React from 'react';

function MovieList(props) {
  const FavouriteComponent = props.addToFavourites;

  function populateList(movie, index) {
    return (
      <>
        <div className="image-container d-flex justify-content-start m-3">
          <img src={movie.Poster} alt={index} />
          <div onClick={() => props.handleFovouritesClick(movie)} className="overlay d-flex align-items-center justify">
            <FavouriteComponent />
          </div>
        </div>

      </>
    );
  }

  return (
    <>
      {props.movies ? props.movies.map(populateList) : null}

    </>
  );
}

export default MovieList;
