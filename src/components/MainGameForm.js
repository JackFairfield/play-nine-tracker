import React, { useState } from 'react';
import RoundStepper from './RoundStepper';
import ScoreInputForm from './ScoreInputForm';

function MainGameForm({ gameStarted, rounds, setRounds }) {
  const [activeRound, setActiveRound] = useState(0);
  return (
    <>
      <div style={{ display: gameStarted ? '' : 'none' }}>
        <RoundStepper rounds={rounds} activeRound={activeRound} setActiveRound={setActiveRound} />
        <ScoreInputForm
          activeRound={activeRound}
          rounds={rounds}
          setRounds={setRounds}
          setActiveRound={setActiveRound}
        />
      </div>
    </>
  );
}

export default MainGameForm;
