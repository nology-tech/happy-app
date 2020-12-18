import React from "react";
import styles from "./TermsConditions.module.scss";
import Navbar from "../../components/Navbar";

const TermsConditions = (props) => {
  const { signOut } = props;

  return (
    <>
      <Navbar signOut={signOut} />
      <div className={styles.text}>
        <h1>Welcome !</h1>
        <p>
          This page is a Work in Progress. Please use Navigation menu to visit
          more interesting pages !
        </p>
      </div>
    </>
  );
};

export default TermsConditions;
