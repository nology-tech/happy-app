import React, {useState, useEffect} from 'react';
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

import NavItem from "./components/NavItem";
import Routes from "./containers/Routes";
import AverageScore from "./components/AverageScore"
import firebase, { googleProvider } from './firebase';
// import User from "./components/User"
// import userImagePlaceHolder from "./assets/images/userImagePlaceHolder.png";



const App = () => {

  const [ user, setUser ] = useState(null);

  const signIn = () => {
    firebase.auth().signInWithRedirect(googleProvider);
  };

  const signOut = () => {
    firebase.auth().signOut();
  };

  const getUser = () => {
    firebase.auth().onAuthStateChanged ((user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });
  };

  useEffect(() => {
    getUser();
  }, []);
  
  const authLink = user ? (<a href="#" onClick={signOut}>Sign Out</a>) : (<a href="#" onClick={signIn}>Log In</a>)
  
  return (
    <div className={styles.body}>
      <Navbar text="Happiness Scores"/>
      <Suggestion text="Relations with your parents, siblings, spouse, close friends."       isClicked={true}/>
      <Graph />
      <TaskInput/>
      <AverageScore />
        <Graph />

        <button>{authLink}</button>

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
