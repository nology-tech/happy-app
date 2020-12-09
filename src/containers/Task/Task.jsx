import React, { useState, useEffect } from "react";
import styles from "./Task.module.scss";
import TaskList from "../../components/TaskList"
import { firestore } from "../../firebase";
import NavBar from "../../components/Navbar";

const emptyTask = {
  id: "",
  text: "",
};

const LOCAL_STORAGE_KEY = "happy-app";

const Task = () => {

  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState(emptyTask);
  
const addTask = (task) => {
  const newtasks = [task, ...tasks]
  setTasks(newtasks);
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

useEffect (() => {
  const storageTasks = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
  if (storageTasks) {
    setTasks(storageTasks)
  }
},[]);

useEffect(() => {
  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(tasks));
},[tasks])

  return (
    <section className={styles.tasksContent}>

      <TaskList setTasks={setTasks} task={task} setTask={setTask} addTaskToDatabase={addTaskToDatabase} tasks={tasks} addTask={addTask}/>

    </section>
  );

};


export default Task;
