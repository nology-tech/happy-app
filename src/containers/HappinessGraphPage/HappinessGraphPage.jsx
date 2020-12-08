import React from "react";
import styles from "./HappinessGraphPage.module.scss";
import Graph from "../../components/Graph";

const HappinessGraphPage = () => {
  return (
    <div className={styles.happinessPageDiv}>
      <p>HappinessGraphPage works</p>
      <Graph />
    </div>
  );
};

export default HappinessGraphPage;
