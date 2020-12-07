import React, { useState } from "react";
import styles from "./TaskInput.module.scss";


const emptyTask = {
  id: "",
  text: "",
};

const TaskInput = ({addTask, addTaskToDatabase}) => {

const [inputtedTasktext, setInputttedTasktext] = useState("");
const [idCount, setIdCount] = useState(1);
const [task, setTask] = useState(emptyTask)


const handleChange = (e) => {
  setInputttedTasktext(e.target.value);
  setTask({
    id: idCount,
    text: inputtedTasktext,
  });
}

const handleSubmit = (e) => {
  e.preventDefault();
  setIdCount(idCount + 1);
  addTask({
    id: idCount,
    text: inputtedTasktext
  });
  console.log(task);
  addTaskToDatabase(task);
  setInputttedTasktext("");
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
