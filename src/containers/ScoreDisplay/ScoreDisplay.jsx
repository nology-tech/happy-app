import React, { useEffect, useState } from "react";
import styles from "./ScoreDisplay.module.scss";

// import NavBar from "../../components/Navbar";
import AverageScore from "../../components/AverageScore";
import LifeComponent from "../../components/LifeComponent";
import { firestore } from "../../firebase";

const ScoreDisplay = (props) => {
  const { user } = props;
  const [scores, setScore] = useState([{ lifeComponentScores: [] }]);

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

  useEffect(() => {
    if (user) {
      getScores(); // It only works if user is logged in and should be passed in private routing as innacesible before logg in.
    }
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
      <div className={styles.overallContainer}>
        <AverageScore />
      </div>
      {getComponents}
    </section>
  );
};

export default ScoreDisplay;
