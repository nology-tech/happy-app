import React from "react";
import styles from "./App.module.scss";

import "./data/fa-library";
import Routes from "./containers/Routes";
import Navbar from "./components/Navbar"

// DONT ADD ANYTHING HERE - GO TO CONTAINERS AND RENDER STUFF THERE
const App = () => {
  return (
    <div className={styles.body}>
      <Routes />
      <Navbar />
    </div>
  ); 
};

export default App; 