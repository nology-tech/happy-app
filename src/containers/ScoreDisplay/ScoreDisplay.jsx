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

  useEffect(() => {
    const getScores = () => {
      firestore
        .collection("users")
        .doc(user.uid)
        .collection("scores")
        .orderBy("date", "desc")
        .limit(1)
        .get()
        .then((input) => {
          const score = input.docs.map((doc) => doc.data())[0];
          setScore(score);
        })
        .catch((err) => console.error(err));
    };
    if (user) {
      getScores();
    }
  }, [user]);

  const currentScores = scores
    ? scores.lifeComponentScores.map((score) => {
        return score.score;
      })
    : null;

  const practicalScores = scores
    ? scores.lifeComponentScores.slice(0, 3)
    : null;

  const wellbeingScores = scores
    ? scores.lifeComponentScores.slice(3, 6)
    : null;

  const relationshipsScores = scores
    ? scores.lifeComponentScores.slice(6, 9)
    : null;

  const higherThoughtsScores = scores
    ? scores.lifeComponentScores.slice(9, 12)
    : null;

  const activityScores = scores
    ? scores.lifeComponentScores.slice(12, 15)
    : null;

  const getComponents = (practicalScores) =>
    practicalScores
      ? practicalScores.map((score) => {
          const getIcon = lifeComponents.find((lifecomponent) => {
            let lifeComponentIcon;

            if (lifecomponent.name === score.name) {
              lifeComponentIcon = lifecomponent.icon;
            }
            return lifeComponentIcon;
          });

          return (
            <LifeComponent
              isReadOnly
              lifeComponentNames={score.name}
              rangeValue={score.score}
              key={score.name}
              icon={getIcon.icon}
              isScoreDisplay={true}
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
        <h2 className={styles.subheading}>Wellbeing</h2>
        {getComponents(wellbeingScores)}
        <h2 className={styles.subheading}>Relationships</h2>
        {getComponents(relationshipsScores)}
        <h2 className={styles.subheading}>Activity</h2>
        {getComponents(activityScores)}
        <h2 className={styles.subheading}>Practical</h2>
        {getComponents(practicalScores)}
        <h2 className={styles.subheading}>Higher Thoughts</h2>
        {getComponents(higherThoughtsScores)}
      </section>
      <Footer isScoreDisplay={true} />
    </>
  );
};

export default ScoreDisplay;
