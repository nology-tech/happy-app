import logo from './logo.svg';
import './App.css';
import styles from "./App.module.scss";
import LandingPageButton from "./components/LandingPageButton";



const App = () => {

  return (
  <> 
  <div className={styles.LandingPageButtons}>
    <LandingPageButton text={"Sign Up"} cardType="primary"/>
    <LandingPageButton text={"Log In"} cardType="secondary"/>
  </div>
  </>



  );
}

export default App;
