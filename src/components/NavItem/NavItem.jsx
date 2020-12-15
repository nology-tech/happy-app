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
        <Link to="/" onClick={() => setOpenMenu(false)}>
          <li>Home</li>
        </Link>
        <Link to="../setscores" onClick={() => setOpenMenu(false)}>
          <li>Set Scores</li>
        </Link>
        <Link to="../scoredisplay" onClick={() => setOpenMenu(false)}>
          <li>My Scores</li>
        </Link>
        <Link to="../happinessgraph" onClick={() => setOpenMenu(false)}>
          <li>Happiness Graph</li>
        </Link>
        <Link to="../task" onClick={() => setOpenMenu(false)}>
          <li>Tasks</li>
        </Link>
        <Link to="../accountsettings" onClick={() => setOpenMenu(false)}>
          <li>Account Settings</li>
        </Link>
        <Link to="../about" onClick={() => setOpenMenu(false)}>
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
