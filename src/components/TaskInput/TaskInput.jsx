import React, { useState } from "react";
import styles from "./TaskInput.module.scss";

const TaskInput = ({placeholder, tasks, setTask}) => {

  // { id: 10, text: "", isCompleted: false }





  const handleChange = (e) => {
    let text = e.target.value;
    return text;
  }

  const getTask = (event) => {
    event.preventDefault();
    let taskText = "";
    taskText = event.target.value;
    let taskData =[];
    taskData.push(taskText);
    console.log(taskData);
    // return taskData;
  }


  const singleTask = (task) => {
    return {
      ...task,
      text: getTask(task),
      isCompleted: false,
    };
  };

 

  


  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //     setTask(() => ({
  //       task: {
  //         ...tasks, 
  //         text: "",
  //         isCompleted: false}
  //     }));
  //   // text = handleInput();
  // }


  return (  
      <form className={styles.taskInput} onSubmit={getTask}>
        <input className={styles.input} type="text" placeholder={placeholder} onChange={handleChange}/>
        <button type="submit" className={styles.submitButton}>+</button>
      </form>
    
  );
};

export default TaskInput;
