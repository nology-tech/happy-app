import React, { useState } from "react";
import styles from "./TasksPage.module.scss";
import TaskInput from "../TaskInput";
import TaskList from "../TaskList";
// import { firestore } from "../../firebase";

const TasksPage = ({addTask}) => {
  
  const [ tasks, setTasks] = useState([]);

//  const tasks = [
//     { id: 1, 
//       text: "Finish this list", 
//       isCompleted: false },
//     { id: 2, 
//       text: "Compete in a 10K run", 
//       isCompleted: false }
//     ];




  return (
    <section className={styles.tasksContent}>
      <TaskInput addTask={addTask} />
      {/* addTask={addTask} */}
      <TaskList tasks={tasks}  />
    </section>
  
  );
};

export default TasksPage;




// {
  //   id: 1,
  //   text: "Run Marathon",
  //   isCompleted: false
  // },
  // {
  //   id: 2,
  //   text: "Get that Promotion",
  //   isCompleted: false
  // },
  // {
  //   id: 3,
  //   text: "Task 3",
  //   isCompleted: false
  // },
  // {
  //   id: 4,
  //   text: "Task 4",
  //   isCompleted: false
  // },
  // {
  //   id: 5,
  //   text: "Task 5",
  //   isCompleted: false
  // },
  // {
  //   id: 6,
  //   text: "Task 6",
  //   isCompleted: false
  // },
  // {
  //   id: 7,
  //   text: "Task 7",
  //   isCompleted: false
  // },
  // {
  //   id: 8,
  //   text: "Task 8",
  //   isCompleted: false
  // },
  // {
  //   id: 9,
  //   text: "Task 9",
  //   isCompleted: false
  // },
  // {
  //   id: 10,
  //   text: "Task 10",
  //   isCompleted: false
  // },
  // {
  //   id: 11,
  //   text: "Task 11",
  //   isCompleted: false
  // },
  // {
  //   id: 12,
  //   text: "Task 12",
  //   isCompleted: false
  // },
  // {
  //   id: 13,
  //   text: "Task 13",
  //   isCompleted: false
  // },
  // {
  //   id: 14,
  //   text: "Task 14",
  //   isCompleted: false
  // },
  // {
  //   id: 15,
  //   text: "Task 15",
  //   isCompleted: false
  // }
