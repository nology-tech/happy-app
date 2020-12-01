import React from "react";
import styles from "./Filler.module.scss";


const Filler = (props) => {
const { percent } = props

return (
    <div className={styles.filler} style={{ width: `${percent}%` }} />
      
  );
};

export default Filler; 
