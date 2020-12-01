import React, { useState } from "react";
import styles from "./TaskList.module.scss";
import Task from "../Task";

const TaskList = ({tasks}) => {
  // const [taskScore, setTaskScore] = useState(0);



  const getTasksJsx = (task) => (
    <div className={styles.task} key={tasks.id} >
      <Task task={task}/>
    </div>
);


  // function increment() {
  //   setTaskScore(prevTaskScore => prevTaskScore + 1);
  // }
  // function decrement() {
  //   setTaskScore(prevTaskScore => prevTaskScore - 1);
  // }

  // function handleToggle(event) {
  //   if (event.target.checked) {
  //     // TO DO: Add a function to update state -> isCompleted: true and save completed task to another dataset?
  //     increment();
  //       alert(`Congratulations for finishing your task!\nUpdate your life component slider to show your happiness\nYou have completed ${taskScore + 1} tasks`);
  //   } else {
  //     decrement();
  //   };
  // };

  return (
    <div className={styles.displayTasks}>
      {tasks.map(getTasksJsx)}
    </div>
  );
};

export default TaskList;
