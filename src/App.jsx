import React, { useState, useEffect } from "react";
import styles from "./App.module.scss";
import "./data/fa-library";
import Routes from "./containers/Routes";
import { navigate } from "@reach/router";

import firebase, { googleProvider } from "./firebase";

// DONT ADD ANYTHING HERE - GO TO CONTAINERS AND RENDER STUFF THERE
const App = () => {
  const [user, setUser] = useState(null);

const signIn = () => {
    firebase.auth().signInWithRedirect(googleProvider); 
    navigate("setscores"); 
  
  };

  return (
    <div className={styles.body}>
      <Routes user={user}
       signIn = {signIn}
      />
    </div>
  );
};
export default App;
