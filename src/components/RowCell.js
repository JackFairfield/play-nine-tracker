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

  function onFocus() {
    inputRef.current.value = ''
    setPlayers((prev) => {
      return prev.map((oldPlayer, i) => {
        oldPlayer.rounds[scoreIndex].focused = player.name === oldPlayer.name;
        return oldPlayer;
      });
    });
  }

  function onChange() {

  }

  return (
    <Paper sx={{ m: 3, p: 2, width: "50px" }}>
      <Input
      sx={{fontSize: '38px'}}
        defaultValue={0}
        onChange={onChange}
        onFocus={onFocus}
        inputRef={inputRef}
      />
    </Paper>
  );
}
