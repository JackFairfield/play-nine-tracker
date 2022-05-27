import React from "react";
import Input from "@material-ui/core/Input";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Avatar from "@material-ui/core/Avatar";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import InputAdornment from "@material-ui/core/InputAdornment";
import FormControl from "@material-ui/core/FormControl";
import Badge from "@material-ui/core/Badge";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    "& > *": {
      margin: theme.spacing(1),
    },
  },
  large: {
    width: theme.spacing(7),
    height: theme.spacing(7),
  },
  badge: {
    fontSize: "1rem",
    padding: ".6rem",
    margin: "5px",
  },
}));



export default function ScoreInputForm({ rounds, setRounds }) {
  function getTotalScore(playerIndex) {
    return rounds.reduce((acc, curr) => {
      const currPlayer = curr.scores[playerIndex];
      if (
        !currPlayer.score ||
        currPlayer.score === "" ||
        currPlayer.score === "-"
      ) {
        return acc;
      }
      return acc + curr.scores[playerIndex].score;
    }, 0);
  }

  return (
    <>
      <div style={{ display: "flex" }}>
        <Card variant="outlined" style={{ margin: "auto" }}>
          <CardContent>
            {rounds[activeRound].scores.map(({ name, score, photo }, i) => (
              <div
                key={i}
                style={{
                  display: "flex",
                  alignItems: "center",
                  paddingBottom: "10px",
                }}
              ></div>
            ))}
          </CardContent>
        </Card>
      </div>
    </>
  );
}
