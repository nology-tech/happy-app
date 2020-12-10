import React from "react";
import styles from "./NavItem.module.scss";
import { Link } from "@reach/router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const NavItem = (props) => {
  const { setOpenMenu, signOut } = props;
  return (
    <div className={styles.navBar}>
      <span
        onClick={() => {
          setOpenMenu(false);
        }}
      >
        <FontAwesomeIcon icon="times" className={styles.faIcon} />
      </span>
      <ul className={styles.navList}>
        <Link to="/">
          <li>Home</li>
        </Link>
        <Link to="../setscores">
          <li>Set Scores</li>
        </Link>
        <Link to="../scoredisplay">
          <li>My Scores</li>
        </Link>
        <Link to="../happinessgraph">
          <li>Happiness Graph</li>
        </Link>
        <Link to="../task">
          <li>Tasks</li>
        </Link>
        <Link to="../accountsettings">
          <li>Account Settings</li>
        </Link>
        <Link to="../about">
          <li>About</li>
        </Link>
        <li className={styles.signOutButton} onClick={signOut}>
          Sign Out
        </li>
      </ul>
    </div>
  );
};
export default NavItem;
