import React, {useState, useEffect} from 'react'
import Cards from '../components/Cards/Cards';
import InputGroup from '../components/Filters/Category/InputGroup';

const Location = () => {
  let [id, setID] = useState(1);
  let [info, setInfo] = useState([]);
  let {name, type, dimension}= info;
  let [results, setResults] = useState([])
  let api = ` https://rickandmortyapi.com/api/location/${id}`;

  useEffect(()=>{

    (async function() {
      let data = await fetch(api).then(res=> res.json())
      setInfo(data);

      let a = await Promise.all(
        data.residents.map((e)=>{
          return fetch(e).then(res=> res.json())
        })
      );
      setResults(a)
    })()
  }, [api])
  return (
    <div className='conteiner'>
      <div className='row mb-3'>
        <h1 className='text-center mb-3'>
          Location: {name ==="" ? "Unknoun" : name}
        </h1>
        <h5 className='text-center mb-4'>
        Dimension: {dimension ==="" ? "Unknoun" : dimension}
        </h5>
        <h6 className='text-center mb-4'>
        Type: {type ==="" ? "Unknoun" : type}
        </h6>
      </div>
      <div className='row'>
        <div className='col-lg-3 col-12 mb-4'>
          <h4 className='text-center mb-4'>
          Pick Location
          </h4>
          <InputGroup total={126} name="Location" setID={setID}/>
        </div>
        <div className='col-lg-8 col-12' > </div>
        <div className='row '> <Cards page="/location/" results={results}/></div>
      </div>
      
    </div>
  )
}

export default Location;
