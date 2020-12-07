import React from "react";
import styles from "./GraphIcons.module.scss";

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';


const GraphIcons = () => {
  return (
    <div className={styles.iconsDiv}>
      <div className={styles.circleContainer}>
        <span className={styles.faStyle}><FontAwesomeIcon icon='smile'  /></span>
        <span className={styles.faStyle}><FontAwesomeIcon icon='donate'  /></span>
        <span className={styles.faStyle}><FontAwesomeIcon icon='user-tie' /></span>
        <span className={styles.faStyle}><FontAwesomeIcon icon='heart' /></span>
        <span className={styles.faStyle}><FontAwesomeIcon icon='users'  /></span>
        <span className={styles.faStyle}><FontAwesomeIcon icon='user-friends'  /></span>
        <span className={styles.faStyle}><FontAwesomeIcon icon='umbrella-beach'  /></span>
        <span className={styles.faStyle}><FontAwesomeIcon icon='heartbeat' /></span>
        <span className={styles.faStyle}><FontAwesomeIcon icon='brain' /></span>
        <span className={styles.faStyle}><FontAwesomeIcon icon='hands-helping'  /></span>
        <span className={styles.faStyle}><FontAwesomeIcon icon='hand-holding-heart' /></span>
        <span className={styles.faStyle}><FontAwesomeIcon icon='lightbulb'  /></span>
        <span className={styles.faStyle}><FontAwesomeIcon icon='laptop-house'  /></span>
        <span className={styles.faStyle}><FontAwesomeIcon icon='bullseye'  /></span>
        <span className={styles.faStyle}><FontAwesomeIcon icon='place-of-worship' /></span>
      </div>
    </div>
  );
};

export default GraphIcons;
