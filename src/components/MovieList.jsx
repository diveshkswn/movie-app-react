/* eslint-disable linebreak-style */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
/* eslint-disable linebreak-style */
import React from 'react';

function populateList(movie, index) {
  return (
    <div className="d-flex justify-content-start m-3">
      <img src={movie.Poster} alt={index} />
    </div>
  );
}

function MovieList(props) {
  return (
    <>
      {props.movies !== undefined ? props.movies.map(populateList) : null}
    </>
  );
}

export default MovieList;
