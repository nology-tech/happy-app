import React, {useState} from "react";
import styles from "./Suggestion.module.scss";

const Suggestion = (props) => {

  //Add - Remove the Show class (display element) when clicking life component.
  const [click, setClick] = useState(false);
  const isClicked = click ? styles.show : " ";

  // Props = Data text that will change based on whicever life component you click on.
  const {text} = props;

  return (
  <article className={`${isClicked} ${styles.message}`}>
    <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h3>
    <p>{text}</p>
  </article>
  );
};

export default Suggestion;
