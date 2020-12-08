import React, { useState } from "react";
import styles from "./InitialScorePage.module.scss";
import LifeComponentList from "../../components/LifeComponentList";
import Footer from "../../components/Footer";
import lifeComponents from "../../data/lifeComponents";
import { firestore } from "../../firebase";

const InitialScorePage = () => {
  const [scores, setScores] = useState(lifeComponents);

  const updateScore = (event, id) => {
    const newScores = scores.map((scoreObj) => {
      if (scoreObj.id === id) {
        return { ...scoreObj, score: event.target.value };
      } else {
        return scoreObj;
      }
    });
    setScores(newScores);
  };

  const lifeComponentScores = scores.map((score) => {
    const databaseName = score.name;
    const databaseScore = Number(score.score);
    return { name: databaseName, score: databaseScore };
  });

  const addScoreToDataBase = () => {
    firestore
      .collection("users")
      .doc("Ezio") // Change this to UID of user, evenually
      .set({
        lifeComponentScores,
      })
      .then(() => {
        console.log("Document successfully written!");
      })
      .catch(function (error) {
        console.error("Error writing document: ", error);
      });
  };

  return (
    <section>
      <p className={styles.initialScorePage__question}>
        Please rate your happiness for each component out of 10
      </p>
      <hr />
      <LifeComponentList scores={scores} updateScore={updateScore} />
      <Footer addScoreToDataBase={addScoreToDataBase} scores={scores} />
    </section>
  );
};

export default InitialScorePage;
