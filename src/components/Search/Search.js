import React from 'react';

const Search = ({ setPageNumber, setSearch }) => {
  return (
    <form className="d-flex mb-3">
      <input
        onChange={(e) => {
          setPageNumber(1);
          setSearch(e.target.value);
        }}
        placeholder="Search for Characters"
        type="search"
        className="form-control me-sm-2"
      />
      <button
        onClick={(e) => {
          e.preventDefault();
        }}
        className="btn btn-primary my-2 my-sm-0"
        type="button"
        id="button-addon2"
      >
        Search
      </button>
    </form>
  );
};

export default Search;
