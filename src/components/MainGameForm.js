import React, { useState } from "react";
import RoundStepper from "./RoundStepper";
import ScoreInputForm from "./ScoreInput/ScoreInputForm";
import GameOver from "./ScoreInput/GameOver";

function MainGameForm({ gameStarted, rounds, setRounds }) {
  const [activeRound, setActiveRound] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  return (
    <>
      <div style={{ display: gameStarted ? "" : "none" }}>
        {gameOver ? (
          <GameOver
            rounds={rounds}
            setRounds={setRounds}
            setActiveRound={setActiveRound}
            setGameOver={setGameOver}
          />
        ) : (
          <>
            <RoundStepper
              rounds={rounds}
              activeRound={activeRound}
              setActiveRound={setActiveRound}
            />
            <hr />
            <ScoreInputForm
              activeRound={activeRound}
              rounds={rounds}
              setRounds={setRounds}
              setActiveRound={setActiveRound}
              setGameOver={setGameOver}
            />
          </>
        )}
      </div>
    </>
  );
}

export default MainGameForm;
