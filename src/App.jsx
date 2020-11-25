import './App.css';
import Sugestion from "./Components/Suggestion"
import Logo from './components/Logo';

const App = () => {
  return (
    <>
      <Sugestion text="Relations with your parents, siblings, spouse, close friends. " isClicked={true}/>
      <Logo />  
    </>
  );
};

export default App; 
