import React from 'react';
import styles from "./App.module.scss";

// import LifeComponent from "./components/LifeComponent";
import "./data/fa-library";
import Suggestion from "./components/Suggestion"
import './App.css';
import Graph from './components/Graph';
import Navbar from './components/Navbar';
import AllTasks from "./components/AllTasks";

import NavItem from "./components/NavItem";
import Routes from "./containers/Routes";
// import User from "./components/User"
// import userImagePlaceHolder from "./assets/images/userImagePlaceHolder.png";

const App = () => {
  return (
    <div className={styles.body}>
      <Navbar text="Happiness Scores"/>
      <Suggestion text="Relations with your parents, siblings, spouse, close friends."       isClicked={true}/>
        <Graph />
      <div>
        <AllTasks />
      </div>
      <div>
        <NavItem />
        <Routes />
      </div>
    </div>
  ); 
};

export default App; 