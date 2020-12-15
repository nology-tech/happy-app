import React from "react";
import styles from "./Footer.module.scss";
import { Link } from "@reach/router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../../data/fa-library";

const Footer = (props) => {
const { addScoreToDataBase, scores, isScoreDisplay } = props;

console.log(isScoreDisplay);

  const showButton = () => {
    if(isScoreDisplay === false) {
      const allScore = scores.map((score) => Number(score.score));

      return (
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
      )
    } else {
      return (
        <button className={styles.submitButton}>
          <Link to="/setscores">
            <FontAwesomeIcon icon={["fas", "pencil-alt"]} />
          </Link>
        </button>
      )
    }
  }

  return (
    <div>
      <footer className={styles.footer}>
        {showButton()}
      </footer>
    </div>
  );
};

export default Footer;
