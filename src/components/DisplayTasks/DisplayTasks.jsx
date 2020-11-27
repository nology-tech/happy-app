import React, { useState, useEffect } from "react";
import styles from "./DisplayTasks.module.scss";

const DisplayTasks = (props) => {
  const [taskScore, setTaskScore] = useState(0);
  const [tasks, setTasks] = useState([
    {
      text: "Run Marathon",
      isCompleted: false
    },
    {
      text: "Get that Promotion",
      isCompleted: false
    },
    {
      text: "Task 3",
      isCompleted: false
    },
    {
      text: "Task 4",
      isCompleted: false
    },
    {
      text: "Task 5",
      isCompleted: false
    },
    {
      text: "Task 6",
      isCompleted: false
    },
    {
      text: "Task 7",
      isCompleted: false
    },
    {
      text: "Task 8",
      isCompleted: false
    },
    {
      text: "Task 9",
      isCompleted: false
    },
    {
      text: "Task 10",
      isCompleted: false
    },
    {
      text: "Task 11",
      isCompleted: false
    },
    {
      text: "Task 12",
      isCompleted: false
    },
    {
      text: "Task 13",
      isCompleted: false
    },
    {
      text: "Task 14",
      isCompleted: false
    },
    {
      text: "Task 15",
      isCompleted: false
    }
  ]);

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
        <p className={styles.task}>{tasks[0].text}
          <input type="checkbox" className={styles.checkTaskComplete} onChange={handleToggle}/>
        </p>
        <p className={styles.task}>{tasks[1].text}
          <input type="checkbox" className={styles.checkTaskComplete} onChange={handleToggle}/>
        </p>
        <p className={styles.task}>{tasks[2].text}
          <input type="checkbox" className={styles.checkTaskComplete} onChange={handleToggle}/>
        </p>
        <p className={styles.task}>{tasks[3].text}
          <input type="checkbox" className={styles.checkTaskComplete} onChange={handleToggle}/>
        </p>
        <p className={styles.task}>{tasks[4].text}
          <input type="checkbox" className={styles.checkTaskComplete} onChange={handleToggle}/>
        </p>
        <p className={styles.task}>{tasks[5].text}
          <input type="checkbox" className={styles.checkTaskComplete} onChange={handleToggle}/>
        </p>
        <p className={styles.task}>{tasks[6].text}
          <input type="checkbox" className={styles.checkTaskComplete} onChange={handleToggle}/>
        </p>
        <p className={styles.task}>{tasks[7].text}
          <input type="checkbox" className={styles.checkTaskComplete} onChange={handleToggle}/>
        </p>
        <p className={styles.task}>{tasks[8].text}
          <input type="checkbox" className={styles.checkTaskComplete} onChange={handleToggle}/>
        </p>
        <p className={styles.task}>{tasks[9].text}
          <input type="checkbox" className={styles.checkTaskComplete} onChange={handleToggle}/>
        </p>
        <p className={styles.task}>{tasks[10].text}
          <input type="checkbox" className={styles.checkTaskComplete} onChange={handleToggle}/>
        </p>
        <p className={styles.task}>{tasks[11].text}
          <input type="checkbox" className={styles.checkTaskComplete} onChange={handleToggle}/>
        </p>
        <p className={styles.task}>{tasks[12].text}
          <input type="checkbox" className={styles.checkTaskComplete} onChange={handleToggle}/>
        </p>
        <p className={styles.task}>{tasks[13].text}
          <input type="checkbox" className={styles.checkTaskComplete} onChange={handleToggle}/>
        </p>
        <p className={styles.task}>{tasks[14].text}
          <input type="checkbox" className={styles.checkTaskComplete} onChange={handleToggle}/>
        </p>
        
      </div>
    </>
  );
};

export default DisplayTasks;
