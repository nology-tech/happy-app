import './App.css';
import Sugestion from "./Components/Suggestion"
import Logo from './components/Logo';
import styles from "./App.module.scss";
import LandingPageButton from "./components/LandingPageButton";



const App = () => {

  return (
    <>
      <Sugestion text="Relations with your parents, siblings, spouse, close friends. " isClicked=  {true}/>
      <Logo />  
      <div className={styles.LandingPageButtons}>
        <LandingPageButton text={"Sign Up"} cardType="primary"/>
        <LandingPageButton text={"Log In"} cardType="secondary"/>
      </div>
    </>
  );
};

export default App; 
