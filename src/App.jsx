import './App.css';
import Suggestion from "./components/Suggestion"
import Logo from './components/Logo';
import styles from "./App.module.scss";
import LandingPageButton from "./components/LandingPageButton";
import Graph from './components/Graph';
import Navbar from './components/Navbar/Navbar';
import TaskInput from "./components/TaskInput";
import AverageScore from './components/AverageScore/AverageScore';

const App = () => {

  return (
    <div className={styles.body}>
    <Navbar text="Happiness Scores"/>
      <Suggestion text="Relations with your parents, siblings, spouse, close friends. " isClicked=  {true}/>
      <Logo />  
      <div className={styles.LandingPageButtons}>
        <LandingPageButton text={"Sign Up"} cardType="primary"/>
        <LandingPageButton text={"Log In"} cardType="secondary"/>
      </div>
      <Graph />
      <TaskInput/>
      <AverageScore />
    </div>
  );
};

export default App; 
