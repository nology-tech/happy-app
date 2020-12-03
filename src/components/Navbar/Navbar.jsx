import React, { useState } from "react";
import styles from "./Navbar.module.scss";
import personLogo from "../../assets/images/person-logo.png";
import NavItem from "../NavItem";

const Navbar = (props) => {
  const { text } = props; 
  // const openMenu = () => alert("This was clicked");

  const [openMenu, setOpenMenu] = useState(false)

  let menu;
  if (openMenu) {
    menu = <NavItem className={styles.slide}/>
  }

  return (
    <div className={styles.nav}>
      <div onClick={() => setOpenMenu(!openMenu)} className={styles.burger}>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <div>{text}</div>
      <div>{ menu }</div>
      <img src={personLogo} alt="logo"/>
    </div>
    );
};

export default Navbar;
