import React from 'react'

const InputGroup = ({total, name, setID}) => {


  return (
    <div className="input-group  mb-3">
  <select onChange={ele => setID(ele.target.value)} className="form-select" id={name}>
    <option value='1' selected>Choose...</option>
    {[...Array(total).keys()].map(e=>{
        return(
            <option value={e + 1}>{name}-{e +1}</option>
        )
    })}
    
   
  </select>
</div>
  )
}

export default InputGroup
