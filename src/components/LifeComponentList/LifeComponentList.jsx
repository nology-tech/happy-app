import React from "react";
import styles from "./LifeComponentList.module.scss";
import LifeComponent from "../LifeComponent";

const LifeComponentList = (props) => {
  const { scores, updateScore } = props;

  const practicalScores = scores.filter((score) => {
    return score.category === "practical";
  });
  const wellbeingScores = scores.filter((score) => {
    return score.category === "wellbeing";
  });
  const relationshipsScores = scores.filter((score) => {
    return score.category === "relationships";
  });
  const higherThoughtsScores = scores.filter((score) => {
    return score.category === "higher-thoughts";
  });
  const activityScores = scores.filter((score) => {
    return score.category === "activity";
  });

  const x = (newScores) => {
    const showComponents = newScores.map((component) => {
      return (
        <LifeComponent
          rangeValue={component.score}
          handleChange={(event) => updateScore(event, component.id)}
          lifeComponentSuggestion={component.suggestion}
          key={component.id}
          lifeComponentNames={component.name}
          icon={component.icon}
        />
      );
    });
    return showComponents;
  };

  return (
    <>
      <h2 className={styles.subheading}>Wellbeing</h2>
      {x(wellbeingScores)}
      <h2 className={styles.subheading}>Relationships</h2>
      {x(relationshipsScores)}
      <h2 className={styles.subheading}>Activity</h2>
      {x(activityScores)}
      <h2 className={styles.subheading}>Practical</h2>
      {x(practicalScores)}
      <h2 className={styles.subheading}>Higher Thoughts</h2>
      {x(higherThoughtsScores)}
    </>
  );
};

export default LifeComponentList;
