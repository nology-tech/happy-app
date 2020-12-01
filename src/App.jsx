import LifeComponent from "./components/LifeComponent";
import "./data/fa-library";
import Suggestion from "./components/Suggestion"
import './App.css';
import Logo from './components/Logo';
import styles from "./App.module.scss";
import LandingPageButton from "./components/LandingPageButton";
import Graph from './components/Graph';
import Navbar from './components/Navbar';
import AllTasks from "./components/AllTasks";
import User from "./components/User"
import SignupPage from "./containers/SignupPage";

import userImagePlaceHolder from "./assets/images/userImagePlaceHolder.png";


const App = () => {
      return (
            <main className={styles.body}>
                  <SignupPage />
                  {/* <Navbar text="Happiness Scores" />
                  <User userName='User Name' userImage={userImagePlaceHolder} />
                  <Suggestion text="Relations with your parents, siblings, spouse, close friends." isClicked={true} />
                  <LifeComponent />
                  <Graph />
                  <div>
                        <AllTasks />
                  </div> */}
            </main>
      );
};

export default App; 