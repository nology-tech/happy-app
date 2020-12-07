import React from "react";
import styles from "./TaskList.module.scss";
import TaskInput from "../TaskInput";
import IndivualTask from "../IndividualTask";

const TaskList = (props) => {

  const {addTask, tasks, addTaskToDatabase} = props;

  const getTaskJsx = (task) => (
    <div className={styles.task} key={task.id}>
      <IndivualTask taskText={task.text}/>
    </div>
  );
  return (
    <>
      <TaskInput  addTaskToDatabase={addTaskToDatabase}  addTask={addTask}/>
      <section className={styles.displayTasks}>{tasks.map(getTaskJsx)}</section>
    </>
    
  );
};

export default TaskList;
