import React from "react";
import styles from "./GraphIcons.module.scss";
import Tooltip from 'react-tooltip-lite';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";


const GraphIcons = () => {
  return (
    <div className={styles.iconsDiv}>
      <div className={styles.circleContainer}>
        <span className={styles.faStyle}><Tooltip className={styles.tooltip} content="General Happiness"><FontAwesomeIcon icon="smile" /></Tooltip></span>

        <span className={styles.faStyle}><Tooltip content="Finances"><FontAwesomeIcon icon="donate" /></Tooltip></span>

        <span className={styles.faStyle}><Tooltip content="Career"><FontAwesomeIcon icon="user-tie" /></Tooltip></span>

        <span className={styles.faStyle}><Tooltip content="Love Life"><FontAwesomeIcon icon="heart" /></Tooltip></span>

        <span className={styles.faStyle}><Tooltip content="Family"><FontAwesomeIcon icon="users"  /></Tooltip></span>

        <span className={styles.faStyle}><Tooltip content="Friends"><FontAwesomeIcon icon="user-friends" /></Tooltip></span>

        <span className={styles.faStyle}><Tooltip content="Fun and Recreation"><FontAwesomeIcon icon="umbrella-beach" /></Tooltip></span>

        <span className={styles.faStyle}><Tooltip content="Physical Health"><FontAwesomeIcon icon="heartbeat" /></Tooltip></span>

        <span className={styles.faStyle}><Tooltip content="Mental Health"><FontAwesomeIcon icon="brain" /></Tooltip></span>

        <span className={styles.faStyle}><Tooltip content="Contribution to Society"><FontAwesomeIcon icon="hands-helping" /></Tooltip></span>

        <span className={styles.faStyle}><Tooltip content="Self Worth"><FontAwesomeIcon icon="hand-holding-heart" /></Tooltip></span>

        <span className={styles.faStyle}><Tooltip content="Personal Development"><FontAwesomeIcon icon="lightbulb" /></Tooltip></span>

        <span className={styles.faStyle}><Tooltip content="Physical Environment"><FontAwesomeIcon icon="laptop-house" /></Tooltip></span>

        <span className={styles.faStyle}><Tooltip content="Purpose"><FontAwesomeIcon icon="bullseye" /></Tooltip></span>

        <span className={styles.faStyle}><Tooltip content="Spirituality"><FontAwesomeIcon icon="place-of-worship" /></Tooltip></span>
      </div>
    </div>
  );
};

export default GraphIcons;
