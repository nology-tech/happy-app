import React, { useState } from "react";
import styles from "./IndividualTask.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const IndividualTask = ({ task, taskText, RemoveTaskFromDatabase, updateTaskFromDataBase }) => {
  const [isComplete, setIsComplete] = useState(task.isComplete);

  let taskCompletedness = "";

  if (isComplete === false) {
    taskCompletedness = styles.taskNotComplete;
  } else {
    taskCompletedness = styles.taskComplete;
  }

  const handleisCompleteChange = () => {
    updateTaskFromDataBase(task.id, isComplete);
    setIsComplete(!isComplete);
    console.log(isComplete);
  };

  return (
    <div className={styles.task}>
      {taskText}
      <div className={styles.buttonContainer}>
        <button className={styles.taskDelete} onClick={RemoveTaskFromDatabase}>
          X
        </button>
        <button onClick={handleisCompleteChange} className={`${taskCompletedness}`}>
          <FontAwesomeIcon icon="check" className={styles.checkIcon} />
        </button>
      </div>
    </div>
  );
};

export default IndividualTask;
