import React from "react";
import styles from "./Task.module.scss";


const Task = ({task}) => {

  // const handleToggle = e => {
  //   e.preventDefault();
  // }

  return (
    <div>
      <div className={styles.task} key={task.id}>{task.text}
      <input type="checkbox" className={styles.checkTaskComplete} />
      </div>  
    </div>
  );
};

export default Task;
