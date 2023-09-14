import React from "react";
import { Link } from "react-router-dom";
import styles from "./Cards.module.css";

const Cards = ({ results, page }) => {
  let display;

  if (results) {
    display = results.map((ele) => {
      let { id, name, image, status, species, gender, origin, location } = ele;
      return (
        <Link
        style={{textDecoration: "none"}}
          to={`${page}${id}`}
          key={id}
          className={`${styles.card} col-lg-4 col-md-6 col-sm-6 col-12 position-relative text-dark`}
        >
          <div className={`${styles.card} d-flex flex-column justify-content-center border-info card`}>
            <img src={image} alt="" className="img-fluid" />
            <div className="p-2">
            <div className={`${styles.name} `}>{name}</div>
            <div>
              <div className="fs-6 fw-normal">Last location:</div>
              <div className="fs-5">{location.name}</div>
            </div>
          </div>
          </div>
          {(() => {
            if (status === "Dead") {
              return (
                <div
                  className={`position-absolute badge bg-danger ${styles.badge}`}
                >
                  {status}
                </div>
              );
            } else if (status === "Alive") {
              return (
                <div
                  className={`position-absolute badge bg-success ${styles.badge}`}
                >
                  {status}
                </div>
              );
            } else {
              return (
                <div
                  className={`position-absolute badge bg-secondary ${styles.badge}`}
                >
                  {status}
                </div>
              );
            }
          })()}
        </Link>
      );
    });
  } else {
    display = "No characters found";
  }

  return (
    <div className="row">
      {" "}
      {display}
    </div>
  );
};

export default Cards;
