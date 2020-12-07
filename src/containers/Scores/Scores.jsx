import React from "react";
import styles from "./Scores.module.scss";
import NavBar from "../../components/Navbar";

const Scores = (props) => {
  const { signOut } = props
  return (
    <>
      <p className={styles.text}>Scores works</p>
      <NavBar signOut={signOut}/>
    </>
  );
};

export default Scores;
