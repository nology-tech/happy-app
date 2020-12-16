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

  const signOut = () => {
    firebase
      .auth()
      .signOut()
      .then(() => {
        setUser(null);
      })
      .catch((error) => {
        console.log(error);
      });
  };

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
    if (user) {
      getUser(); // It only works if user is logged in and should be passed in private routing as innacesible before logg in.
    }
  }, [user]);

  // console.log(user);


  return (
    <div className={styles.body}>
      <Routes user={user}
       signIn={signIn}
       signOut={signOut}
      />
    </div>
  );
};
export default App;
