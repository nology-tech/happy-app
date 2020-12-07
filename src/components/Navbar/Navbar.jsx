import React, { useState } from "react";
import styles from "./Navbar.module.scss";
import personLogo from "../../assets/images/person-logo.png";
import NavItem from "../NavItem";


const Navbar = (props) => {
  const { text, signOut } = props; 
  // const openMenu = () => alert("This was clicked");

  const [openMenu, setOpenMenu] = useState(false)

  let menu;
  if (openMenu) {
    menu = <NavItem className={styles.slide} setOpenMenu={setOpenMenu} signOut={signOut} />
  }

  return (
    <div className={styles.nav}>
      <div onClick={() => setOpenMenu(true)} className={styles.burger}>
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
