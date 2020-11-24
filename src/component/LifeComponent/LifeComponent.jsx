import React from "react";
import styles from "./LifeComponent.module.scss";

const LifeComponent = () => {

  return (
    <>
      <p>{nameOfLifeComponent}</p>
      <NumericScore />
      <BarScore />
    </>
  );
};

export default LifeComponent;
