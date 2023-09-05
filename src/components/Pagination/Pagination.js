import React from 'react';
import styles from './Pagination.module.css';
import ReactPaginate from 'react-paginate';

const Pagination = ({ info, pageNumber, setPageNumber }) => { 
    
  
    return (
        <div className="container">
            <ReactPaginate 
             className={` pagination justify-content-center gap-4 my-4`}  
             forcePage={pageNumber === 1 ? 0 :pageNumber - 1}
             nextLabel= "Next"
             previousLabel= "Prev"
             nextClassName={`${styles.button} btn`}
             previousClassName={`${styles.button} btn`} 
             pageClassName={`${styles.button}  page-item`}
             pageLinkClassName='page-link'
             activeClassName='active'
             onPageChange={(data)=>{setPageNumber(data.selected + 1)}}
             pageCount={info?.pages}
             />
            
        </div>
    );
};

export default Pagination;
