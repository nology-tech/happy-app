import React from "react";
import styles from "./ScoreDisplay.module.scss";
import components from "../../data/data";

import NavBar from "../../components/Navbar";
import AverageScore from "../../components/AverageScore";
import LifeComponent from "../../components/LifeComponent";


const ScoreDisplay = () => {
  
    const getComponents = components.map((component) => {
      console.log(component.name);
      return <LifeComponent isReadOnly name={component.name} component={component} key={component.id}/>     
    })

  return (
    <section className={styles.scoreDisplay}>
      <NavBar text="Happiness Scores" />
      <AverageScore />
      {getComponents}
    </section>
  );
};

export default ScoreDisplay;
