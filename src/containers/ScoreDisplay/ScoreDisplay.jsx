import React, { useEffect, useState } from "react";
import styles from "./ScoreDisplay.module.scss";

import NavBar from "../../components/Navbar";
import AverageScore from "../../components/AverageScore";
import LifeComponent from "../../components/LifeComponent";
import { firestore } from "../../firebase";


const ScoreDisplay = (props) => {
  const { user } = props;
  const [scores, setScore] = useState({lifeComponentScores: []});
  
  console.log(user);

  const getScores = () => {
    firestore
      .collection("users") 
      .doc("Ezio")
      .get()
      .then((Ezio) => {
        const score = Ezio.data();
        console.log((score.scores));
        setScore(score);
      })
      .catch((err) => console.error(err));
  };

  console.log((scores.lifeComponentScores));

  useEffect(() => {
    if (user) { 
      getScores();
    }
  }, [user]);

    const getComponents = scores.lifeComponentScores.map((score) => {
      return <LifeComponent isReadOnly name={score.name} score={score.score} key={score.id}/>     
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
