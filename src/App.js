import { useState, useEffect } from "react";
import "./App.css";

import PlayerBadge from "./components/PlayerBadge";
import Paper from "@mui/material/Paper";

import michellePhoto from "./images/michelle.jpg";
import lexyPhoto from "./images/lexy.jpg";
import jackPhoto from "./images/jack.jpg";

import grassBorder from "./images/grass-border.png";

import Grid from "@mui/material/Grid";
import PlayerRow from "./components/PlayerRow";
import NumberRow from "./components/NumberRow";

import CurrentScore from './components/CurrentScore'

import arrowKeyHandler from "./arrowKeyHandler";

function App() {
  const [players, setPlayers] = useState([
    { name: "Jack", score: 0, photo: jackPhoto, rounds: {} },
    { name: "Michelle", score: 0, photo: michellePhoto, rounds: {} },
    { name: "Lexy", score: 0, photo: lexyPhoto, rounds: {} },
  ]);

  function downHandler(e) {
    arrowKeyHandler(e, players);
  }

  useEffect(() => {
    window.addEventListener("keydown", downHandler);
    return () => {
      window.removeEventListener("keydown", downHandler);
    };
  });

  return (
    <div className="App">
      {/* <header className="App-header"> */}
        <Paper>
          <NumberRow />
          {players.map((player, i) => (
            <div key={i} style={{ display: "flex", alignItems: "center" }}>
              <PlayerBadge player={player} />
              <Grid container spacing={2}>
                <PlayerRow player={player} setPlayers={setPlayers} />
              </Grid>
              <br />
            </div>
          ))}
        </Paper>
        <CurrentScore players={players}/>
      {/* </header> */}
      
    </div>
  );
}

export default App;
