import React from "react";
import styles from "./Navbar.module.scss";
import personLogo from '../../assets/images/person-logo.png';

const Navbar = (props) => {
<<<<<<< HEAD
  const { text } = props; 
  const openMenu = () => alert("This was clicked");
=======
  const { text, signOut } = props; 
  // const openMenu = () => alert("This was clicked");

  const [openMenu, setOpenMenu] = useState(false)

  let menu;
  if (openMenu) {
    menu = <NavItem className={styles.slide} setOpenMenu={setOpenMenu} signOut={signOut} />
  }
>>>>>>> b3e435d3e3956a3f3ce64bf2121e6404111eccf0

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
