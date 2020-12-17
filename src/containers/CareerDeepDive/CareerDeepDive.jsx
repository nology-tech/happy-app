import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./CareerDeepDive.module.scss";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { Link } from "@reach/router";
// import { Input } from "@material-ui/core";

const CareerDeepDive = () => {
  const careerComponentList = [
    "Pay",
    "Job Title",
    "How I am appreciated by Peers",
    "Wealth Generation",
    "Job Tasks",
    "How I am appreciated by Seniors",
    "Motivation",
    "Job Role",
    "How I am appreciated by Juniors",
    "Personal Roadmap",
    "Job Meaning",
    "My Team(Results)",
    "Personal Development",
    "Happiness in Work",
    "My Team Relationships",
    "Work Hours",
    "Confidence in Company",
    "Connection/Alignment with business",
  ];
  const returnedComponents = careerComponentList.map((component) => {
    return (
      <div>
        <main className={styles.lifeComponent}>
          <div className={styles.lifeComponent__topElements}>
            <h3 className={styles.lifeComponent__title}>{component}</h3>
            <p className={styles.lifeComponent__score}>10/10</p>
          </div>

          <div className={styles.lifeComponent__bottomElements}>
            <span>
              <div className={styles.lifeComponent__circle}></div>
            </span>
            <input
              className={styles.lifeComponentSlider}
              type="range"
              min="1"
              max="10"
              step="1"
            />
          </div>
        </main>
      </div>
    );
  });

  return (
    <>
      <div className={styles.deepDive}>
        <Navbar text="Career Deep Dive" />
        {returnedComponents}
        <div className={styles.deepDiveFooter}>
          <Link to="../setscores">
            <button className={styles.button}>
              <FontAwesomeIcon icon={["fas", "chevron-circle-left"]} />
              <p>BACK</p>
            </button>
          </Link>
        </div>
      </div>
      <Footer submitScores={true} />
    </>
  );
};

export default CareerDeepDive;
