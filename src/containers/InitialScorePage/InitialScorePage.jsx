import React, {useState} from "react";
import styles from "./InitialScorePage.module.scss";
import LifeComponentList from "../../components/LifeComponentList"
import Footer from "../../components/Footer"
import lifeComponents from "../../data/lifeComponents"
import { firestore } from "../../firebase"


const InitialScorePage = () => {
  const [scores, setScores] = useState(lifeComponents);


  const updateScore = (event, id) => {
    const newScores = scores.map(scoreObj => {
      if(scoreObj.id === id){
        return {...scoreObj, score : event.target.value}
      }
      else {
        return scoreObj
      }  
    })
    setScores(newScores)
  }

  const lifeComponentScores = scores.map(score => {
    const name = score.name
    const score1 = Number(score.score)
    return  {[name] : score1}
  })

  console.log(lifeComponentScores);

  const addScoreToDataBase = () => {
    firestore.collection("users").doc('Ezio').set({
      lifeComponentScores
    })
  .then(() => {
      console.log("Document successfully written!");
  })
  .catch(function(error) {
      console.error("Error writing document: ", error);
  });
  }


  return (
    <section>
      <LifeComponentList scores={scores} updateScore={updateScore} />
      <Footer addScoreToDataBase={addScoreToDataBase} />
    </section>
  );
};

export default InitialScorePage;
