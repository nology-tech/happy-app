import React from "react";
import styles from "./Suggestion.module.scss";


const Suggestion = (props) => {

  
    // Props = Data text that will change based on whicever life component you click on.
  const {lifeComponentSuggestion, isClicked} = props;


    //Add - Remove the Show class (display element) when clicking life component.
  const display = isClicked ? styles.show : " ";

  return (
  <article className={`${display} ${styles.message}`}>
    <h3>Please rate this life component based on the following aspects:</h3>
    <p>{lifeComponentSuggestion}</p>
  </article>
  );
};

export default Suggestion;
