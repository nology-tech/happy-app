import React from "react";
import styles from "./NavItem.module.scss";
import { Link } from "@reach/router";


const NavItem = (props) => {
  const { setOpenMenu, signOut } = props
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
