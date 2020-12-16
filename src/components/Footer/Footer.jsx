import React from "react";
import styles from "./Footer.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../../data/fa-library";

const Footer = (props) => {
  const { addScoreToDataBase, scores } = props;
  const allScore = scores.map((score) => Number(score.score));

  return (
    <div>
      <footer className={styles.footer}>
        <button
          type="submit"
          className={styles.submitButton}
          onClick={() => {
            if (!allScore.includes(0)) {
              addScoreToDataBase();
            } else {
              alert("Please rate all your score to submit them, thanks :)");
            }
          }}
        >
          <FontAwesomeIcon icon={["fas", "plus"]} />
        </button>
        {/* <p>Submit</p> */}
      </footer>
    </div>
  );
};
export default Footer;
