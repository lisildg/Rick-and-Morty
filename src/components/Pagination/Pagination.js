import React, {useEffect, useState} from 'react';
import styles from './Pagination.module.css';
import ReactPaginate from 'react-paginate';

const Pagination = ({ info, pageNumber, setPageNumber }) => { 
  let [width, setwidth] = useState(window.innerWidth);
  let updateDimension = ()=>{
    setwidth(window.innerWidth)
  }
  useEffect(()=>{
    window.addEventListener("resize", updateDimension);
    return ()=> window.removeEventListener("resize", updateDimension)
  },[])

    return (
        <>
        <style jsx>
            {
                `
                @media(max-width: 768px){
                    .next, .prev{
                        display: none;
                    }
                    .pagination{
                        font-size: 14px;
                    }
                }
                `
            }
        </style>
        <div className="container">
            <ReactPaginate 
             className={` pagination justify-content-center gap-4 my-4`}  
             forcePage={pageNumber === 1 ? 0 :pageNumber - 1}
             nextLabel= "Next"
             previousLabel= "Prev"
             nextClassName={`${styles.button} btn next`}
             previousClassName={`${styles.button} btn prev`} 
             pageClassName={`${styles.button}  page-item`}
             pageLinkClassName='page-link'
             marginPagesDisplayed={width < 576 ? 1 : 2}
             pageRangeDisplayed={width < 576 ? 1 : 2}
             activeClassName='active'
             onPageChange={(data)=>{setPageNumber(data.selected + 1)}}
             pageCount={info?.pages}
             />
            
        </div>
        </>
    );
};

export default Pagination;
