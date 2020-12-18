import React from "react";
import styles from "./AverageScore.module.scss";
import ProgressBar from "../ProgressBar";

const AverageScore = (props) => {
  const { data } = props;

  const sum = data
    ? data.reduce(function (a, b) {
        return a + b;
      }, 0)
    : null;

  const percent = (sum / 15) * 10;

  return (
    <section className={styles.container}>
      <div className={styles.scores}>
        <p>Overall Happiness</p>
        <ProgressBar percent={percent} />
      </div>
    </section>
  );
};

export default AverageScore;
