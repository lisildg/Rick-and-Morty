import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const CardDetail = () => {
  let { id } = useParams();
  let [fetchData, updateFetchData] = useState({});
  let { name, image, origin, location, gender, species, status, type } = fetchData;
  let api = `https://rickandmortyapi.com/api/character/${id}`;

  useEffect(() => {
    async function fetchData() {
      let data = await fetch(api).then((res) => res.json());
      updateFetchData(data);
    }
    fetchData();
  }, [api]);

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-4">
          <img src={image} alt={name} className="img-fluid" />
        </div>
        <div className="col-md-8">
          <h1>{name}</h1>
          <div className="badge">
            {(() => {
              if (status === 'Dead') {
                return <div className="badge bg-danger fs-5">{status}</div>;
              } else if (status === 'Alive') {
                return <div className="badge bg-success fs-5">{status}</div>;
              } else {
                return <div className="badge bg-secondary fs-5">{status}</div>;
              }
            })()}
          </div>
          <div className="content">
            <div className="">
              <span className="fw-bold">Gender: </span>
              {gender}
            </div>
            <div className="">
              <span className="fw-bold">Location: </span>
              {location?.name}
            </div>
            <div className="">
              <span className="fw-bold">Origin: </span>
              {origin?.name}
            </div>
            <div className="">
              <span className="fw-bold">Species: </span>
              {species}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardDetail;
