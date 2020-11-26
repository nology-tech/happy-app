import React, { useState } from "react";
import styles from "./LifeComponent.module.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const LifeComponent = () => {

  const [rangeValue, setRangeValue] = useState(0);

  const handleChange = (event) => {
    return setRangeValue(event.target.value)
  };

  return (
    <main className={styles.lifeComponentContainer}>
      <div>
        <h2 className={styles.lifeComponentTitle}>Physical Environment</h2>
        <span className={styles.lifeComponentScore}>{rangeValue}/10</span>
      </div>
      <div>
        <span><FontAwesomeIcon icon="search" /></span>
        <input className={styles.lifeComponentSlider} type="range" value={rangeValue} min="0" max="10" step="1" onChange={handleChange} />
      </div>
    </main>
  );
};

export default LifeComponent;
