import React from "react";
import Button from "@material-ui/core/Button";

export default function RoundButtons({
  rounds,
  setActiveRound,
  activeRound,
  setGameOver,
}) {
  const handleNext = () => {
    if (rounds.length - 1 === activeRound) {
      setGameOver(true);
    } else {
      setActiveRound((prevActiveRound) => prevActiveRound + 1);
    }
  };

  const handleBack = () => {
    setActiveRound((prevActiveRound) => prevActiveRound - 1);
  };

  return (
    <div>
      <div>
        <div>
          <Button
            variant="contained"
            color="default"
            disabled={activeRound === 0}
            onClick={handleBack}
          >
            Back
          </Button>
          <Button variant="contained" color="primary" onClick={handleNext}>
            {activeRound === rounds.length - 1 ? "Finish" : "Next"}
          </Button>
        </div>
      </div>
    </div>
  );
}
