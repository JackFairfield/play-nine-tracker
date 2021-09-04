import { useState, useEffect } from 'react';
import './App.css';

import NewGameForm from './components/NewGameForm';
import MainGameForm from './components/MainGameForm';

function getDefaultRoundsData(players) {
  let rounds = [];
  for (let i = 0; i < 9; i++) {
    rounds.push({
      scores: [
        { name: 'Jack', score: 0 },
        { name: 'Michelle', score: 0 },
        { name: 'Lexy', score: 0 },
      ],
    });
  }
  return rounds;
}

function App() {
  const [rounds, setRounds] = useState(getDefaultRoundsData());
  const [gameStarted, setGameStarted] = useState(false);

  return (
    <div className='App'>
      <header className='App-header'>
        <p>Welcome to the play nine tracker!</p>
        <NewGameForm gameStarted={gameStarted} setGameStarted={setGameStarted} />
        <MainGameForm gameStarted={gameStarted} rounds={rounds} setRounds={setRounds} />
      </header>
    </div>
  );
}

export default App;
