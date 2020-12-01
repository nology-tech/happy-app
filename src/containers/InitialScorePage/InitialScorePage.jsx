import React from "react";
import styles from "./InitialScorePage.module.scss";
import LifeComponentList from "../../components/LifeComponentList"
import Footer from "../../components/Footer"

const InitialScorePage = () => {
  return (
    <section>
      <LifeComponentList />
      <Footer />
    </section>
  );
};

export default InitialScorePage;
