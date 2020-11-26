import React from "react";
import styles from "./TaskInput.module.scss";

const TaskInput = () => {
  return (
    
      <div className={styles.taskInput}>
      <input className={styles.input} type="" placeholder="Set task here..."/>
      <button className={styles.submitButton}>+</button>
      </div>
    
  );
};

export default TaskInput;
