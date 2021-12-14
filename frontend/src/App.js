import Header from './components/Header';
import TinderCards from "./components/TinderCards";
import SwipeButtons from "./components/SwipeButtons";
import './App.css';

const App = () => {
  return (
    <div className="app">
      <Header/>
      <TinderCards/>
      <SwipeButtons/>
    </div>
  );
};

export default App;
