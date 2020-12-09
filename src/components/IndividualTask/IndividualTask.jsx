import React from "react";
import styles from "./IndividualTask.module.scss";

const IndividualTask = ({task, tasks, setTasks, taskText, removeTaskFromDatabase}) => {

  const deleteTask = () => {
    setTasks(tasks.filter((el) => el.id !== task.id)) ;
    removeTaskFromDatabase((el) => el.id !== task.id);
  }
  return (
    <div className={styles.task}>{taskText}
        <div className={styles.buttonContainer}>
          <button className={styles.taskDelete} onClick={deleteTask}>D</button>
          <button className={styles.taskComplete}>C</button>
        </div>
      </div>
    
  );
};

export default IndividualTask;
