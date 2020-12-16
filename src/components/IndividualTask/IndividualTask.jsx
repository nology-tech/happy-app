import React, { useState } from "react";
import styles from "./IndividualTask.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const IndividualTask = ({task, tasks, tickedTasks, setTasks, taskText, RemoveTaskFromDatabase,  setIsComplete, isComplete, updateTaskFromDataBase, taskCompletedness}) => {





const handleisCompleteChange = () =>{ 
  setIsComplete(!isComplete); 
  updateTaskFromDataBase();
};



  return (
    <div className={styles.task}>{taskText}
        <div className={styles.buttonContainer}>
          <button className={styles.taskDelete} onClick={RemoveTaskFromDatabase}>X</button>
          <button onClick={handleisCompleteChange} className={`${taskCompletedness}`}>
            <FontAwesomeIcon icon="check" className={styles.checkIcon}/>
          </button>
        </div>
      </div>
    
    
  );
};

export default IndividualTask;
