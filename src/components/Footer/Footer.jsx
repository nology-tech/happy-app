import React from "react";
import styles from "./Footer.module.scss";

const Footer = (props) => {
  const { addScoreToDataBase } = props;
  
  return (
    <div>
      <footer className={styles.footer}>
        <button type="submit" className={styles.submitButton} onClick={addScoreToDataBase}>
            +
        </button>
        <p>Submit</p>
      </footer>
    </div>
  );
};

export default Footer;
