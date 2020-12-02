import React, { useState } from "react";
import styles from "./TaskInput.module.scss";


const emptyTask = {
  id: "",
  text: "",
  // lifeComponent: [],
  isCompleted: false
};


const TaskInput = (props) => {
  const [tasks, setTasks] = useState(emptyTask);
  // const { placeholder,  }
  const { addTask } = props;
  // const { id, text, isCompleted } = tasks;
  // const { addTask } = props;

  const {
    id,
    text,
    isCompleted
  } = tasks;


  const handleChange = ({ target }) => {
    // let text = "";
    let text = target.text;
    console.log(text);
    setTasks({ ...tasks, [text]: target.value})
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const cleanedTask = CleanFormValues(tasks);
    addTask(cleanedTask);
    alert("Task added, Good Job!!!!");
    clearForm();
  }

  const CleanFormValues = () => {
    // something
  }

  const clearForm = () => {
    setTasks(emptyTask);
  };
  // const getTask = (event) => {
  //   event.preventDefault();
  //   // let taskText = "";
  //   // taskText = event.target.value;
  //   // let taskData =[];
  //   // taskData.push(taskText);
  //   // console.log(taskData);
  //   // return taskData;
  // }


  // const singleTask = (task) => {
  //   return {
  //     ...task,
  //     text: getTask(task),
  //     isCompleted: false,
  //   };
  // };

 

  


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
      <div>
      <form className={styles.taskInput} onSubmit={handleSubmit}>
        <input 
        className={styles.input} 
        type="text" 
        name="text"
        placeholder="Set task here..." 
        autofocus={true}
        onChange={handleChange} 
        required
        />
        <input 
          type="submit" 
          value="+"
          className={`${styles.submitButton}`}
          onChange={handleChange} />
        </form>
      </div>
    
  );
};

export default TaskInput;
