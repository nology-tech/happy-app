import React from "react";
import styles from "./IndividualTask.module.scss";

const IndividualTask = ({task, tasks, setTasks, taskText, RemoveTaskFromDatabase}) => {

  // const deleteTask = () => {
  //   const x = RemoveTaskFromDatabase(tasks.filter((el) => el.id !== task.id))
  //   setTasks(x) ;
  //   // removeTaskFromDatabase((el) => el.id !== task.id);
  // }

  // const handleButtonToggle = () => {
    
  // }
  return (
    <div className={styles.task}>{taskText}
        <div className={styles.buttonContainer}>
          <button className={styles.taskDelete} onClick={RemoveTaskFromDatabase}>D</button>
          <button  className={styles.taskNotComplete}>C</button>
        </div>
      </div>
    
  );
};

export default IndividualTask;
