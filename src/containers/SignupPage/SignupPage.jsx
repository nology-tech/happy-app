import React from "react";
import styles from "./SignupPage.module.scss";
import Logo from "../../components/Logo";
import LandingPageButton from "../../components/LandingPageButton";

const SignupPage = () => {
    const clicked = (e) => {
      if((e.target.innerHTML) === "Sign Up"){
        alert("You have now signed up!")
      } else {
        alert("You will now be taken to the homepage!")
      }
    };

  return (
    <section className={styles.signupPage} >
      <div className={styles.logo} >
      < Logo />
      </div>
      <div className={styles.button} >
        <LandingPageButton text={"Sign Up"} cardType="primary" clicked={clicked} />
        <LandingPageButton text={"Log In"} cardType="secondary" clicked={clicked} />
      </div>
    </section>
  );
};

export default SignupPage;
