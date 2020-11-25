import React from "react";
import styles from "./Footer.module.scss";

const Footer = () => {
  
  const submitHandler = () => alert("This was clicked");

  return (
    <div>
      <footer className={styles.footer}>
        <button type="submit" className={styles.submitButton} onClick={submitHandler}>
            +
        </button>
        <p>Submit</p>
      </footer>
    </div>
  );
};

export default Footer;
