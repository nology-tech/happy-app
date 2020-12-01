import React from "react";
import styles from "./Login.module.scss";
import Logo from "../../components/Logo";
import LandingPageButton from "../../components/LandingPageButton";
import { Link } from "@reach/router";

const Login = () => {

  return (
    <section className={styles.login} >
      <div className={styles.logo} >
        <Logo />
      </div>
      <div className={styles.button} >
      <Link className={styles.link} to="/">
        <LandingPageButton text={"Log In"} cardType="primary" />
      </Link>
      <Link className={styles.link} to="register">
        <LandingPageButton text={"Sign Up"} cardType="secondary" />
      </Link>
      </div>
    </section>
  );
};

export default Login;
