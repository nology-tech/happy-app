import React, { useState, useEffect } from "react";
import styles from "./Task.module.scss";
import TaskList from "../../components/TaskList"
import { firestore } from "../../firebase";
import NavBar from "../../components/Navbar";


const Task = (props) => {
  const { signOut, user } = props;
  const [tasks, setTasks] = useState([]);

  const addTaskToDatabase = (task) => {
    firestore
      .collection("users")
      .doc(user.uid)
      .collection("tasks")
      .doc()
      .set(task)
      .then(() => {
        console.log("document written!");
      })
      .catch(function (error) {
        console.error("error writing,", error)
      })
  };


const fetchTaskFromDataBase = (task) => {
  firestore
  .collection("tasks")
  .doc(user.uid)
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

      <TaskList addTaskToDatabase={addTaskToDatabase} tasks={tasks} /> 

    </section>
  );

};


export default Task;
