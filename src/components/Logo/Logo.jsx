import React from "react";
import styles from "./Logo.module.scss";
import personLogo from '../../assets/images/person-logo.png';


const Logo = () => {
  return (
    <div className={styles.logoContainer}>
      <h2 className={styles.textLogo}>Happy</h2>
      <img src={personLogo} alt='happy person logo' className={styles.personLogo}/>
    </div>
  );
};

export default Logo;
