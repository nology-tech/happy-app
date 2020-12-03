import React, { useState } from "react";
import styles from "./TaskInput.module.scss";


const emptyTask = {
  id: "",
  name: "",
  // lifeComponent: [],
  isCompleted: false
};


const TaskInput = (props) => {
  
  const [tasks, setTasks] = useState(emptyTask);
  const { addTask } = props;

  const {
    id,
    name,
    isCompleted
  } = tasks;


  const handleChange = ({ target }) => {
    let name = target.name;
    console.log(name);
    setTasks({ ...tasks, [name]: target.value})
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const cleanedTask = CleanFormValues(tasks);
    console.log(cleanedTask);
    // addTask(cleanedTask); //We Need this to work
    alert("Task added, Good Job!!!!");
    clearForm();
  }

  const CleanFormValues = (formValues) => {
    // formValues.id  SOMETHING NEEDS TO GO HERE?
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
