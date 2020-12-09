import React from "react";
import styles from "./Footer.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../../data/fa-library";

const Footer = (props) => {
  const { addScoreToDataBase } = props;

  return (
    <div>
      <footer className={styles.footer}>
        <button
          type="submit"
          className={styles.submitButton}
          onClick={addScoreToDataBase}
        >
          <FontAwesomeIcon icon={["fas", "plus"]} />
        </button>
        {/* <p>Submit</p> */}
      </footer>
    </div>
  );
};

export default Footer;
