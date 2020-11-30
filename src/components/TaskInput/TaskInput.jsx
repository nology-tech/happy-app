import React from "react";
import styles from "./TaskInput.module.scss";

const TaskInput = () => {
  return (  
      <fieldset className={styles.taskInput}>
      <input className={styles.input} type="text" placeholder="Set task here..."/>
      <button className={styles.submitButton}>+</button>
      </fieldset>
    
  );
};

export default TaskInput;
