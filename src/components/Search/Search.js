import React from 'react';
import styles from './Search.module.css';

const Search = ({setPageNumber, setSearch}) => {
  return (
    <form className='d-flex justify-content-center gap-4 mb-5'>
        <input  
        onChange={e=>{
            setPageNumber(1)
            setSearch(e.target.value);
            }} 
            placeholder='Search for Characters' 
            type='text' 
            className={styles.input}>

            </input>
        <button onClick={e=>{e.preventDefault()}} className={`${styles.button} btn fs-5`}></button>
      
    </form>
  )
}

export default Search
