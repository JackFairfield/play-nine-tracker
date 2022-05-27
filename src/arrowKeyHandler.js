function getFocusedIndex(players) {
  for (let i = 0; i < players.length; i++) {
    const player = players[i];
    const keys = Object.keys(player.rounds);
    for (let j = 0; j < keys.length; j++) {
      const key = keys[j];
      const round = player.rounds[key];
      if (round.focused === true) {
        round.focused = false;
        return { playerIndex: i, roundIndex: j };
      } else {
        round.focused = false;
      }
    }
  }
  return { playerIndex: 0, roundIndex: 0 };
}

function arrowKeyHandler(e, players) {
  let { playerIndex, roundIndex } = getFocusedIndex(players);
  if (e.key === "ArrowDown") {
    if (playerIndex === players.length - 1) {
      playerIndex = -1;
    }
    players[playerIndex + 1].rounds[roundIndex].inputRef.current.focus();
  }
  if (e.key === "ArrowUp") {
    if (playerIndex === 0) {
      playerIndex = players.length;
    }
    players[playerIndex - 1].rounds[roundIndex].inputRef.current.focus();
  }
  if (e.key === "ArrowRight") {
    if (roundIndex === 8) {
      roundIndex = -1;
    }
    players[playerIndex].rounds[roundIndex + 1].inputRef.current.focus();
  }
  if (e.key === "ArrowLeft") {
    if (roundIndex === 0) {
      roundIndex = 9;
    }
    players[playerIndex].rounds[roundIndex - 1].inputRef.current.focus();
  }
}
export default arrowKeyHandler;
