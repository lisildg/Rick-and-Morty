import React from 'react';
import styles from './Search.module.css';

const Search = () => {
  return (
    <div className=''>
        <input placeholder='Search for Characters' type='text' className={styles.input}></input>
        <button className={`${styles.button} btn`}></button>
      
    </div>
  )
}

export default Search
