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
  }, [player, setPlayers]);

  function onFocus(e) {
    setPlayers((prev) => {
      return prev.map((oldPlayer, i) => {
        if (player.name === oldPlayer.name) {
          oldPlayer.rounds[scoreIndex].focused = true;
          oldPlayer.rounds[scoreIndex].score = null;
        } else {
          oldPlayer.rounds[scoreIndex].inputRef.current.blur();
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
    }
    return true;
  }

  function onChange(e) {
    setPlayers((prev) => {
      return prev.map((oldPlayer, i) => {
        if (player.name === oldPlayer.name) {
          oldPlayer.rounds[scoreIndex].focused = true;
          if (isValidInput(e.target.value)) {
            console.log(e.target.value);
            oldPlayer.rounds[scoreIndex].score = e.target.value;
          }
        }

        return oldPlayer;
      });
    });
  }

  return (
    <Paper
      sx={{
        m: 3,
        p: 2,
        width: "50px",
        boxShadow:
          player?.rounds[scoreIndex]?.focused &&
          "inset 0px 0px 0px 3px darkblue",
      }}
    >
      <Input
        sx={{ fontSize: "38px" }}
        defaultValue={0}
        value={player.rounds[scoreIndex]?.score || ""}
        onChange={onChange}
        onFocus={onFocus}
        inputRef={inputRef}
      />
    </Paper>
  );
}
