import React, { useEffect, useState } from "react";
import styles from "./Graph.module.scss";
import RadarChart from "react-svg-radar-chart";
import "react-svg-radar-chart/build/css/index.css";
import GraphIcons from "../GraphIcons";


const Graph = () => {
  const [graphSize, setGraphSize] = useState(0);
  const [width, setWidth] = useState(window.innerWidth);
  

const defaultOptions = {
  axes: true, 
  scales: 10, 
  captions: false, 
  captionMargin: 10,
  dots: true,
  roundStrokes: true,

  dotProps: () => ({
    className: 'dot',
    mouseEnter: (dot) => { console.log(dot) },
    mouseLeave: (dot) => {  console.log (dot) }
  })
  
}

  const data = [
    {
      data: {
        generalHappiness: 0.4, 
        finances: 0.6,
        career: 0.9,
        loveLife: 0.5,
        family: 0.3, 
        friends: 0.5, 
        funAndRecreation: 0.4, 
        physicalHealth: 0.4,
        mentalHealth: 0.8,
        contributionToSociety: 0.7, 
        selfWorth: 0.5, 
        personalDevelopment: 0.8, 
        physicalEnvironment: 0.5,
        purpose: 0.8,
        spirituality: 0.4, 
      },
      meta: {color: "#4a0fd3"}

    },

  ];

  const captions = {
        generalHappiness: "General Happiness",
        finances:"Finances",
        career:  "Career",
        loveLife: "Love Life",
        family: "Family",
        friends: "Friends",
        funAndRecreation: "Fun and Recreation",
        physicalHealth: "Physical Health",
        mentalHealth: "Mental Health",
        contributionToSociety: "Contribution to Society",
        selfWorth: "Selfworth",
        personalDevelopment: "Personal Development",
        physicalEnvironment: "Physical Environment",
        purpose: "Purpose",
        spirituality: "Spirituality",
  };
  useEffect(() => {
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
