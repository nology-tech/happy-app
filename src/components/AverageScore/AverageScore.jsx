import React from "react";
import styles from "./AverageScore.module.scss";
import ProgressBar from "../ProgressBar";

const AverageScore = () => {
  const data = {
    physicalEnvironment: 1,
    finances: 0.8,
    career: 0.2,
    generalHealth: 0.9,
    fitness: 0.6, 
    friends: 0.1, 
    family: 0.3, 
    loveLife: 0.7,
    spirituality: 1, 
    purpose: 0.4,
    selfWorth: 1, 
    fun: 0.4, 
    appearance: 0.9, 
    sleep: 0.4, 
}
 
  let sumOfData = 0;
  let numberOfData = 0;

  for (const key in data) {
  sumOfData += data[key]
  numberOfData += 1 
}

const percent  = parseInt((sumOfData / numberOfData) * 100);

  return (
    <section className={styles.container}>
      <div className={styles.insideBox}>
        <p>Overall Scores</p>
      </div>
        <ProgressBar percent={percent}/>
    </section>
  );
};

export default AverageScore;
