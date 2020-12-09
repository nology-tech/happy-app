import React, { useState } from "react";
import styles from "./Task.module.scss";
import TaskList from "../../components/TaskList"
import { firestore } from "../../firebase";
import NavBar from "../../components/Navbar";

const emptyTask = {
  id: "",
  text: "",
};


const Task = () => {

  const [tasks, settasks] = useState([]);
  const [task, setTask] = useState(emptyTask);
  
const addTask = (task) => {
  const newtasks = [task, ...tasks]
  settasks(newtasks);
  console.log([task, ...tasks])
}

const addTaskToDatabase = (task) => {
  firestore
  .collection("tasks")
  .doc()
  .set(task)
  .then(function () {
    console.log("document written!");
  })
  .catch(function (error) {
    console.error("error wrting,", error)
  })
}

  return (
    <section className={styles.tasksContent}>

      <TaskList setTasks={settasks} task={task} setTask={setTask} addTaskToDatabase={addTaskToDatabase} tasks={tasks} addTask={addTask}/>

    </section>
  );

};


export default Task;
