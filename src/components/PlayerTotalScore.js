import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

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
    <Card className="player-score">
      <CardContent>
        <Typography variant="h5" component="div">
          {player.name}
        </Typography>
        <Typography variant="h3" component="div">
          {currScore}
        </Typography>
      </CardContent>
    </Card>
  );
}
