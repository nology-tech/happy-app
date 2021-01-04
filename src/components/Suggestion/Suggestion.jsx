import React from "react";
import styles from "./Suggestion.module.scss";

const Suggestion = (props) => {
  // Props = Data text that will change based on whicever life component you click on.
  const { lifeComponentSuggestion, isClicked } = props;

  //Add - Remove the Show class (display element) when clicking life component.
  const display = isClicked ? styles.show : " ";

  return (
    <article className={`${display} ${styles.message}`}>
      <h3>{lifeComponentSuggestion.title}</h3>
      <p>{lifeComponentSuggestion.text}</p>
    </article>
  );
};

export default Suggestion;
