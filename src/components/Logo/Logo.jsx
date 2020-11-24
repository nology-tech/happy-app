import React from "react";
import styles from "./Logo.module.scss";
import splash from '../Logo/splash.png';
import myLogo from '../Logo/MY.png';

const Logo = () => {
  return (
    <div className={styles.logoContainer}>
      <img src={myLogo} alt='round img' className={styles.roundImg}/>
      <h2 className={styles.textLogo}>Happy App</h2>
      <img src={splash} alt='splash img' className={styles.splash}/>
    </div>
  );
};

export default Logo;
