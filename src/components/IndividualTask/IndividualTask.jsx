import React from "react";
import styles from "./IndividualTask.module.scss";

const IndividualTask = ({taskText}) => {
  return (
    <>
      <p className={styles.task}>{taskText}
      <input type="checkbox" className={styles.checkTaskComplete} /></p>
    </>
  );
};

export default IndividualTask;
