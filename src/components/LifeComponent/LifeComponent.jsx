import React, { useState, useEffect, useRef, ref } from "react";
import styles from "./LifeComponent.module.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Suggestion from "../Suggestion"
import "../../data/fa-library"

import { firestore } from "../../firebase"


const LifeComponent = (props) => {

  const { lifeComponentNames, lifeComponentSuggestion, handleChange, rangeValue} = props;
  
  const [isClicked, setIsClicked] = useState(false);  

  return (
    <main className={styles.container}>
      <div className={styles.titleAndScore}>
        <article className={styles.titleAndIcon}>
          <h2 className={styles.title}>{lifeComponentNames}</h2>
          <span className={styles.infoIcon}><FontAwesomeIcon onClick={() => setIsClicked(!isClicked)} icon={["fas", "info"]} />
          </span>
        </article>
        <p className={styles.score}>{rangeValue}/10</p>
      </div>
      <div className={styles.iconAndBar}>
        <span><FontAwesomeIcon icon="search" /></span>
        <input className={styles.lifeComponentSlider} type="range" value={rangeValue} min="0" max="10" step="1" onChange={handleChange} />
      </div>
      <Suggestion isClicked={isClicked} lifeComponentSuggestion={lifeComponentSuggestion} />
    </main>
  );
};

export default LifeComponent;
