import './App.css';
import Suggestion from "./components/Suggestion"
import Logo from './components/Logo';
import styles from "./App.module.scss";
import LandingPageButton from "./components/LandingPageButton";
import TaskInput from './components/TaskInput';

const App = () => {
  return (
    <div>
      <Suggestion text="Relations with your parents, siblings, spouse, close friends. " isClicked=  {true}/>
      <Logo />  
      <div className={styles.LandingPageButtons}>
        <LandingPageButton text={"Sign Up"} cardType="primary"/>
        <LandingPageButton text={"Log In"} cardType="secondary"/>
      </div>
      <TaskInput />
    
    </div>
  );
};
export default App;