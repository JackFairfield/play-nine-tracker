import React from "react";
import PlayerTotalScore from "./PlayerTotalScore";

export default function CurrentScore({ players }) {
  return (
    <div>
      {players.map((player) => (
        <PlayerTotalScore player={player} />
      ))}
    </div>
  );
}
