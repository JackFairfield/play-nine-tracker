import { useState, useEffect } from 'react';
import './App.css';

import NewGameForm from './components/NewGameForm';

function App() {
  const [rounds, setRounds] = useState([]);
  const [gameStarted, setGameStarted] = useState(false);

  return (
    <div className='App'>
      <header className='App-header'>
        <p>Welcome to the play nine tracker!</p>
        <NewGameForm gameStarted={gameStarted} setGameStarted={setGameStarted} />
      </header>
    </div>
  );
}

export default App;
