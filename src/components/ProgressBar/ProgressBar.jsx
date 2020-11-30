import React, { useState } from "react";
import styles from "./ProgressBar.module.scss";
import Filler from "../Filler";

//1. Change filler length depending on state 

const ProgressBar= (props) => {
return (
    <div className={styles.progressBar}>
      <Filler />
    </div>
  );
};

export default ProgressBar;
