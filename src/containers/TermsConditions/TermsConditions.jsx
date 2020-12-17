import React from "react";
import styles from "./TermsConditions.module.scss";
import Navbar from "../../components/Navbar";

const TermsConditions = (props) => {
  const { signOut } = props;

  return (
    <>
      <Navbar signOut={signOut} />

      <p className={styles.text}></p>
    </>
  );
};

export default TermsConditions;
