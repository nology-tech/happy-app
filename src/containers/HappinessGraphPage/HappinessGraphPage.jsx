import React from "react";
import styles from "./HappinessGraphPage.module.scss";
import Graph from "../../components/Graph";
import Navbar from "../../components/Navbar";

const HappinessGraphPage = (props) => {
  const { signOut, user } = props;

  return (
    <div className={styles.happinessPageDiv}>
      <Navbar signOut={signOut} text="Happiness Graph" />

      <Graph user={user} />
    </div>
  );
};

export default HappinessGraphPage;
