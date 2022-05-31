import { useEffect, useRef } from "react";
import Paper from "@mui/material/Paper";
import Input from "@mui/material/Input";

export default function RowCell({ player, setPlayers, scoreIndex }) {
  const inputRef = useRef();
  useEffect(() => {
    setPlayers((prev) => {
      return prev.map((oldPlayer, i) => {
        if (player.name === oldPlayer.name) {
          oldPlayer.rounds[scoreIndex] = oldPlayer.rounds[scoreIndex] || {};
          oldPlayer.rounds[scoreIndex].inputRef = inputRef;
          oldPlayer.rounds[scoreIndex].value =
            oldPlayer.rounds[scoreIndex].value || 0;
        }
        return oldPlayer;
      });
    });
  }, [player, setPlayers, scoreIndex]);

  function onFocus(e) {
    setPlayers((prev) => {
      return prev.map((oldPlayer, i) => {
        Object.keys(oldPlayer.rounds).forEach((key) => {
          if (key !== scoreIndex) {
            oldPlayer.rounds[key].focused = false;
          }
        });

        if (player.name === oldPlayer.name) {
          oldPlayer.rounds[scoreIndex].focused = true;
          // oldPlayer.rounds[scoreIndex].score = null;
        }

        return oldPlayer;
      });
    });
  }

  function onBlur(e) {
    setPlayers((prev) => {
      return prev.map((oldPlayer, i) => {
        if (player.name === oldPlayer.name) {
          oldPlayer.rounds[scoreIndex].focused = false;
        }
        return oldPlayer;
      });
    });
  }

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
      if (code === 45 && i !== 0) {
        return false;
      }
    }
    return true;
  }

  function onChange(e) {
    setPlayers((prev) => {
      return prev.map((oldPlayer, i) => {
        if (player.name === oldPlayer.name) {
          oldPlayer.rounds[scoreIndex].focused = true;
          if (isValidInput(e.target.value)) {
            const val = parseInt(e.target.value);
            if (isNaN(val)) {
              if (e.target.value === "-") {
                oldPlayer.rounds[scoreIndex].score = "-";
              }
              if (e.target.value === "") {
                oldPlayer.rounds[scoreIndex].score = "";
              }
            } else {
              if (val <= 99 && val >= -100) {
                oldPlayer.rounds[scoreIndex].score = val;
              }
            }
          }
        }
        return oldPlayer;
      });
    });
  }

  const scoreObj = player.rounds[scoreIndex];
  const score =
    scoreObj &&
    scoreObj.score !== null &&
    (!isNaN(scoreObj.score) || scoreObj.score === "-")
      ? scoreObj.score
      : "";

  return (
    <Paper
      sx={{
        m: 3,
        p: 2,
        width: "50px",
        boxShadow:
          player?.rounds[scoreIndex]?.focused &&
          "inset 0px 0px 0px 3px darkblue !important",
      }}
    >
      <Input
        sx={{ fontSize: "38px" }}
        value={score === undefined || score === null ? "" : score}
        onChange={onChange}
        onBlur={onBlur}
        onFocus={onFocus}
        inputRef={inputRef}
      />
    </Paper>
  );
}
