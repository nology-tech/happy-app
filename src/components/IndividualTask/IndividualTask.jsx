import React from "react";
import styles from "./IndividualTask.module.scss";

const IndividualTask = ({task, tasks, setTasks, taskText}) => {

  const deleteTask = () => {
    setTasks(tasks.filter((el) => el.id !== task.id)) 
  }
  return (
    <>
      <p className={styles.task}>{taskText}
      <div>
        <button className={styles.checkTaskComplete}>checkbox</button>
        <button onClick={deleteTask}>delete</button>
      </div>
      
      </p>
    </>
  );
};

export default IndividualTask;
