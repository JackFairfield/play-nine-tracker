import { useState, useEffect } from "react";

import "./App.scss";

import PlayerBadge from "./components/PlayerBadge";
import Paper from "@mui/material/Paper";

import michellePhoto from "./images/michelle.jpg";
import lexyPhoto from "./images/lexy.jpg";
import jackPhoto from "./images/jack.jpg";

import Grid from "@mui/material/Grid";
import PlayerRow from "./components/PlayerRow";
import NumberRow from "./components/NumberRow";

import { getPastGames } from "./writeToDb";

import CurrentScore from "./components/CurrentScore";

import arrowKeyHandler from "./arrowKeyHandler";

function App() {
  const [players, setPlayers] = useState([
    { name: "Jack", photo: jackPhoto, rounds: {} },
    { name: "Michelle", photo: michellePhoto, rounds: {} },
    { name: "Lexy", photo: lexyPhoto, rounds: {} },
  ]);

  function downHandler(e) {
    arrowKeyHandler(e, players);
  }

  useEffect(() => {
    window.addEventListener("keydown", downHandler);
    getPastGames().then((games) => {
      console.log(games);
    });
    return () => {
      window.removeEventListener("keydown", downHandler);
    };
  });

  return (
    <div className="App">
      <br />
      <br />
      <Paper className="main-area">
        <NumberRow />
        {players.map((player, i) => (
          <div key={i} style={{ display: "flex", alignItems: "center" }}>
            <PlayerBadge player={player} />
            <Grid container spacing={2}>
              <PlayerRow player={player} setPlayers={setPlayers} />
            </Grid>
          </div>
        ))}
      </Paper>
      <CurrentScore players={players} />
    </div>
  );
}

export default App;
