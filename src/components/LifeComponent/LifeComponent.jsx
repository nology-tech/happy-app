import React, { useState } from "react";
import styles from "./LifeComponent.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Suggestion from "../Suggestion";
import "../../data/fa-library";

const LifeComponent = (props) => {
  const {
    lifeComponentNames,
    lifeComponentSuggestion,
    handleChange,
    rangeValue,
    isReadOnly,
  } = props;

  const [isClicked, setIsClicked] = useState(false);

  return (
    <main className={styles.lifeComponent}>
      <div className={styles.lifeComponent__topElements}>
        <h2 className={styles.lifeComponent__title}>
          {lifeComponentNames}{" "}
          <span className={styles.lifeComponent__infoIcon}>
            <FontAwesomeIcon
              onClick={() => setIsClicked(!isClicked)}
              icon={["fas", "info"]}
            />
          </span>
        </h2>
        <p className={styles.lifeComponent__score}>{rangeValue}/10</p>
      </div>

      <div className={styles.lifeComponent__bottomElements}>
        <span className={styles.lifeComponent__icons}>
          <FontAwesomeIcon icon="search" />
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
            required
          />
        )}
      </div>
      <Suggestion
        isClicked={isClicked}
        lifeComponentSuggestion={lifeComponentSuggestion}
      />
    </main>
  );
};

export default LifeComponent;
