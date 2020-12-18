import React from "react";
import styles from "./LandingPageButton.module.scss";

const LandingPageButton = (props) => {
  const { click, cardType, text } = props;

  const buttonStyles = [styles.button];
  if (cardType === "primary") {
    buttonStyles.push(styles.primary);
  }

  if (cardType === "secondary") {
    buttonStyles.push(styles.secondary);
  }

  return (
    <>
      <button className={buttonStyles.join(" ")} onClick={click}>
        {text}
      </button>
    </>
  );
};

export default LandingPageButton;
