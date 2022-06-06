import { useState, useEffect } from "react";
import { getPastGames } from "./writeToDb";
import StatCard from "./StatCard";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";

export default function Stats() {
  const [games, setGames] = useState([]);
  const [summary, setSummary] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    const sum = {};
    games.forEach((game) => {
      const totalScores = {};
      let winningScore = 999;
      let winningPlayer = "";

      game.players.forEach((player) => {
        let playerGameTotal = 0;
        let bestRound = 99;

        player.rounds.forEach((round) => {
          if (round < bestRound) {
            bestRound = round;
          }
          playerGameTotal += round;
        });

        if (playerGameTotal < winningScore) {
          winningScore = playerGameTotal;
          winningPlayer = player.name;
        }
        sum[player.name] = sum[player.name] || {
          totalPoints: 0,
          wins: 0,
          name: player.name,
          bestRound,
        };
        sum[player.name].totalPoints += playerGameTotal;
      });

      sum[winningPlayer].wins++;
    });
    setSummary(sum);
  }, [games, setSummary]);

  useEffect(() => {
    getPastGames().then((_games) => {
      setGames(_games);
    });
  }, [getPastGames]);

  function buttonClicked() {
    navigate("/");
  }

  return (
    <>
      <div
        style={{
          width: "70%",
          margin: "auto",
          marginTop: "30px",
        }}
      >
        <h1>Total Number of games played: {games.length}</h1>
        <Button sx={{ mb: 2 }} variant="contained" onClick={buttonClicked}>
          Return to Game
        </Button>
        <hr />
        <div
          style={{
            display: "flex",
          }}
        >
          {Object.keys(summary).map((key) => (
            <StatCard key={key} data={summary[key]} totalCount={games.length} />
          ))}
        </div>
      </div>
    </>
  );
}
