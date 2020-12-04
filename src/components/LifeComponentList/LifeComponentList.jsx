import React, {useState} from "react";
import styles from "./LifeComponentList.module.scss";
import LifeComponent from "../LifeComponent";
import { firestore } from "../../firebase"

const lifeComponents = [
  { id: 1,
    name: "Physical Environment",
    suggestion: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laboriosam esse eum error impedit rem aliquid omnis. Deleniti possimus nobis vero!',
    score: 0
  },
  { id: 2,
    name: "Finances",
    suggestion: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laboriosam esse eum error impedit rem aliquid omnis. Deleniti possimus nobis vero!',
    score: 0
  },
  { id: 3,
    name: "Career",
    suggestion: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laboriosam esse eum error impedit rem aliquid omnis. Deleniti possimus nobis vero!',
    score: 0
  },
  { id: 4,
    name: "General Health",
    suggestion: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laboriosam esse eum error impedit rem aliquid omnis. Deleniti possimus nobis vero!',
    score: 0
  },
  { id: 5,
    name: "Mental Fitness",
    suggestion: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laboriosam esse eum error impedit rem aliquid omnis. Deleniti possimus nobis vero!',
    score: 0
  },
  { id: 6,
    name: "Physical Fitness",
    suggestion: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laboriosam esse eum error impedit rem aliquid omnis. Deleniti possimus nobis vero!',
    score: 0
  },
  { id: 7,
    name: "Friends",
    suggestion: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laboriosam esse eum error impedit rem aliquid omnis. Deleniti possimus nobis vero!',
    score: 0
  },
  { id: 8,
    name: "Family",
    suggestion: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laboriosam esse eum error impedit rem aliquid omnis. Deleniti possimus nobis vero!',
    score: 0
  },
  { id: 9,
    name: "Love life",
    suggestion: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laboriosam esse eum error impedit rem aliquid omnis. Deleniti possimus nobis vero!',
    score: 0
  },
  { id: 10,
    name: "Spirituality",
    suggestion: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laboriosam esse eum error impedit rem aliquid omnis. Deleniti possimus nobis vero!',
    score: 0
  },
  { id: 11,
    name: "Purpose",
    suggestion: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laboriosam esse eum error impedit rem aliquid omnis. Deleniti possimus nobis vero!',
    score: 0
  },
  { id: 12,
    name: "Self Worth",
    suggestion: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laboriosam esse eum error impedit rem aliquid omnis. Deleniti possimus nobis vero!',
    score: 0
  },
  { id: 13,
    name: "Fun And recreation",
    suggestion: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laboriosam esse eum error impedit rem aliquid omnis. Deleniti possimus nobis vero!',
    score: 0
  },
  { id: 14,
    name: "PlaceholderOne",
    suggestion: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laboriosam esse eum error impedit rem aliquid omnis. Deleniti possimus nobis vero!',
    score: 0
  },
  { id: 15,
    name: "PlaceholderTwo",
    suggestion: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laboriosam esse eum error impedit rem aliquid omnis. Deleniti possimus nobis vero!',
    score: 0
  }
];


const LifeComponentList = () => {

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


  const allLifeComponents = scores.map((component) => {
    return <LifeComponent rangeValue={component.score} handleChange={(event) => updateScore(event, component.id)} lifeComponentSuggestion={component.suggestion} key={component.id} lifeComponentNames={component.name} />
  })


  return (
    <>
      {allLifeComponents}
      <button onClick={addScoreToDataBase}>trying</button>
    </>
  );
};

export default LifeComponentList;
