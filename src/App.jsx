import React, {useState, useEffect} from "react";
import styles from "./App.module.scss";

import "./data/fa-library";
import Routes from "./containers/Routes";
import { navigate } from "@reach/router";
import Navbar from "./components/Navbar";


import firebase, { googleProvider } from "./firebase";

// DONT ADD ANYTHING HERE - GO TO CONTAINERS AND RENDER STUFF THERE
const App = () => {
const [ user, setUser ] = useState(null);

const signIn = () => {
    firebase.auth().signInWithRedirect(googleProvider); 
    navigate("/"); 
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
  
  
  return (
    <div className={styles.body}>
      <Routes user={user}
       signIn = {signIn}
      />
      <Navbar signOut={signOut}/>
    </div>
  ); 
};
export default App; 
