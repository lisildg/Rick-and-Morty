import React from 'react';
import styles from './Cards.modules.css';

const Cards = ({results}) => {
    let display;
   console.log(results)
   if (results){
    display = results.map((ele) =>{
        let {id, name, image, status, species, gender, espisode, origin, location} = ele
         return(
         <div key={id} className='col-4 position-relative'>
          <div className={styles.cards}>
            <img src={image} alt='' className=''/> 
            <div>{name}</div>
            <div>
              <div>Last location</div>
              <div>{location.name}</div>
            </div>
          </div>
         <div className='badge'> <div className={`${styles.badge} position-absolute `}>{status}</div></div>
            </div>
         )});
   } else {
    display = "No characters found"
   }
  return (
    <div>
      {display}
    </div>
  )
}

export default Cards
