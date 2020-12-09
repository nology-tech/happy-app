import React, { useState, useEffect } from "react";
import styles from "./Task.module.scss";
import TaskList from "../../components/TaskList"
import { firestore } from "../../firebase";
import NavBar from "../../components/Navbar";

const emptyTask = {
  id: "",
  text: "",
};

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

// const removeTaskFromDatabase = (task) => {
//   firestore
//     .collection("tasks")
//     .doc(task.id)
//     .delete()
//     .then(this.setTaskState)
//     .catch((err) => console.log(err));
// };

// useEffect(() => {
//   firebase
//   .firestore
//   .collection("tasks")
//   .doc()
//   .get()
//   .then(() => {
    
//   })
// },[])

  return (
    <section className={styles.tasksContent}>
      <NavBar />
      <TaskList 
      // removeTaskFromDatabase={removeTaskFromDatabase} 
      setTasks={setTasks} task={task} setTask={setTask} addTaskToDatabase={addTaskToDatabase} tasks={tasks} addTask={addTask}/>

    </section>
  );

};


export default Task;
