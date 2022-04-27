import React from "react";
import styles from './Card.module.css';

const Card = ({data:{name, url}}) => {
    return(
        <div className={styles.main}>
          <h1>{name}</h1>
          <p>{url}</p>
        </div>
    )
}

export default Card;