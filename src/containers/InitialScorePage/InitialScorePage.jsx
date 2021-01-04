import React, { useState } from "react";
import styles from "./InitialScorePage.module.scss";
import LifeComponentList from "../../components/LifeComponentList";
import Footer from "../../components/Footer";
import lifeComponents from "../../data/lifeComponents";
import { firestore } from "../../firebase";
import Navbar from "../../components/Navbar";

const InitialScorePage = (props) => {
  const { signOut, user } = props;

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
  const createGraphObject = () => {
    const emptyObj = {};
    scores.forEach((score) => {
      emptyObj[score.name] = score.score / 10;
    });
    return emptyObj;
  };
  const addScoreToDataBase = () => {
    const docRef = firestore.collection("users").doc(user.uid);
    docRef // Change this to UID of user, evenually
      .collection("scores")
      .add({
        lifeComponentScores,
        date: new Date()
      })
      .then(() => {
        alert("Scores successfully Saved!");
      })
      .catch(function (error) {
        console.error("Error writing document: ", error);
      });
    firestore.runTransaction((transaction) => {
      return transaction.get(docRef).then((doc) => {
        const numberOfDocuments = doc.get("numberOfDocuments") ? doc.data().numberOfDocuments + 1 : 1;
        let newAllTimeAverage = createGraphObject(lifeComponentScores);
        if (doc.get("allTimeAverage")) {
          newAllTimeAverage = doc.data().allTimeAverage;
          const graphObject = createGraphObject(lifeComponentScores);
          for (const key in newAllTimeAverage) {
            newAllTimeAverage[key] += graphObject[key];
            newAllTimeAverage[key] = Number(newAllTimeAverage[key].toFixed(1));
          }
        }
        if (!doc.exists) {
          docRef.set({ numberOfDocuments, allTimeAverage: newAllTimeAverage });
        } else {
          transaction.update(docRef, {
            numberOfDocuments,
            allTimeAverage: newAllTimeAverage
          });
        }
      });
    });
  };
  return (
    <>
      <section className={styles.initialScorePage}>
        <Navbar signOut={signOut} text="Set Scores" />
        <p className={styles.initialScorePage__question}>Please rate your happiness for each component out of 10</p>
        <hr />
        <LifeComponentList scores={scores} updateScore={updateScore} />
      </section>
      <Footer addScoreToDataBase={addScoreToDataBase} scores={scores} isScoreDisplay={false} />
    </>
  );
};
export default InitialScorePage;
