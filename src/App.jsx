import React from 'react';
import styles from "./App.module.scss";

// import LifeComponent from "./components/LifeComponent";
import "./data/fa-library";
import Suggestion from "./components/Suggestion"
import './App.css';
import Logo from './components/Logo';
import LandingPageButton from "./components/LandingPageButton";
import Graph from './components/Graph';
<<<<<<< HEAD
import Navbar from './components/Navbar/Navbar';
import TaskInput from "./components/TaskInput";
import AverageScore from './components/AverageScore/AverageScore';
=======
import Navbar from './components/Navbar';
import AllTasks from "./components/AllTasks";
import NavItem from "./components/NavItem";
import Routes from "./containers/Routes";
// import User from "./components/User"
// import userImagePlaceHolder from "./assets/images/userImagePlaceHolder.png";
>>>>>>> 89b379a59b81e6145ecdcc11f9a26e4f9241c484

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
<<<<<<< HEAD
      <Graph />
      <TaskInput/>
      <AverageScore />
=======
        <Graph />
      <div>
        <AllTasks />
      </div>
      <div>
        <NavItem />
        <Routes />
      </div>
>>>>>>> 89b379a59b81e6145ecdcc11f9a26e4f9241c484
    </div>
  ); 
};

export default App; 