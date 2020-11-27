import React from "react";
import styles from "./AllTasks.module.scss";
import TaskInput from "../TaskInput";
import DisplayTasks from "../DisplayTasks";

const AllTasks = () => {
  return (<>
    <section className={styles.tasksContent}>
      <TaskInput />
      <DisplayTasks />
    </section>
    </>
  );
};

export default AllTasks;
