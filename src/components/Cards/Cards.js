import React from 'react'

const Cards = ({results}) => {
    let display;
   console.log(results)
   if (results){
    display = results.map((ele) =>{
        let {id, name, image, status, species, gender, espisode, origin, location} = ele
         return(
         <div key={id} className='col-4'>
          <div className=''>
            <img src={image} alt='' className=''/> 
            <name></name>
          </div>
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
