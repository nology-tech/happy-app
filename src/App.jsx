import React, { useState, useEffect } from "react";
import styles from "./App.module.scss";
// import LifeComponent from "./components/LifeComponent";
import "./data/fa-library";
import Routes from "./containers/Routes";
import AverageScore from "./components/AverageScore"
// import User from "./components/User"
// import userImagePlaceHolder from "./assets/images/userImagePlaceHolder.png";

import firebase from "./firebase";
import InitialScorePage from "./containers/InitialScorePage/InitialScorePage";

// DONT ADD ANYTHING HERE - GO TO CONTAINERS AND RENDER STUFF THERE
const App = () => {
  const [user, setUser] = useState(null);

  // const signIn = () => {
  //     firebase.auth().signInWithRedirect(googleProvider);
  //   };

  // const signOut = () => {
  //     firebase.auth().signOut();
  //   };

  const getUser = () => {
    firebase.auth().onAuthStateChanged((user) => {
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

  return (
    <div className={styles.body}>
      {/* <Routes user={user} /> */}
      <InitialScorePage />
    </div>
  );
};
export default App;
