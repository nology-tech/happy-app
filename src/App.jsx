import React from 'react';
import styles from "./App.module.scss";
// import LifeComponent from "./components/LifeComponent";
import "./data/fa-library";
import Suggestion from "./components/Suggestion"
import './App.css';
import Graph from './components/Graph';
import TaskInput from "./components/TaskInput";
// import TaskInput from "./components/TaskInput";
import Navbar from './components/Navbar';
import AllTasks from "./components/AllTasks";
<<<<<<< HEAD
import User from "./components/User";

import InitialScorePage from "./containers/InitialScorePage"


import userImagePlaceHolder from "./assets/images/userImagePlaceHolder.png";
=======
>>>>>>> 8a669fbafcdd52bb3165ddb2b992a304061be6f3

import NavItem from "./components/NavItem";
import Routes from "./containers/Routes";
import AverageScore from "./components/AverageScore"
// import User from "./components/User"
// import userImagePlaceHolder from "./assets/images/userImagePlaceHolder.png";

const App = () => {
<<<<<<< HEAD
      return (
            <main>
                  {/* <Navbar text="Happiness Scores" />
                  <User userName='User Name' userImage={userImagePlaceHolder} />
                  <Suggestion text="Relations with your parents, siblings, spouse, close friends." isClicked={true} />
                  <Logo /> */}
                  <InitialScorePage />
                  {/* <div>
                        <LandingPageButton text={"Sign Up"} cardType="primary" />
                        <LandingPageButton text={"Log In"} cardType="secondary" />
                  </div>
                  <Graph />
                  <div>
                        <AllTasks />
                  </div> */}
            </main>
      );
=======
  return (
    <div className={styles.body}>
      <Navbar text="Happiness Scores"/>
      <Suggestion text="Relations with your parents, siblings, spouse, close friends."       isClicked={true}/>
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
>>>>>>> 8a669fbafcdd52bb3165ddb2b992a304061be6f3
};

export default App; 