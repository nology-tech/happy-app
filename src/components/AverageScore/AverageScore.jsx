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

  // calculate average here and pass it down the tree
  // make variable with name average and pass it down as props - don't need state

  return (
    <section className={styles.container}>
      <div className={styles.insideBox}>
        <p>Overall Scores</p>
      </div>
        <ProgressBar />
    </section>
  );
};

export default AverageScore;
