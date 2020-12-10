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
  .collection("users")
  .doc("Ezio")
  .collection("tasks")
  .doc(`${task.id}`)
  .set(task)
  .then(function () {
    console.log("document written!");
  })
  .catch(function (error) {
    console.error("error wrting,", error)
  })
}

const fetchTaskFromDataBase = () => {
  firestore
    .collection("users")
    .doc("Ezio")
    .collection("tasks")
    .get()
    .then((querySnapshot) => {
      const currentData = querySnapshot.docs.map((doc) => doc.data());
      setTasks(currentData);
    });
};

const RemoveTaskFromDatabase = (id) => {
  firestore
  .collection("users")
  .doc("Ezio")
  .collection("tasks")
  .doc(`${id}`)
  .delete()
  .then(function() {
    console.log("Document successfully deleted!");
    fetchTaskFromDataBase();
  }).catch(function(error) {
    console.error("Error removing document: ", error);
  });

  // console.log(id)
};



useEffect(() =>{
  fetchTaskFromDataBase();
},[])


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
      RemoveTaskFromDatabase={RemoveTaskFromDatabase} 
      setTasks={setTasks} task={task} setTask={setTask} addTaskToDatabase={addTaskToDatabase} tasks={tasks} addTask={addTask}/>

    </section>
  );

};


export default Task;



















