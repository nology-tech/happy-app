import React, { useState } from "react";
import styles from "./BarScore.module.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const BarScore = () => {

  const [rangeValue, setRangeValue] = useState(0);

  const handleChange = (event) => {
    // console.log(event)
    return setRangeValue(event.target.value)

  };

  return (
    <main>
      <h2 className={styles.title}>Physical Environment</h2>
      <span className={styles.score}>{rangeValue}/10</span>
      <span> <FontAwesomeIcon icon="search" /> </span>
      <input className={styles.slider} type="range" value={rangeValue} min="0" max="10" step="1" onChange={handleChange}  />
    </main>
  );
};

export default BarScore;


// const [rangeValue, setRangeValue] = useState(0);

// const handleChange = (event) => {
//   return setRangeValue(event.target.value)
// }

// return (
//   <main className={styles.card}>
//     <h2>{title}</h2>
//     <p>{info}</p>
//     <input type="range" value={rangeValue} min="0" max="10" step="1" onChange={handleChange}/>
//   </main>
// );