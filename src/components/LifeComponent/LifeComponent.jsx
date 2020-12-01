import React, { useState } from "react";
import styles from "./LifeComponent.module.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Suggestion from "../Suggestion"
import "../../data/fa-library"

const LifeComponent = (props) => {

  const {lifeComponentNames, lifeComponentSuggestion} = props;

  const [rangeValue, setRangeValue] = useState(0);
  const [isClicked, setIsClicked] = useState(false);

  const handleChange = (event) => {
    return setRangeValue(event.target.value)
  };

  return (
    <main className={styles.container}>
      <div className={styles.titleAndScore}>
        <h2 className={styles.title}>{lifeComponentNames} <span><FontAwesomeIcon onClick={() => setIsClicked(!isClicked)} icon={["fas", "info"]} /></span></h2>
        <p className={styles.score}>{rangeValue}/10</p>
      </div>
      <div>
        <span><FontAwesomeIcon icon="search" /></span>
        <input className={styles.lifeComponentSlider} type="range" value={rangeValue} min="0" max="10" step="1" onChange={handleChange} />
      </div>
      <Suggestion isClicked={isClicked} lifeComponentSuggestion={lifeComponentSuggestion} />
    </main>
  );
};

export default LifeComponent;
