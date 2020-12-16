import React from "react";
import styles from "./GraphIcons.module.scss";
import Tooltip from "react-tooltip-lite";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const GraphIcons = () => {
  return (
    <div className={styles.iconsDiv}>
      <div className={styles.circleContainer}>
        <span className={styles.faStyle}>
          <Tooltip content="General Happiness">
            <FontAwesomeIcon icon="smile" className={styles.faStyle} />
          </Tooltip>
        </span>
        <span className={styles.faStyle}>
          <Tooltip content="Finances">
            <FontAwesomeIcon icon="donate" className={styles.faStyle} />
          </Tooltip>
        </span>
        <span className={styles.faStyle}>
          <Tooltip content="Career">
            <FontAwesomeIcon icon="user-tie" className={styles.faStyle} />
          </Tooltip>
        </span>
        <span className={styles.faStyle}>
          <Tooltip content="Love Life">
            <FontAwesomeIcon icon="heart" className={styles.faStyle} />
          </Tooltip>
        </span>
        <span className={styles.faStyle}>
          <Tooltip content="Family">
            <FontAwesomeIcon icon="users" className={styles.faStyle} />
          </Tooltip>
        </span>
        <span className={styles.faStyle}>
          <Tooltip content="Friends">
            <FontAwesomeIcon icon="user-friends" className={styles.faStyle} />
          </Tooltip>
        </span>
        <span className={styles.faStyle}>
          <Tooltip content="Fun and Recreation">
            <FontAwesomeIcon icon="umbrella-beach" className={styles.faStyle} />
          </Tooltip>
        </span>
        <span className={styles.faStyle}>
          <Tooltip content="Physical Health">
            <FontAwesomeIcon icon="heartbeat" className={styles.faStyle} />
          </Tooltip>
        </span>
        <span className={styles.faStyle}>
          <Tooltip content="Mental Health">
            <FontAwesomeIcon icon="brain" className={styles.faStyle} />
          </Tooltip>
        </span>
        <span className={styles.faStyle}>
          <Tooltip content="Contribution to Society">
            <FontAwesomeIcon icon="hands-helping" className={styles.faStyle} />
          </Tooltip>
        </span>
        <span className={styles.faStyle}>
          <Tooltip content="Self Worth">
            <FontAwesomeIcon
              icon="hand-holding-heart"
              className={styles.faStyle}
            />
          </Tooltip>
        </span>
        <span className={styles.faStyle}>
          <Tooltip content="Personal Development">
            <FontAwesomeIcon icon="lightbulb" className={styles.faStyle} />
          </Tooltip>
        </span>
        <span className={styles.faStyle}>
          <Tooltip content="Physical Environment">
            <FontAwesomeIcon icon="laptop-house" className={styles.faStyle} />
          </Tooltip>
        </span>
        <span className={styles.faStyle}>
          <Tooltip content="Purpose">
            <FontAwesomeIcon icon="bullseye" className={styles.faStyle} />
          </Tooltip>
        </span>
        <span className={styles.faStyle}>
          <Tooltip content="Spirituality">
            <FontAwesomeIcon
              icon="place-of-worship"
              className={styles.faStyle}
            />
          </Tooltip>
        </span>
      </div>
    </div>
  );
};
export default GraphIcons;
