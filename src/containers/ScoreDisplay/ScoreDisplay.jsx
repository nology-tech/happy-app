import React, { useEffect, useState } from "react";
import styles from "./ScoreDisplay.module.scss";
import components from "../../data/data";

import NavBar from "../../components/Navbar";
import AverageScore from "../../components/AverageScore";
import LifeComponent from "../../components/LifeComponent";
import { firestore } from "../../firebase";


const ScoreDisplay = (props) => {
  const { user } = props;
  const [scores, setScore] = useState([]);
  
  const getScores = () => {
    firestore
      .collection("users")    
      .get()
      .then((lifeComponentScores) => {
        const score = lifeComponentScores.docs.map((doc) => doc.data());
        setScore(score);
      })
      .catch((err) => console.error(err));
  };

  console.log(scores);
  // console.log((scores[0]).lifeComponentScores);
  console.log((scores[0]));

  useEffect(() => {
    if (user) { 
      getScores();
    }
  }, [user]);

    const getComponents = scores.map((score) => {
      return <LifeComponent isReadOnly score={score.name} score={score} key={score.id}/>     
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
