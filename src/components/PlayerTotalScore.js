import React from "react";

export default function PlayerTotalScore({ player }) {
  let currScore = 0;
  Object.keys(player.rounds).forEach((key) => {
    const scoreObj = player.rounds[key];
    if (scoreObj) {
      const score = scoreObj.score;
      const val = parseInt(score);
      if (!isNaN(val)) {
        currScore += val;
      }
    }
  });

  return (
    <div>
      <span>{player.name}</span>:  <span>{currScore}</span>
    </div>
  );
}
