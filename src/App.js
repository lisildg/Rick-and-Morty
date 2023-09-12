import React, {useState, useEffect} from "react";
import styles from './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap"
import Filters from "./components/Filters/Filters";
import Cards from "./components/Cards/Cards";
import Pagination from "./components/Pagination/Pagination";
import Search from "./components/Search/Search";
import NavBar from "./components/NavBar/NavBar";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Episodes from "./Pages/Episodes";
import Location from "./Pages/Location";

function App(){

  return(
    <Router>
      <div className="App">
      <NavBar />
      </div>
      <Routes >
        <Route path="/" element={<Home/>} />
        <Route path="/episodes" element={<Episodes/>} />
        <Route path="/location" element={<Location/>} />
      </Routes>
    </Router>
  )
}

const Home =() =>{
  let [pageNumber, setPageNumber] = useState(1);
  let [fetchData, updateFetchData] = useState([]);
  let  [status, setStatus] = useState("")
  let [search, setSearch] = useState("");
  let [gender, setGender]=useState("");
  let [species, setSpecies]= useState("");
  let {info, results} = fetchData;
 
  let api = `https://rickandmortyapi.com/api/character/?page=${pageNumber}&name=${search}&status=${status}&gender=${gender}&species=${species}`;

  useEffect(()=>{
    (async function(){
      let data = await fetch(api).then((res) => res.json())
      updateFetchData(data)
    })();
  },[api]);

  return (
    <div     >
     
    <div className={`${styles.bg} my-4`}>
    
    <div className="container">
      <div><Search setPageNumber={setPageNumber} setSearch ={setSearch}/></div>
      <div className="row">
        
          <Filters setStatus ={setStatus} setSpecies={setSpecies} setPageNumber={setPageNumber} setGender={setGender}/>
          
        <div className="col-8">
          <div>
            <Cards results={results} />
          </div>
        </div>
      </div>
    </div>  
    <div>
    </div>
    <Pagination info={info} pageNumber={pageNumber} setPageNumber={setPageNumber} />
    </div>
    </div>
  );
}

export default App;
