import React, { useState } from "react";
import ScoreInputForm from "./ScoreInput/ScoreInputForm";

function MainGameForm({ rounds, setRounds }) {
  return (
    <>
      <div>
        <ScoreInputForm
          rounds={rounds}
          setRounds={setRounds}
        />
      </div>
    </>
  );
}

export default MainGameForm;
