import React from "react";
import styles from "./Logo.module.scss";
import personLogo from '../../assets/images/person-logo.png';
import roundLogo from '../../assets/images/round-logo.png';

const Logo = () => {
  return (
    <div className={styles.logoContainer}>
      <img src={roundLogo} alt='happy app round logo on a yellow background' className={styles.roundLogo}/>
      <h2 className={styles.textLogo}>Happy App</h2>
      <img src={personLogo} alt='happy person logo' className={styles.personLogo}/>
    </div>
  );
};

export default Logo;
