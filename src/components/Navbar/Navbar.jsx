import React, { useState } from "react";
import styles from "./Navbar.module.scss";
import happyLogo from "../../assets/images/happy-logo.png";
import NavItem from "../NavItem";

const Navbar = (props) => {
  const { text, signOut } = props; 
  
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
      <div>{ menu }
        <img src={happyLogo} alt="logo"/>      
      </div>
    </div>
    );
};
export default Navbar;