import './App.css';
import Suggestion from "./components/Suggestion"
import Logo from './components/Logo';
import styles from "./App.module.scss";
import LandingPageButton from "./components/LandingPageButton";
import Graph from './components/Graph';
import Navbar from './components/Navbar';
import AllTasks from "./components/AllTasks";

const App = () => {

  return (
    <div className={styles.body}>
    <Navbar text="Happiness Scores"/>
      <Suggestion text="Relations with your parents, siblings, spouse, close friends." isClicked={true}/>
      <Logo />  
      <div className={styles.LandingPageButtons}>
        <LandingPageButton text={"Sign Up"} cardType="primary"/>
        <LandingPageButton text={"Log In"} cardType="secondary"/>
      </div>
      <Graph />
      <AllTasks />
    </div>
  );
};

export default App; 
