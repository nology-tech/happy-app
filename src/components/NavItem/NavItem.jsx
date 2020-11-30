import React from "react";
import styles from "./NavItem.module.scss";
import { Link } from "@reach/router";

const NavItem = () => {
  return (
    <div className={styles.navBar}>
      <ul className={styles.navList}>

        <Link to="scores">
          <li>
            My Scores
          </li>
        </Link>

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
