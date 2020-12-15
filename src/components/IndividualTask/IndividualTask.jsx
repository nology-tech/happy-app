import React, { useState } from "react";
import styles from "./IndividualTask.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const IndividualTask = ({task, tasks, setTasks, taskText, RemoveTaskFromDatabase}) => {

  // const deleteTask = () => {
  //   const x = RemoveTaskFromDatabase(tasks.filter((el) => el.id !== task.id))
  //   setTasks(x) ;
  //   // removeTaskFromDatabase((el) => el.id !== task.id);
  // }

  // const handleButtonToggle = () => {
    
  // }

// const handleOpacityCHange = (e) => {
//  if 
// }

// handleClick = (event) => {
//   // accessible
//   event.target.style
//   event.target.classList //to change style via css
// }

const [isComplete, setIsComplete] = useState(false)
// const toggleChecked = () => setIsComplete(value => !value)

const handleOpacityChange = (e) =>{
  if(isComplete === true) {
    e.target.style.opacity = 0.7;
  } else {
    e.target.style.opacity = 1;
  }
  setIsComplete(!isComplete);
};

  return (
    <div className={styles.task}>{taskText}
        <div className={styles.buttonContainer}>
          <button className={styles.taskDelete} onClick={RemoveTaskFromDatabase}>X</button>
          <button onClick={handleOpacityChange} className={styles.taskNotComplete}>
            <FontAwesomeIcon icon="check" className={styles.checkIcon}/>
          </button>
        </div>
      </div>
    
    // <FontAwesomeIcon
    //           onClick={() => setIsClicked(!isClicked)}
    //           icon={["fas", "info"]}
    //         />
  );
};

export default IndividualTask;
