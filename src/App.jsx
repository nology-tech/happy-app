import React, {useState, useEffect} from "react";
import styles from "./App.module.scss";

import "./data/fa-library";
import Routes from "./containers/Routes";


import firebase, { googleProvider } from './firebase';

// DONT ADD ANYTHING HERE - GO TO CONTAINERS AND RENDER STUFF THERE
const App = () => {
const [ user, setUser ] = useState(null);

// const signIn = () => {
//     firebase.auth().signInWithRedirect(googleProvider);
//   };

// const signOut = () => {
//     firebase.auth().signOut();
//   };

// const getUser = () => {
//   firebase.auth().onAuthStateChanged ((user) => {
//      if (user) {
//       setUser(user);
//     } else {
//       setUser(null);
//     }
//   });
// };

// useEffect(() => {
//   getUser();
// }, []);
  
// const authLink = user ? (<a href="www.google.com" onClick={signOut}>Sign Out</a>) : (<a href="www.google.com" onClick={signIn}>Log In</a>)
  
  return (
    <div className={styles.body}>
      <Routes />
    </div>
  ); 
};
export default App; 
