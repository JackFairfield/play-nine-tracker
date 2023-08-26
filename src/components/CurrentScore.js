import { Paper } from "@material-ui/core";
import React from "react";
import PlayerTotalScore from "./PlayerTotalScore";
import Button from "@mui/material/Button";
import { writeToDb } from "../writeToDb";
import { useNavigate } from "react-router-dom";

export default function CurrentScore({ players }) {
  const navigate = useNavigate();

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

  function viewStatsClicked() {
    navigate("/stats");
  }
  function viewChartClicked() {
    navigate("/chart");
  }

  return (
    <Paper className="current-score">
      {players.map((player, i) => (
        <PlayerTotalScore key={i} className="player-score" player={player} />
      ))}
      <div
        style={{
          flex: 1,

          margin: "auto",
          fontSize: "30px",
          width: "70%",
        }}
      >
        <Button
          onClick={onClick}
          variant="contained"
          color="success"
          sx={{ width: "100%", height: "50px", mb: 2 }}
        >
          Save Game
        </Button>
        <div
          style={{
            width: "100%",
            height: "50px",
            display: "flex",
            justifyContent: "space-between",
            gap: "10px",
          }}
        >
          <Button
            sx={{ width: "50%", height: "50px" }}
            onClick={viewStatsClicked}
            variant="contained"
          >
            Stats
          </Button>
          <Button
            sx={{ width: "50%", height: "50px", right: 0 }}
            onClick={viewChartClicked}
            variant="contained"
          >
            Chart
          </Button>
        </div>
      </div>
    </Paper>
  );
}
