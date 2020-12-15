import React, { useState, useEffect } from "react";
import styles from "./Task.module.scss";
import TaskList from "../../components/TaskList"
import { firestore } from "../../firebase";
import NavBar from "../../components/Navbar";


const Task = ({user}) => {

  const [tasks, setTasks] = useState([]);

// // console.log(tasks);
//   const addTask = (task) => {
//     const newtasks = [task, ...tasks]
//     setTasks(newtasks);
//     console.log([task, ...tasks])
//   };

  const addTaskToDatabase = (task) => {
    firestore
      .collection("users")
      .doc(user.uid) // user: user.uid
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


const fetchTaskFromDataBase = () => {
  firestore
    .collection("users")
    .doc(user.uid)
    .collection("tasks")
    .doc()
    .get()
    .then((querySnapshot) => {
      const currentData = querySnapshot.docs.map((doc) => doc.data());
      setTasks(currentData);
    })
    .catch((err) => console.log(err));
};

  useEffect(() =>{
    if (user) {
      fetchTaskFromDataBase();
    }
  }, [])

  return (
    <section className={styles.tasksContent}>
    {/* <NavBar /> */}

      <TaskList addTaskToDatabase={addTaskToDatabase} tasks={tasks} /> {/* addTask={addTask} */}

    </section>
  );

};


export default Task;
