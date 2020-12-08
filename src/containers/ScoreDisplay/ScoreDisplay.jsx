import React, { useEffect, useState } from "react";
import styles from "./ScoreDisplay.module.scss";

import NavBar from "../../components/Navbar";
import AverageScore from "../../components/AverageScore";
import LifeComponent from "../../components/LifeComponent";
import { firestore } from "../../firebase";

const ScoreDisplay = (props) => {
  const { user } = props;
  const [scores, setScore] = useState({ lifeComponentScores: [] });

  console.log(user);

  const getScores = () => {
    firestore
      .collection("users")
      .doc("Ezio")
      .collection("scores")
      .get()
      .then((giraffe) => {
        const score = giraffe.docs.map((doc) => doc.data());
        setScore(score[0].lifeComponentScores);
      })
      .catch((err) => console.error(err));
  };

  console.log(scores);

  useEffect(() => {
    // if (user) {
    getScores();
    // }
  }, [user]);

  const getComponents = scores.map((score) => {
    return (
      <LifeComponent
        isReadOnly
        lifeComponentNames={score.name}
        rangeValue={score.score}
        key={score.id}
      />
    );
  });

  return (
    <section className={styles.scoreDisplay}>
      {/* <NavBar text="Happiness Scores" /> */}
      <AverageScore />
      {getComponents}
    </section>
  );
};

export default ScoreDisplay;
