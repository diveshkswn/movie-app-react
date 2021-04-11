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

  return (
    <>
      <div className="image-container d-flex justify-content-start m-3">
        <img src={props.Poster} alt="img" />
        <div onClick={() => props.handleFovouritesClick(props.movie)} className="overlay d-flex align-items-center justify">
          <FavouriteComponent />
        </div>
      </div>

    </>
  );
}

export default MovieList;
