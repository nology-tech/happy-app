import './App.css';
import Sugestion from "./components/Suggestion"
import Logo from './components/Logo';
import styles from "./App.module.scss";
import LandingPageButton from "./components/LandingPageButton";
import Navbar from './components/Navbar/Navbar';

import User from "./components/User"

const App = () => {

  return (
    <div className="App">
      <User userName='User Name'/>
    </div>
  );
};

export default App; 
