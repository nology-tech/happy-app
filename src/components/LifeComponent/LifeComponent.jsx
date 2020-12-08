import React, { useState } from "react";
import styles from "./LifeComponent.module.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const LifeComponent = (props) => {
  const { isReadOnly, name, score } = props;
  const [rangeValue, setRangeValue] = useState(score);


  const handleChange = (event) => {
    return setRangeValue(event.target.value)
  };

  return (
    <main className={styles.container}>
      <div className={styles.titleAndScore}>
      <div>
        {/* <span><FontAwesomeIcon icon="question" /></span> */}
        <h2 className={styles.title}>{name}</h2>
      </div>      
        <p className={styles.score}>{rangeValue}/10</p>
      </div>
      <div className={styles.component}>
        <div className={styles.circle}></div>
        {isReadOnly 
        ? <input className={styles.lifeComponentSlider} type="range" value={rangeValue} min="0" max="10" step="1" readOnly />
        : <input className={styles.lifeComponentSlider} type="range" value={rangeValue} min="0" max="10" step="1" onChange={handleChange} />
      }
      </div>
    </main>
  );
};

export default LifeComponent;
