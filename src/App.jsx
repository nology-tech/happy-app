import './App.css';
import Sugestion from "./components/Suggestion"
import Logo from './components/Logo';
import styles from "./App.module.scss";
import LandingPageButton from "./components/LandingPageButton";
<<<<<<< HEAD
import TaskInput from "./components/TaskInput";
=======
import Navbar from './components/Navbar/Navbar';

>>>>>>> ba5cf7edf41d41551a93ff635cbf631ecbe1501f


const App = () => {

  return (
    <div className={styles.body}>
    
    <Navbar text="Happiness Scores"/>
      <Sugestion text="Relations with your parents, siblings, spouse, close friends. " isClicked=  {true}/>
      <Logo />  
      <div className={styles.LandingPageButtons}>
        <LandingPageButton text={"Sign Up"} cardType="primary"/>
        <LandingPageButton text={"Log In"} cardType="secondary"/>
      </div>
<<<<<<< HEAD
      <TaskInput/>
    </>
=======
    </div>
>>>>>>> ba5cf7edf41d41551a93ff635cbf631ecbe1501f
  );
};

export default App; 
