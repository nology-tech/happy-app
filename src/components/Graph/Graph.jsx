import React from "react";
import RadarChart from 'react-svg-radar-chart';
import 'react-svg-radar-chart/build/css/index.css';


const Graph = () => {

const defaultOptions = {
  axes: true, 
  scales: 3, 
  captions: true, 
  captionMargin: 10,
  dots: true 

  ,
  dotProps: () => ({
    className: 'dot',
    mouseEnter: (dot) => { console.log(dot) },
    mouseLeave: (dot) => {  console.log (dot) }
  })
  
}

  const data = [
    {
      data: {
        physicalEnvironment: 1,
        finances: 0.8,
        career: 0.9,
        generalHealth: 0.8,
        fitness: 0.3, 
        friends: 0.1, 
        family: 0.3, 
        loveLife: 0.7,
        spirituality: 0.2, 
        purpose: 0.8,
        selfWorth: 1, 
        fun: 0.4, 
        appearance: 0.9, 
        sleep: 0.4, 
      },
      meta: {color:'#58FCEC'}

    },

  ];

  const captions = {
        physicalEnvironment: 'Physical Environment',
        finances:'Finances',
        career:  'Career',
        generalHealth: 'Health',
        fitness: 'Fitness',
        friends: 'Friends',
        family: 'Family',
        loveLife: 'Love Life',
        spirituality: 'Spirituality',
        purpose: 'Purpose',
        selfWorth: 'Selfworth',
        fun: 'Fun',
        appearance: 'Appearance',
        sleep: 'Sleep'
  };


  return (
    <div>
  <RadarChart
    captions={captions}
    data={data}
    size={600}
    options={defaultOptions}
  /> 
    </div>
  );
};

export default Graph;
