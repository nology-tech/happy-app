import React from "react";
// import styles from "./LifeComponentList.module.scss";
import LifeComponent from "../LifeComponent";

const LifeComponentList = (props) => {
  const { scores, updateScore } = props;

  const allLifeComponents = scores.map((component) => {
    const link = component.name === "Career" ? "deepdive" : "";

    return (
      <LifeComponent
        rangeValue={component.score}
        handleChange={(event) => updateScore(event, component.id)}
        lifeComponentSuggestion={component.suggestion}
        key={component.id}
        lifeComponentNames={component.name}
        linkTo={link}
      />
    );
  });

  return (
    <>
   {allLifeComponents}
   </>
 );
};

export default LifeComponentList;
