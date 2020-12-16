import React from "react";
import styles from "./TaskList.module.scss";
import TaskInput from "../TaskInput";
import IndivualTask from "../IndividualTask";

const TaskList = (props) => {

  const {task, setTask, setTasks, addTask, tasks, addTaskToDatabase, RemoveTaskFromDatabase, updateTaskFromDataBase,  setIsComplete, isComplete} = props;

  const tickedTasks = tasks.filter((el) => {
    if(el.isComplete === true) {
      return el;
    }
  })



  const getTaskJsx = (task) => (
    <div className={styles.task} key={task.id}>
      <IndivualTask updateTaskFromDataBase={updateTaskFromDataBase}  setIsComplete={setIsComplete} isComplete={isComplete} toggleComplete={props.toggleComplete} RemoveTaskFromDatabase={() => RemoveTaskFromDatabase(task.id)} setTasks={setTasks} task={task} tickedTasks={tickedTasks} tasks={tasks} taskIsComplete={task.taskIsComplete} taskText={task.text}/> 
    </div>
  );
  return (
    <>
      <TaskInput isComplete={isComplete} setIsComplete={setIsComplete} task={task} setTask={setTask}  addTaskToDatabase={addTaskToDatabase} addTask={addTask}/>
      <section className={styles.displayTasks}>{tasks.map(getTaskJsx)}</section>
    </>
    
  );
};

export default TaskList;
