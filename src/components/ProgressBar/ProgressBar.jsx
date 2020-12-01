import React from "react";
import styles from "./ProgressBar.module.scss";
import Filler from "../Filler";

//1. Change filler length depending on state 

const ProgressBar= (props) => {
const { percent } = props

return (
    <div className={styles.progressBar}>
      <Filler percent={percent}/>
    </div>
  );
};

export default ProgressBar; 
