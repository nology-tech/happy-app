import React from "react";
import styles from "./HappinessGraphPage.module.scss";
import Graph from "../../components/Graph";
import Navbar from "../../components/Navbar"

const HappinessGraphPage = (props) => {
  const { signOut } = props;

  return (
    <div className={styles.happinessPageDiv}>
      <Navbar signOut={signOut} text="Happiness Graph" />
      <Graph />
    </div>
  );
};

export default HappinessGraphPage;
