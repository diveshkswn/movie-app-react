/* eslint-disable linebreak-style */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable linebreak-style */
/* eslint-disable react/prop-types */
/* eslint-disable linebreak-style */
import React from 'react';

function SearchBox(props) {
  function handleSubmit(event) {
    props.setSearchValue(event.target.value);
  }
  return (
    <div className="col col-sm-2">
      <input onChange={handleSubmit} value={props.searchValue} className="form-control" type="text" placeholder="Type to search any movie" />
    </div>
  );
}

export default SearchBox;
