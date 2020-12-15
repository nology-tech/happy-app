import React from "react";
import styles from "./TaskList.module.scss";
import TaskInput from "../TaskInput";
import IndivualTask from "../IndividualTask";

const TaskList = (props) => {

  const {task, setTask, setTasks, addTask, tasks, addTaskToDatabase, RemoveTaskFromDatabase } = props;

  const getTaskJsx = (task) => (
    <div className={styles.task} key={task.id}>
      <IndivualTask RemoveTaskFromDatabase={() => RemoveTaskFromDatabase(task.id)} setTasks={setTasks} task={task} tasks={tasks} taskText={task.text}/> 
    </div>
  );
  return (
    <>
      <TaskInput task={task} setTask={setTask}  addTaskToDatabase={addTaskToDatabase} addTask={addTask}/>
      <section className={styles.displayTasks}>{tasks.map(getTaskJsx)}</section>
    </>
    
  );
};

export default TaskList;
