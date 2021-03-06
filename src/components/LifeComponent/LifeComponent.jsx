import React, { useState } from "react";
import styles from "./LifeComponent.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Suggestion from "../Suggestion";
import "../../data/fa-library";
import { Link } from "@reach/router";

const LifeComponent = (props) => {
  const {
    lifeComponentNames,
    lifeComponentSuggestion,
    handleChange,
    rangeValue,
    isReadOnly,
    linkTo,
    icon,
    isScoreDisplay
  } = props;

  const [isClicked, setIsClicked] = useState(false);

  return (
    <main className={styles.lifeComponent}>
      <div className={styles.lifeComponent__topElements}>
        <h2 className={styles.lifeComponent__title}>
          {lifeComponentNames}
          <span className={styles.deepDiveLink}>
            {isScoreDisplay ? (
              ""
            ) : (
              <Link to={`../${linkTo}`}>
                <FontAwesomeIcon icon={["fas", "chevron-circle-right"]} />
              </Link>
            )}
          </span>
          <span className={styles.lifeComponent__infoIcon}>
            {isReadOnly ? "" : <FontAwesomeIcon onClick={() => setIsClicked(!isClicked)} icon={["fas", "info"]} />}
          </span>
        </h2>

        <p className={styles.lifeComponent__score}>{rangeValue}/10</p>
      </div>

      <div className={styles.lifeComponent__bottomElements}>
        <span>
          <div className={styles.lifeComponent__circle}>
            {" "}
            <FontAwesomeIcon className={styles.icon} icon={icon} />
          </div>
        </span>
        {isReadOnly ? (
          <input
            className={styles.lifeComponentSlider}
            type="range"
            value={rangeValue}
            min="0"
            max="10"
            step="1"
            readOnly
          />
        ) : (
          <input
            className={styles.lifeComponentSlider}
            type="range"
            value={rangeValue}
            min="0"
            max="10"
            step="1"
            onChange={handleChange}
          />
        )}
      </div>
      {isScoreDisplay ? "" : <Suggestion isClicked={isClicked} lifeComponentSuggestion={lifeComponentSuggestion} />}
    </main>
  );
};

export default LifeComponent;
