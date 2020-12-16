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
  const [isComplete, setIsComplete] = useState(false)

  
  
const addTask = (task) => {
  const newtasks = [task, ...tasks]
  setTasks(newtasks);
}

const addTaskToDatabase = (task) => {
  firestore
  .collection("users")
  .doc("testUser")
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

const updateTaskFromDataBase = (id, isComplete) => { 
  firestore
  .collection("users")
  .doc("testUser")
  .collection("tasks")
  .doc(`${id}`)
  .update({isComplete: !isComplete})
  .then(function() {
    console.log("Document successfully changed")
    fetchTaskFromDataBase();
  }).catch(function(error) {
    console.error("Error chan document: ", error);
  });
}

const fetchTaskFromDataBase = () => {
  firestore
    .collection("users")
    .doc("testUser")
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
  .doc("testUser")
  .collection("tasks")
  .doc(`${id}`)
  .delete()
  .then(function() {
    console.log("Document successfully deleted!");
    fetchTaskFromDataBase();
  }).catch(function(error) {
    console.error("Error removing document: ", error);
  });

};



useEffect(() =>{
  fetchTaskFromDataBase();
},[])



  return (
    <section className={styles.tasksContent}>
      <NavBar />
      <TaskList 
      RemoveTaskFromDatabase={RemoveTaskFromDatabase} updateTaskFromDataBase={updateTaskFromDataBase}
      setTasks={setTasks} task={task} setTask={setTask} addTaskToDatabase={addTaskToDatabase} tasks={tasks} addTask={addTask} setIsComplete={setIsComplete} isComplete={isComplete} isComplete={isComplete}/>
     
    </section>
  );

};


export default Task;



















