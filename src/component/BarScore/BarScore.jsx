import React, { useState } from "react";
import styles from "./BarScore.module.scss";

const BarScore = () => {

  const [rangeValue, setRangeValue] = useState(0);

  const handleChange = (event) => {
    return setRangeValue(event.target.value)
  };

  return (
    <main>
      <input type="range" value={rangeValue} min="0" max="10" step="1" onChange={handleChange} />
      <span>{rangeValue}/10</span>
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