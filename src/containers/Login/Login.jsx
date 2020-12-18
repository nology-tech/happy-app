import React from "react";
import styles from "./Login.module.scss";
import Logo from "../../components/Logo";
import LandingPageButton from "../../components/LandingPageButton";
import { Link } from "@reach/router";

const Login = (props) => {
  const { signIn } = props;

  return (
    <section className={styles.login}>
      <div className={styles.logo}>
        <Logo />
      </div>
      <div className={styles.button}>
        <LandingPageButton text={"Log In"} cardType="primary" click={signIn} />
        <LandingPageButton
          text={"Sign Up"}
          cardType="secondary"
          click={signIn}
        />
        <Link className={styles.link} to="termsconditions">
          <li className={styles.TandC}>Terms and Conditions</li>
        </Link>
      </div>
    </section>
  );
};

export default Login;
