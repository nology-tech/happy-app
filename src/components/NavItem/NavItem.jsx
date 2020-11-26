import React from "react";
import styles from "./NavItem.module.scss";

const NavItem = () => {
  return (
    <div className={styles.navBar}>
      <ul className={styles.navList}>

        <li>
          My Scores
        </li>
        <li>
          Tasks
        </li>
        <li>
          Account Settings
        </li>
        <li>
          About
        </li>
        <li>
          Terms and Conditions
        </li>
        <li>
          Log in
        </li>
        <li>
          Register
        </li>
        <li className={styles.signOutButton}>
          Sign Out
        </li>
      </ul>
    </div>
  );
};

export default NavItem;
