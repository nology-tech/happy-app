import React, { useCallback, useEffect, useState } from "react";
import styles from "./Graph.module.scss";
import RadarChart from "react-svg-radar-chart";

import "./graphStyles.css";
import GraphIcons from "../GraphIcons";
import { firestore } from "../../firebase";

const Graph = (props) => {
  const { user } = props;
  const [clicked, setClicked] = useState(true);
  const [graphSize, setGraphSize] = useState(0);
  const [width, setWidth] = useState(window.innerWidth);
  const [scores, setScore] = useState({
    "General Happiness": 0.1,
    Finances: 0.1,
    Career: 0.1,
    "Love Life": 0.1,
    Family: 0.1,
    Friends: 0.1,
    "Fun and Recreation": 0.1,
    "Physical Health": 0.1,
    "Mental Health": 0.1,
    "Contribution to Society": 0.1,
    "Self Worth": 0.1,
    "Personal Development": 0.1,
    "Physical Environment": 0.1,
    Purpose: 0.1,
    Spirituality: 0.1
  });

  const defaultOptions = {
    axes: true,
    scales: 6,
    captions: false,
    captionMargin: 10,
    dots: true,
    roundStrokes: true
  };

  const getScores = useCallback(() => {
    if (!user) return;
    firestore
      .collection("users")
      .doc(user.uid)
      .collection("scores")
      .orderBy("date", "desc")
      .limit(1)
      .get()
      .then((input) => {
        const score = input.docs.map((doc) => doc.data())[0];
        const cleanScores = getScore(score);
        setScore(cleanScores);
      })
      .catch((err) => console.error(err));
  }, [user]);

  const getAllTimeAverageScores = () => {
    firestore
      .collection("users")
      .doc(user.uid)
      .get()
      .then((doc) => {
        const score = doc.data().allTimeAverage;
        const numberOfDocuments = doc.data().numberOfDocuments;
        for (const key in score) {
          score[key] = score[key] / numberOfDocuments;
        }
        setScore(score);
      })
      .catch((err) => console.error(err));
  };

  const getScore = (scores) => {
    const emptyObj = {};
    if (scores) {
      scores.lifeComponentScores.forEach((score) => {
        emptyObj[score.name] = score.score / 10;
      });
      return emptyObj;
    } else {
      return {
        "General Happiness": 0.1,
        Finances: 0.1,
        Career: 0.1,
        "Love Life": 0.1,
        Family: 0.1,
        Friends: 0.1,
        "Fun and Recreation": 0.1,
        "Physical Health": 0.1,
        "Mental Health": 0.1,
        "Contribution to Society": 0.1,
        "Self Worth": 0.1,
        "Personal Development": 0.1,
        "Physical Environment": 0.1,
        Purpose: 0.1,
        Spirituality: 0.1
      };
    }
  };
  const data = [
    {
      data: scores,
      meta: { color: " #00ffcc" }
    }
  ];
  const captions = {
    "General Happiness": "General Happiness",
    Finances: "Finances",
    Career: "Career",
    "Love Life": "Love Life",
    Family: "Family",
    Friends: "Friends",
    "Fun and Recreation": "Fun and Recreation",
    "Physical Health": "Physical Health",
    "Mental Health": "Mental Health",
    "Contribution to Society": "Contribution to Society",
    "Self Worth": "Self Worth",
    "Personal Development": "Personal Development",
    "Physical Environment": "Physical Environment",
    Purpose: "Purpose",
    Spirituality: "Spirituality"
  };

  useEffect(() => {
    getScores();
  }, [getScores, user]);

  useEffect(() => {
    let size;
    if (width >= 376 && width <= 768) {
      size = 350;
    } else if (width >= 500) {
      size = 400;
    } else {
      size = 310;
    }

    setGraphSize(size);

    const handleResize = () => setWidth(window.innerWidth);

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, [width]);

  const handleClick = () => {
    setClicked(!clicked);
  };

  const firstButton = () => {
    handleClick();
    getScores();
  };

  const secondButton = () => {
    handleClick();
    getAllTimeAverageScores();
  };

  return (
    <div>
      <div className={styles.graphContainer}>
        <RadarChart captions={captions} data={data} size={graphSize} options={defaultOptions} />
        <GraphIcons />
      </div>
      <div className={styles.buttonContainer}>
        <button className={clicked ? styles.clicked : styles.unClicked} onClick={firstButton}>
          Today Happiness
        </button>
        <button className={clicked ? styles.unClicked : styles.clicked} onClick={secondButton}>
          All Time Happiness
        </button>
      </div>
    </div>
  );
};
export default Graph;
