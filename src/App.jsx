import './App.css';
import Sugestion from "./components/Suggestion"
import Logo from './components/Logo';
import styles from "./App.module.scss";
import LandingPageButton from "./components/LandingPageButton";
import Graph from './components/Graph';

const App = () => {

  return (
    <>
      <Sugestion text="Relations with your parents, siblings, spouse, close friends. " isClicked=  {true}/>
      <Logo />  
      <div className={styles.LandingPageButtons}>
        <LandingPageButton text={"Sign Up"} cardType="primary"/>
        <LandingPageButton text={"Log In"} cardType="secondary"/>
      </div>

      <div>

        <Graph />

      </div>
    </>
  );
};

export default App; 
