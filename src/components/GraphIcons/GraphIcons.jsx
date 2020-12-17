import React from "react";
import styles from "./GraphIcons.module.scss";
import Tooltip from "react-tooltip-lite";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const GraphIcons = () => {
  return (
    <div className={styles.iconsDiv}>
      <div className={styles.circleContainer}>
        <span className={styles.faStyle}>
          <Tooltip className={styles.tooltip} content="General Happiness">
            <FontAwesomeIcon icon="smile" className={styles.faStyle} />
          </Tooltip>
        </span>
        <span className={styles.faStyle}>
          <Tooltip className={styles.tooltip} content="Finances">
            <FontAwesomeIcon icon="donate" className={styles.faStyle} />
          </Tooltip>
        </span>
        <span className={styles.faStyle}>
          <Tooltip className={styles.tooltip} content="Career">
            <FontAwesomeIcon icon="user-tie" className={styles.faStyle} />
          </Tooltip>
        </span>
        <span className={styles.faStyle}>
          <Tooltip className={styles.tooltip} content="Love Life">
            <FontAwesomeIcon icon="heart" className={styles.faStyle} />
          </Tooltip>
        </span>
        <span className={styles.faStyle}>
          <Tooltip className={styles.tooltip} content="Family">
            <FontAwesomeIcon icon="users" className={styles.faStyle} />
          </Tooltip>
        </span>
        <span className={styles.faStyle}>
          <Tooltip className={styles.tooltip} content="Friends">
            <FontAwesomeIcon icon="user-friends" className={styles.faStyle} />
          </Tooltip>
        </span>
        <span className={styles.faStyle}>
          <Tooltip className={styles.tooltip} content="Fun and Recreation">
            <FontAwesomeIcon icon="umbrella-beach" className={styles.faStyle} />
          </Tooltip>
        </span>
        <span className={styles.faStyle}>
          <Tooltip className={styles.tooltip} content="Physical Health">
            <FontAwesomeIcon icon="heartbeat" className={styles.faStyle} />
          </Tooltip>
        </span>
        <span className={styles.faStyle}>
          <Tooltip className={styles.tooltip} content="Mental Health">
            <FontAwesomeIcon icon="brain" className={styles.faStyle} />
          </Tooltip>
        </span>
        <span className={styles.faStyle}>
          <Tooltip className={styles.tooltip} content="Contribution to Society">
            <FontAwesomeIcon icon="hands-helping" className={styles.faStyle} />
          </Tooltip>
        </span>
        <span className={styles.faStyle}>
          <Tooltip className={styles.tooltip} content="Self Worth">
            <FontAwesomeIcon
              icon="hand-holding-heart"
              className={styles.faStyle}
            />
          </Tooltip>
        </span>
        <span className={styles.faStyle}>
          <Tooltip className={styles.tooltip} content="Personal Development">
            <FontAwesomeIcon icon="lightbulb" className={styles.faStyle} />
          </Tooltip>
        </span>
        <span className={styles.faStyle}>
          <Tooltip className={styles.tooltip} content="Physical Environment">
            <FontAwesomeIcon icon="laptop-house" className={styles.faStyle} />
          </Tooltip>
        </span>
        <span className={styles.faStyle}>
          <Tooltip className={styles.tooltip} content="Purpose">
            <FontAwesomeIcon icon="bullseye" className={styles.faStyle} />
          </Tooltip>
        </span>
        <span className={styles.faStyle}>
          <Tooltip className={styles.tooltip} content="Spirituality">
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
