import React from "react";
import styles from "./TaskList.module.scss";
import TaskInput from "../TaskInput";
import IndivualTask from "../IndividualTask";

const TaskList = (props) => {

  const {task, setTask, tasks, addTaskToDatabase, RemoveTaskFromDatabase, updateTaskFromDataBase,} = props;

  const getTaskJsx = (task) => (
    <div className={styles.task} key={task.id}>
      <IndivualTask updateTaskFromDataBase={updateTaskFromDataBase} RemoveTaskFromDatabase={() => RemoveTaskFromDatabase(task.id)}  task={task} taskText={task.text}/> 
    </div>
  );
  return (
    <>
      <TaskInput task={task} setTask={setTask}  addTaskToDatabase={addTaskToDatabase}/>
      <section className={styles.displayTasks}>{tasks.map(getTaskJsx)}</section>
    </>
    
  );
};

export default TaskList;
