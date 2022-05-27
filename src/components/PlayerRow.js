import React from "react";
import RowCell from "./RowCell";

export default function PlayerRow({ player, setPlayers }) {
  return (
    <>
      {Array(9)
        .fill(null)
        .map((val, i) => (
          <RowCell key={i} player={player} setPlayers={setPlayers} scoreIndex={i} />
        ))}
    </>
  );
}
