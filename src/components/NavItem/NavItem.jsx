import React from "react";
import styles from "./NavItem.module.scss";
import { Link } from "@reach/router";

<<<<<<< HEAD
const NavItem = () => {
=======

const NavItem = (props) => {
  const { setOpenMenu, signOut } = props
>>>>>>> b3e435d3e3956a3f3ce64bf2121e6404111eccf0
  return (
    <div className={styles.navBar}>
      <ul className={styles.navList}>

        <Link to="/">
          <li>
            Home
          </li>
        </Link>  

        <Link to="scores">
          <li>
            My Scores
          </li>
        </Link>

        <Link to="task">
          <li>
            Tasks
          </li>
        </Link>
        
        <Link to="accountsettings">
          <li>
            Account Settings
          </li>
        </Link>

        <Link to="about">
          <li>
            About
          </li>
        </Link>

        <Link to="termsconditions">
          <li>
            Terms and Conditions
          </li>
        </Link>

        <li className={styles.signOutButton} onClick={signOut}>
          Sign Out
        </li>
      </ul>
    </div>
  );
};

export default NavItem;
