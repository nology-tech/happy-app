import './App.css';
<<<<<<< HEAD
import Suggestion from "./components/Suggestion"
import Logo from './components/Logo';
import styles from "./App.module.scss";
import LandingPageButton from "./components/LandingPageButton";
=======
import Sugestion from "./components/Suggestion"
import Logo from './components/Logo';
import styles from "./App.module.scss";
import LandingPageButton from "./components/LandingPageButton";
import Navbar from "./components/Navbar"
import TaskInput from "./components/TaskInput";

>>>>>>> 034c30b59084c229bfe05f59a00cb5272a16e477
const App = () => {
  return (
<<<<<<< HEAD
    <>
      <Suggestion text="Relations with your parents, siblings, spouse, close friends. " isClicked=  {true}/>
=======
    <div className={styles.body}>
    
      <Navbar text="Happiness Scores"/>
      <Sugestion text="Relations with your parents, siblings, spouse, close friends. " isClicked=  {true}/>
>>>>>>> 034c30b59084c229bfe05f59a00cb5272a16e477
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