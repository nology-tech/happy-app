import LifeComponent from "./components/LifeComponent";
import "./data/fa-library";
import Sugestion from "./components/Suggestion"
import Logo from './components/Logo';
import styles from "./App.module.scss";
import LandingPageButton from "./components/LandingPageButton";
import Navbar from "./components/Navbar"
import TaskInput from "./components/TaskInput";

const App = () => {

  return (
    <div className={styles.body}>
      <Navbar text="Happiness Scores"/>
      <LifeComponent />
      <Sugestion text="Relations with your parents, siblings, spouse, close friends. " isClicked=  {true}/>
      <Logo />  
      <div className={styles.LandingPageButtons}>
        <LandingPageButton text={"Sign Up"} cardType="primary"/>
        <LandingPageButton text={"Log In"} cardType="secondary"/>
      </div>
      <TaskInput/>
    </div>
  );
};

export default App; 
