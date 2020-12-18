import React, { useState, useEffect, useCallback } from "react";
import styles from "./Task.module.scss";
import TaskList from "../../components/TaskList"
import { firestore } from "../../firebase";
import NavBar from "../../components/Navbar";

const Task = (props) => {
  const { signOut, user } = props;
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState({text: ""});

  const addTask = (task) => {
    const newtasks = [task, ...tasks]
    setTasks(newtasks);
  }

  const addTaskToDatabase = (task) => {
    const docRef = firestore.collection("users").doc(user.uid).collection("tasks").doc()
    
    docRef
      .set({...task, id: docRef.id})
      .then(() => {
        console.log("document written!");
        addTask({...task, id: docRef.id})
      })
      .catch((error) => {
        console.error("error wrting,", error)
      })
  }

  const updateTaskFromDataBase = (id, isComplete) => { 
    firestore
      .collection("users")
      .doc(user.uid)
      .collection("tasks")
      .doc(`${id}`)
      .update({isComplete: !isComplete})
      .then(() => {
        console.log("Document successfully changed")
        fetchTaskFromDataBase();
      }).catch((error) => {
        console.error("Error changing document: ", error);
      });
  }

  const fetchTaskFromDataBase = useCallback(() => {
    if (!user) return;
    
    firestore
      .collection("users")
      .doc(user.uid)
      .collection("tasks")
      .get()
      .then((querySnapshot) => {
        const currentData = querySnapshot.docs.map((doc) => doc.data());
        setTasks(currentData);
      });
  }, [user]);

  const RemoveTaskFromDatabase = (id) => {
    firestore
      .collection("users")
      .doc(user.uid)
      .collection("tasks")
      .doc(`${id}`)
      .delete()
      .then(() => {
        console.log("Document successfully deleted!");
        fetchTaskFromDataBase();
      }).catch((error) => {
        console.error("Error removing document: ", error);
      });
  };

  useEffect(() => {
    fetchTaskFromDataBase();
  },[user, fetchTaskFromDataBase])

  return (
    <section className={styles.tasksContent} >
      <NavBar signOut={signOut} text="Set Tasks" />
      <TaskList 
        RemoveTaskFromDatabase={RemoveTaskFromDatabase} 
        updateTaskFromDataBase={updateTaskFromDataBase}
        setTasks={setTasks} 
        task={task} 
        setTask={setTask} 
        addTaskToDatabase={addTaskToDatabase} 
        tasks={tasks} 
      />
    </section>
  );
};


export default Task;



















