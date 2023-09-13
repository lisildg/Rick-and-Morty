import React from 'react';
import styles from './Search.module.css';

const Search = ({ setPageNumber, setSearch }) => {
  return (
    <form className="input-group flex-sm-row flex-column aling-items-center mb-3">
      <input
        onChange={(e) => {
          setPageNumber(1);
          setSearch(e.target.value);
        }}
        placeholder="Search for Characters"
        type="text"
        className={`form-control ${styles.input}`}
      />
      <button
        onClick={(e) => {
          e.preventDefault();
        }}
        className={`btn btn-primary fs-5 ${styles.button}`}
        type="button"
        id="button-addon2"
      >
        Search
      </button>
    </form>
  );
};

export default Search;
