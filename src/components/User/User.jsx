import React from "react";
import styles from "./User.module.scss";

const User = (props) => {
  const {userName} = props;

  return (
    <section className={styles.userComponent}>
      <img src="https://blog.cpanel.com/wp-content/uploads/2019/08/user-01.png" alt="user profile picture"/>
      <h2 className={styles.userName}>{userName}</h2>
      <h2 className={styles.overallScoreHeading}>Overall Wellbeing</h2>
      <p>This is going to be the score bar</p>
    </section>
  );
};

export default User;
