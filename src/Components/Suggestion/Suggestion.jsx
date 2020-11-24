import React, {useState} from "react";
import styles from "./Suggestion.module.scss";

const Suggestion = (props) => {

  const [click, setClick] = useState(false)
  const isClicked = click ? styles.show : " ";



  const {text} = props

  return (
   <article className={`${isClicked} ${styles.message}`}>
     <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h3>
     <p>{text}</p>
   </article>
  );
};

export default Suggestion;
