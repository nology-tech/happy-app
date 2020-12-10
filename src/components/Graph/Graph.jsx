import React, { useEffect, useState } from "react";
import styles from "./Graph.module.scss";
import RadarChart from "react-svg-radar-chart";
import "react-svg-radar-chart/build/css/index.css";
import GraphIcons from "../GraphIcons";
import { firestore } from "../../firebase";

const Graph = () => {
  const [graphSize, setGraphSize] = useState(0);
  const [width, setWidth] = useState(window.innerWidth);
  const [scores, setScore] = useState(null);

  const defaultOptions = {
    axes: true,
    scales: 10,
    captions: false,
    captionMargin: 10,
    dots: false,
    roundStrokes: true,

    dotProps: () => ({
      className: "dot",
      mouseEnter: (dot) => {
        console.log(dot);
      },
      mouseLeave: (dot) => {
        console.log(dot);
      },
    }),
  };

  const getScores = () => {
    firestore
      .collection("users")
      .doc("Ezio")
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

  const getScore = () => {
    const emptyObj = {};
    if (scores) {
      scores.lifeComponentScores.forEach((score) => {
        emptyObj[score.name] = score.score / 10;
      });
      return emptyObj;
    } else {
      return {
        "General Health": 0.1,
        Finances: 0.1,
        Career: 0.1,
        "Love life": 0.1,
        Family: 0.1,
        Friends: 0.1,
        "Fun And recreation": 0.1,
        "Physical Fitness": 0.1,
        "Mental Fitness": 0.1,
        "Contribution to Society": 0.1,
        "Self Worth": 0.1,
        "Personal Development": 0.1,
        "Physical Environment": 0.1,
        Purpose: 0.1,
        Spirituality: 0.1,
      };
    }
  };

  const data = [
    {
      data: getScore(),
      meta: { color: "#4a0fd3" },
    },
  ];

  const captions = {
    "Contribution to Society": "Contribution to Society",
    Career: "Career",
    Finances: "Finances",
    Family: "Family",
    "Fun And recreation": "Fun and Recreation",
    Friends: "Friends",
    "General Health": "General Health",
    "Love life": "Love Life",
    "Mental Fitness": "Mental Fitness",
    "Physical Fitness": "Physical Fitness",
    "Personal Development": "Personal Development",
    "Physical Environment": "Physical Environment",
    Purpose: "Purpose",
    "Self Worth": "Self Worth",
    Spirituality: "Spirituality",
  };

  useEffect(() => {
    getScores();
    let size;
    if (width > 300 && width < 500) {
      size = 200;
    } else if (width > 500) {
      size = 500;
    } else {
      size = 200;
    }
    setGraphSize(size);
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [width]);

  return (
    <div className={styles.graphContainer}>
      <RadarChart
        captions={captions}
        data={data}
        size={graphSize}
        options={defaultOptions}
      />
      <GraphIcons />
    </div>
  );
};

export default Graph;
