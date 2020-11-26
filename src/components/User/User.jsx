import React from "react";
import styles from "./User.module.scss";
import userImagePlaceHolder from "../../assets/images/userImagePlaceHolder.png";

const User = (props) => {
  const {userName} = props;

  return (
    <section className={styles.userComponent}>
      <img src={userImagePlaceHolder} alt="user profile picture"/>
      <h2 className={styles.userName}>{userName}</h2>
      <h2 className={styles.overallScoreHeading}>Overall Wellbeing</h2>
      <p>This is going to be the score bar</p>
    </section>
  );
};

export default User;
