import React from "react";
import styles from "./AccountSettings.module.scss";
import Navbar from "../../components/Navbar"

const AccountSettings = (props) => {
  const { signOut } = props;

  return (
    <>
      <Navbar signOut={signOut}/>

      <p className={styles.text}>AccountSettings works</p>
    </>
  );
};

export default AccountSettings;
