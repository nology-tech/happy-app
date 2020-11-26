import React from "react";
import styles from "./LandingPageButton.module.scss";
 
const LandingPageButton = (props) => {

  const buttonStyles = [styles.button];
    if (props.cardType === "primary"){
      buttonStyles.push(styles.primary);
    } 

    if (props.cardType === "secondary"){
      buttonStyles.push(styles.secondary);
    } 

  return (
    <>
      <button className={buttonStyles.join(" ")}>{props.text}</button>
    </>
  );
};

export default LandingPageButton;
