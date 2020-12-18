import React, { useState } from "react";
import styles from "./TaskInput.module.scss";



const TaskInput = ({task, setTask, addTaskToDatabase}) => {

const [inputtedTasktext, setInputttedTasktext] = useState("");


const handleChange = (e) => {
  setInputttedTasktext(e.target.value);
  setTask({
    text: e.target.value,
    isComplete: false
  });
}

const handleSubmit = (e) => {
  e.preventDefault();
  setTask({
    text: e.target.value,
    isComplete: false
  });
  setInputttedTasktext("");
  addTaskToDatabase(task);
};

  return (
    <>
      <form className={styles.taskInput} onSubmit={handleSubmit} action="">
      <input 
      className={styles.input} 
      onChange={handleChange}
      type="text" 
      name="" 
      placeholder="Set task here..." 
      id=""
      required
      value={inputtedTasktext}/>
      <button type="submit" className={`${styles.submitButton}`}>+</button>
    </form>
    </>
  );

};

export default TaskInput;
