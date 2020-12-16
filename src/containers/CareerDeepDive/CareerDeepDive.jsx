import React from "react";
import styles from "./CareerDeepDive.module.scss";
import Navbar from "../../components/Navbar";
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
  "Connection/Alignment with business"
  ];
  const returnedComponents = careerComponentList.map((component) => {
    return (
      <div>
        <main className={styles.lifeComponent}>
          <div className={styles.lifeComponent__topElements}>
            <h3 className={styles.lifeComponent__title}>{component}</h3>
            <p className={styles.lifeComponent__score}>6/10</p>
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
    )

  });

  return (
    <div className={styles.DeepDive}>
      <Navbar />
      <h1>Career Deep Dive</h1>
        {returnedComponents } 
      <Link to="../setscores">
        <button className={styles.button}>Back</button>
      </Link>
    </div>
  );
};

export default CareerDeepDive;
