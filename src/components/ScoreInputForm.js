import React from "react";
import Input from "@material-ui/core/Input";
import Paper from "@material-ui/core/Paper";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Avatar from "@material-ui/core/Avatar";
import RoundButtons from "./RoundButtons";
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

function isValidInput(str) {
  var code, i, len;
  if (str === "") {
    return true;
  }

  for (i = 0, len = str.length; i < len; i++) {
    code = str.charCodeAt(i);
    if (!(code > 47 && code < 58) && !(code === 45)) {
      return false;
    }
  }
  return true;
}

export default function ScoreInputForm({
  activeRound,
  rounds,
  setRounds,
  setActiveRound,
}) {
  const classes = useStyles();
  function handleScoreChange(e, playerIndex) {
    const isValid = isValidInput(e.target.value);
    console.log(isValid);
    if (!isValid) {
      console.log(e.target.value);
      return false;
    } else {
      console.log(e.target.value);
      const tempRounds = [...rounds].map((round, i) => {
        if (activeRound === i) {
          if (e.target.value === "") {
            round.scores[playerIndex].score = "";
          } else if (Number(e.target.value)) {
            round.scores[playerIndex].score = Number(e.target.value);
          } else if (e.target.value === "-") {
            round.scores[playerIndex].score = "-";
          }
        }
        return round;
      });
      setRounds(tempRounds);
    }
  }

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
              >
                {/* <div style={{ display: "flex", alignItems: "center", flex: 3 }}>
                  <span style={{ marginLeft: "10px" }}>{name}</span>
                </div> */}
                {/* <Input
                  onChange={(e) => handleScoreChange(e, i)}
                  type="number"
                  style={{ fontSize: "2.6rem", flex: "1" }}
                  variant="outlined"
                  label={name}
                  value={score}
                /> */}
                {/* <TextField
                  onChange={(e) => handleScoreChange(e, i)}
                  type="number"
                  style={{
                    fontSize: "3.6rem",
                    flex: 2,
                    marginLeft: "20px",
                    marginRight: "20px",
                  }}
                  variant="outlined"
                  // label={name}
                  value={score}
                  variant="outlined"
                /> */}
                <form autoComplete="off">
                  <FormControl>
                    <InputLabel
                      htmlFor="input-with-icon-adornment"
                      style={{ fontSize: "2rem" }}
                    >
                      {name}
                    </InputLabel>
                    <Input
                      value={score}
                      onChange={(e) => handleScoreChange(e, i)}
                      inputProps={{
                        min: 0,
                        style: {
                          textAlign: "center",
                          padding: "1em",
                          fontSize: "2rem",
                        },
                      }}
                      id="input-with-icon-adornment"
                      startAdornment={
                        <InputAdornment
                          position="start"
                          style={{ display: "flex" }}
                        >
                          <Badge
                            badgeContent={getTotalScore(i)}
                            color="primary"
                            showZero
                            max={999}
                            anchorOrigin={{
                              vertical: "bottom",
                              horizontal: "right",
                            }}
                            classes={{ badge: classes.badge }}
                          >
                            <Avatar
                              alt={name}
                              src={photo}
                              className={classes.large}
                            />
                          </Badge>
                        </InputAdornment>
                      }
                    />
                  </FormControl>
                </form>
              </div>
            ))}
          </CardContent>
          <CardActions>
            <RoundButtons
              activeRound={activeRound}
              rounds={rounds}
              setActiveRound={setActiveRound}
            />
          </CardActions>
        </Card>
      </div>
    </>
  );
}
