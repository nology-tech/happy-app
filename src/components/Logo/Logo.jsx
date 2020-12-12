import React from "react";
import styles from "./Logo.module.scss";
import newLogo from '../../assets/images/new-logo.png'

const Logo = () => {
  return (
    <div className={styles.logoContainer}>
      <img src={newLogo} alt='new logo' className={styles.newLogo}/>
    </div>
  );
};

export default Logo;
