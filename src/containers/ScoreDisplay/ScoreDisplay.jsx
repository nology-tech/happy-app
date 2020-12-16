import React, { useEffect, useState } from "react";
import styles from "./ScoreDisplay.module.scss";

import Navbar from "../../components/Navbar";
import AverageScore from "../../components/AverageScore";
import LifeComponent from "../../components/LifeComponent";
import Footer from "../../components/Footer";
import { firestore } from "../../firebase";

import lifeComponents from "../../data/lifeComponents";

const ScoreDisplay = (props) => {
  const { signOut, user } = props;

  const [scores, setScore] = useState(null);

  const getScores = () => {
    firestore
      .collection("users")
      .doc(user.uid)
      .collection("scores")
      .get()
      .then((input) => {
        const score = input.docs
          .map((doc) => doc.data())
          .sort((a, b) => b.date.seconds - a.date.seconds)[0];
        setScore(score);
      })
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    
      getScores(); // It only works if user is logged in and should be passed in private routing as innacesible before logg in.
    
  }, );

  const currentScores = scores
    ? scores.lifeComponentScores.map((score) => {
        return score.score;
      })
    : null;

  const getComponents = scores
    ? scores.lifeComponentScores.map((score) => {
      const getIcon = lifeComponents.find((lifecomponent) => {
          let lifeComponentIcon;
          
          if(lifecomponent.name === score.name) {
          lifeComponentIcon = lifecomponent.icon;
        } return lifeComponentIcon
      })

        return (
          <LifeComponent
            isReadOnly
            lifeComponentNames={score.name}
            rangeValue={score.score}
            key={score.name}
            icon={getIcon.icon}
          />
        );
      })
    : null;

  return (
    <>
    <section className={styles.scoreDisplay}>
      <Navbar signOut={signOut} text="Happiness Scores" /> 
      <div className={styles.overallContainer}>
        <AverageScore data={currentScores} />
      </div>
      {getComponents}
    </section>
    <Footer isScoreDisplay={true}/>
    </>
  );
};

export default ScoreDisplay;

