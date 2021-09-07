import { useState } from "react";
import "./App.css";

import NewGameForm from "./components/NewGameForm";
import MainGameForm from "./components/MainGameForm";

import michellePhoto from "./images/michelle.jpg";
import lexyPhoto from "./images/lexy.jpg";
import jackPhoto from "./images/jack.jpg";

function getDefaultRoundsData(players) {
  let rounds = [];
  for (let i = 0; i < 9; i++) {
    rounds.push({
      scores: [
        { name: "Jack", score: 0, photo: jackPhoto },
        { name: "Michelle", score: 0, photo: michellePhoto },
        { name: "Lexy", score: 0, photo: lexyPhoto },
      ],
    });
  }
  return rounds;
}

function App() {
  const [rounds, setRounds] = useState(getDefaultRoundsData());
  const [gameStarted, setGameStarted] = useState(false);

  return (
    <div className="App">
      <header className="App-header">
        <NewGameForm
          gameStarted={gameStarted}
          setGameStarted={setGameStarted}
        />
        <MainGameForm
          gameStarted={gameStarted}
          rounds={rounds}
          setRounds={setRounds}
        />
      </header>
    </div>
  );
}

export default App;
