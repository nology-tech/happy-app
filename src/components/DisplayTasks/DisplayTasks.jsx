import React, { useState } from "react";
import styles from "./DisplayTasks.module.scss";

const DisplayTasks = (props) => {
  const [taskScore, setTaskScore] = useState(0);
  const tasks = [
    {
      id: 1,
      text: "Run Marathon",
      isCompleted: false
    },
    {
      id: 2,
      text: "Get that Promotion",
      isCompleted: false
    },
    {
      id: 3,
      text: "Task 3",
      isCompleted: false
    },
    {
      id: 4,
      text: "Task 4",
      isCompleted: false
    },
    {
      id: 5,
      text: "Task 5",
      isCompleted: false
    },
    {
      id: 6,
      text: "Task 6",
      isCompleted: false
    },
    {
      id: 7,
      text: "Task 7",
      isCompleted: false
    },
    {
      id: 8,
      text: "Task 8",
      isCompleted: false
    },
    {
      id: 9,
      text: "Task 9",
      isCompleted: false
    },
    {
      id: 10,
      text: "Task 10",
      isCompleted: false
    },
    {
      id: 11,
      text: "Task 11",
      isCompleted: false
    },
    {
      id: 12,
      text: "Task 12",
      isCompleted: false
    },
    {
      id: 13,
      text: "Task 13",
      isCompleted: false
    },
    {
      id: 14,
      text: "Task 14",
      isCompleted: false
    },
    {
      id: 15,
      text: "Task 15",
      isCompleted: false
    }
  ];

  const getTasksJsx = (task) => (
    <p className={styles.task} key={task.id} task={tasks.task}>
      {task.text}
      <input type="checkbox" className={styles.checkTaskComplete} onChange={handleToggle}/>
    </p>
  );

  function increment() {
    setTaskScore(prevTaskScore => prevTaskScore + 1);
  }
  function decrement() {
    setTaskScore(prevTaskScore => prevTaskScore - 1);
  }

  function handleToggle(event) {
    if (event.target.checked) {
      // TO DO: Add a function to update state -> isCompleted: true and save completed task to another dataset?
      increment();
        alert(`Congratulations for finishing your task!\nUpdate your life component slider to show your happiness\nYou have completed ${taskScore + 1} tasks`);
    } else {
      decrement();
    };
  };

  return (
    <>
      <div className={styles.displayTasks}>
        {tasks.map(getTasksJsx)}        
      </div>
    </>
  );
};

export default DisplayTasks;
