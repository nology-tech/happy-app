import React, { useState } from "react";
import styles from "./Filler.module.scss";


const Filler = (props) => {
const [average, setAverage] = useState(30)

  return (
    <div className={styles.filler} style={{ width: `${average}%` }} />
      
  );
};

export default Filler; 
