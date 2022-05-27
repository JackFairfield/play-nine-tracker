import React, { useState } from "react";
import ScoreInputForm from "./ScoreInput/ScoreInputForm";

function MainGameForm({ rounds, setRounds }) {
  const [activeRound, setActiveRound] = useState(0);
  return (
    <>
      <div>
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
