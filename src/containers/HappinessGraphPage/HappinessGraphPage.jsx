import React from "react";
import styles from "./HappinessGraphPage.module.scss";
import Graph from "../../components/Graph";

const HappinessGraphPage = () => {
  return (
    <div className={styles.happinessPageDiv}>
      
      <Graph />
    </div>
  );
};

export default HappinessGraphPage;
