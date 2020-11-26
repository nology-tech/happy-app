import './App.css';
import Sugestion from "./Components/Suggestion"
import Logo from './Components/Logo';
import styles from "./App.module.scss";
import LandingPageButton from "./Components/LandingPageButton";
import Navbar from './Components/Navbar/Navbar';



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
    </div>
  );
};

export default App; 
