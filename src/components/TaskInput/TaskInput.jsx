import React, { useState } from "react";
import styles from "./TaskInput.module.scss";


const emptyTask = {
  name: "",
  // lifeComponent: [],
  isCompleted: false
};


const TaskInput = (props) => {
  // const [ idValue, setIdValue ] = useState(1)
  const [tasks, setTasks] = useState(emptyTask);
  const { addTask } = props;

  const {
    name,
    isCompleted
  } = tasks;


  const handleChange = ({ target }) => {
    let name = target.name;
    setTasks({ ...tasks, [name]: target.value})
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const cleanedTask = CleanFormValues(tasks);
    console.log(cleanedTask);
    addTask(cleanedTask);
    alert("Task added, Good Job!!!!");
    clearForm();
  }
    // setIdValue(prevState => prevState + 1);

  const CleanFormValues = (formValues) => {
    formValues.isCompleted = false;
    return formValues;
  }

  const clearForm = () => {
    setTasks(emptyTask);
  };

  
  // const checkFormCompleted = () => {
  //   let isCompleted = true;
  //   for (const field in tasks) {
  //     if (tasks[field] === "") isCompleted = false;
  //   }
  //   return isCompleted;
  // };



  return (  
      <div>
      <form className={styles.taskInput} onSubmit={handleSubmit}>
        <input 
        className={styles.input} 
        type="text" 
        name="name"
        placeholder="Set task here..." 
        autofocus={true}
        onChange={handleChange} 
        required
        />
        <input 
          type="submit" 
          value="+"
          className={`${styles.submitButton}`}
          onChange={handleChange}
          />
        </form>
      </div>
    
  );
};

export default TaskInput;
