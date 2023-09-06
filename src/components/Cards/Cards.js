import React from 'react';
import styles from './Cards.module.css'; // Asegúrate de que el nombre del archivo sea correcto

const Cards = ({ results }) => {
    let display;

    if (results) {
        display = results.map((ele) => {
            let { id, name, image, status, species, gender, origin, location } = ele;
            return (
                <div key={id} className={`${styles.cards} col-4 position-relative`}>
                    <div className={`${styles.cards} card`}> {/* Agrega 'card' para usar los estilos de Bootstrap */}
                        <img src={image} alt='' className='' />
                        <div className={`${styles.name} `}>{name}</div>
                        <div>
                            <div>Last location:</div>
                            <div>{location.name}</div>
                        </div>
                    </div>
                    <div className={`badge ${styles.badge} position-absolute`}>{status}</div>
                </div>
            );
        });
    } else {
        display = "No characters found";
    }

    return (
        <div className="row"> {/* Agrega una clase 'row' para Bootstrap */}
            {display}
        </div>
    );
}

export default Cards;
