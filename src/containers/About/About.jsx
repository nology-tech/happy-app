import React from "react";
import styles from "./About.module.scss";
import Navbar from "../../components/Navbar";

const About = (props) => {
  const { signOut } = props;

  return (
    <>
      <Navbar signOut={signOut} />

      <p className={styles.text}></p>
    </>
  );
};

export default About;
