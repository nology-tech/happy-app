import React from "react";
import styles from "./Footer.module.scss";
import { Link } from "@reach/router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../../data/fa-library";

const Footer = (props) => {
  const { addScoreToDataBase, scores, isScoreDisplay, submitScores } = props;

  const showButton = () => {
    if (isScoreDisplay === false) {
      const allScore = scores.map((score) => Number(score.score));

      return (
        <button
          type="submit"
          className={styles.submitButton}
          onClick={() => {
            if (!allScore.includes(0)) {
              addScoreToDataBase();
              alert("Scores have been added");
            } else {
              alert("Please rate all your scores before submitting them");
            }
          }}
        >
          <FontAwesomeIcon icon={["fas", "plus"]} />
        </button>
      );
    } else if (isScoreDisplay === true) {
      return (
        <button className={styles.submitButton}>
          <Link to="/setscores">
            <FontAwesomeIcon icon={["fas", "pencil-alt"]} />
          </Link>
        </button>
      );
    } else if (submitScores === true) {
      return (
        <button className={styles.submitButton}>
          <FontAwesomeIcon icon={["fas", "plus"]} />
        </button>
      );
    }
  };

  return (
    <div>
      <footer className={styles.footer}>{showButton()}</footer>
    </div>
  );
};

export default Footer;
