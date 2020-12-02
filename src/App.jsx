import React from 'react';
import styles from "./App.module.scss";
// import LifeComponent from "./components/LifeComponent";
import "./data/fa-library";
import Suggestion from "./components/Suggestion"
import './App.css';
import Logo from './components/Logo';
import LandingPageButton from "./components/LandingPageButton";
import Graph from './components/Graph';
import Navbar from './components/Navbar/Navbar';
import TaskInput from "./components/TaskInput";
// import TaskInput from "./components/TaskInput";
import Navbar from './components/Navbar';
import AllTasks from "./components/AllTasks";
import NavItem from "./components/NavItem";
import Routes from "./containers/Routes";
import AverageScore from "./components/AverageScore"
// import User from "./components/User"
// import userImagePlaceHolder from "./assets/images/userImagePlaceHolder.png";

const App = () => {
  return (
    <div className={styles.body}>
      <Navbar text="Happiness Scores"/>
      <Suggestion text="Relations with your parents, siblings, spouse, close friends."       isClicked={true}/>
      <Logo />  
      <div>
        <LandingPageButton text={"Sign Up"} cardType="primary"/>
        <LandingPageButton text={"Log In"} cardType="secondary"/>
      </div>
      <Graph />
      <TaskInput/>
      <AverageScore />
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