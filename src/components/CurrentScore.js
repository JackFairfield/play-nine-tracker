import { Paper } from "@material-ui/core";
import React from "react";
import PlayerTotalScore from "./PlayerTotalScore";
import Button from "@mui/material/Button";
import { writeToDb } from "../writeToDb";

export default function CurrentScore({ players }) {
  function onClick() {
    writeToDb(players).then((written) => {
      if (written) {
        alert("Game Saved");
        window.location.reload();
      } else {
        alert("error");
      }
    });
  }
  return (
    <Paper className="current-score">
      {players.map((player, i) => (
        <PlayerTotalScore key={i} className="player-score" player={player} />
      ))}
      <Button
        onClick={onClick}
        variant="contained"
        color="success"
        sx={{
          flex: 1,
          height: "70px",
          margin: "auto",
          fontSize: "30px",
          width: "70%",
        }}
      >
        Save Game
      </Button>
    </Paper>
  );
}
