import React from 'react'
import Gender from './Category/Gender'
import Species from './Category/Species'
import { Status } from './Category/Status'

const Filters = ({setPageNumber, setStatus, setGender, setSpecies}) => {
  let clear=()=>{
    setStatus("");
    setPageNumber("");
    setGender("");
    setSpecies("");
    window.location.reload(false);
  }
  return (
    <div classNameName='col-3'>
      <div classNameName='text-center fw-bold fs-4 mb-2'>filter
        </div>
        <div onClick={clear} style={{cursor: "pointer"}} classNameName='text-center text-decoration-underline mb-4'> Clear Filters
        </div>
        <div className="accordion " id="accordionExample">
          <Gender setGender={setGender} setPageNumber={setPageNumber} />
          <Species setSpecies={setSpecies} setPageNumber={setPageNumber} />
          <Status setStatus={setStatus} setPageNumber={setPageNumber}/>
</div>
    </div>
  )
}

export default Filters
