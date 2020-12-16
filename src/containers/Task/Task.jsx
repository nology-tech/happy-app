import React, { useState } from "react";
import styles from "./Task.module.scss";
import TaskList from "../../components/TaskList"
import { firestore } from "../../firebase";
import NavBar from "../../components/Navbar";

const Task = (props) => {
  const { signOut, user } = props;
 
  const [tasks, settasks] = useState([]);

const addTask = (task) => {
  const newtasks = [task, ...tasks]
  settasks(newtasks);
  console.log([task, ...tasks])
}

const addTaskToDatabase = (task) => {
  firestore
  .collection("tasks")
  .doc(user)
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
    <NavBar signOut={signOut} text="Set Tasks" />

      <TaskList addTaskToDatabase={addTaskToDatabase} tasks={tasks} addTask={addTask}/>

    </section>
  );

};


export default Task;
