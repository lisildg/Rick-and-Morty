import React from 'react';
import styles from './Pagination.module.css'

const Pagination = ({ pageNumber, setPageNumber }) => { 
    let next = () => {
        setPageNumber((pageNumber) => pageNumber + 1);
    };

    let prev = () => {
        if (pageNumber === 1) return;
        setPageNumber((pageNumber) => pageNumber - 1);
    };
  
    return (
        <div className="container">
            <button onClick={prev} className={`${styles.button} btn`}>Prev</button>
            <button onClick={next} className={`${styles.button} btn`}>Next</button>
        </div>
    );
};

export default Pagination;
