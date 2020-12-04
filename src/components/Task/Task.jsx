import React from "react";
import styles from "./Task.module.scss";


const Task = ({tasks}) => {

  // const handleToggle = e => {
  //   e.preventDefault();
  // }



  return (
    <div>
      <div className={styles.task} key={tasks.id}>{tasks.name}
      <input type="checkbox" className={styles.checkTaskComplete} />
      </div>  
    </div>
  );
};

export default Task;
