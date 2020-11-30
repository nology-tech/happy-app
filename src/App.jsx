import './App.css';
import Suggestion from "./components/Suggestion"
import Logo from './components/Logo';
import styles from "./App.module.scss";
import LandingPageButton from "./components/LandingPageButton";
import Graph from './components/Graph';
import Navbar from './components/Navbar/Navbar';
import Footer from "./components/Footer"
import userImagePlaceHolder from "./assets/images/userImagePlaceHolder.png";

import User from "./components/User"
import TaskInput from "./components/TaskInput";

const App = () => {

  return (
    <div className="App">
      <User userName='User Name' userImage={userImagePlaceHolder}/>
    </div>
  );
};

export default App; 
