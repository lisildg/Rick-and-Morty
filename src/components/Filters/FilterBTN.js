import React from 'react'

const FilterBTN = ({name, index, items, task, setPageNumber}) => {
  return (
    <div>
         <style jsx>
        {`
          .x:checked + label {
            background-color: warning;
            color: white;
          }
          input[type="radio"] {
            display: none;
          }
        `}
      </style>
      <div class="form-check">
  <input onClick={()=>{
    setPageNumber(1);
    task(items)
  }} class="form-check-input x" type="radio" name={name} id={`${name}-${index}`}/>
  <label class="btn btn-outline-warning" for={`${name}-${index}`}>{items}   </label>
</div>
    </div>
  )
}

export default FilterBTN
