import "./App.css";
import Cards from "./Cards";
import Scores from "./Scores";

const App = () => {
  return (
    <div className="App">
      <div className="info-text">
        <div className="info-text-left">
          <h1>Memory Game</h1>
          <p>
            Get points by clicking on an image but don't click on any more than
            once!
          </p>
        </div>
        <Scores />
      </div>
      <Cards />
    </div>
  );
};

export default App;
