import React from "react";
import styles from "./Navbar.module.scss";
import personLogo from '../../assets/images/person-logo.png';


const Navbar = (props) => {
  const { text } = props; 
  const openMenu = () => alert("This was clicked");

  return (
    <div className={styles.nav}>
      <div onClick={openMenu} className={styles.burger}>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <div>{text}</div>
      <img src={personLogo} alt="logo"/>
    </div>
    );
};

export default Navbar;
