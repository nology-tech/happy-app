import './App.css';
import Suggestion from "./components/Suggestion"
import Logo from './components/Logo';
import styles from "./App.module.scss";
import LandingPageButton from "./components/LandingPageButton";
import Graph from './components/Graph';
import Navbar from './components/Navbar';
import TasksPage from "./components/TasksPage";

const App = () => {

      return (
            <div className={styles.body}>
                  <Navbar text="Happiness Scores"/>
                  <Suggestion text="Relations with your parents, siblings, spouse, close friends." isClicked={true}/>
                  <Logo />  
                  <div>
                        <LandingPageButton text={"Sign Up"} cardType="primary"/>
                        <LandingPageButton text={"Log In"} cardType="secondary"/>
                  </div>
            <Graph />
            <div>
                  <TasksPage />
            </div>
            </div>
  );
};

export default App; 
