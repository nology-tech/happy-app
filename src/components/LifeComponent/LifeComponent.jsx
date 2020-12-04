import React, { useState } from "react";
import styles from "./LifeComponent.module.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const LifeComponent = (props) => {
  const [rangeValue, setRangeValue] = useState(0);

  const { isReadOnly, score } = props;

  const handleChange = (event) => {
    return setRangeValue(event.target.value)
  };

  return (
    <main className={styles.container}>
      <div className={styles.titleAndScore}>
        <h2 className={styles.title}>{score.name}</h2>
        <p className={styles.score}>{rangeValue}/10</p>
      </div>
      <div>
        <span><FontAwesomeIcon icon="search" /></span>
        {isReadOnly 
        ? <input className={styles.lifeComponentSlider} type="range" value={rangeValue} min="0" max="10" step="1" readOnly />
        : <input className={styles.lifeComponentSlider} type="range" value={rangeValue} min="0" max="10" step="1" onChange={handleChange} />
      }
      </div>
    </main>
  );
};

export default LifeComponent;
