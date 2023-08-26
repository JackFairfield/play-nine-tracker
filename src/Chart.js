import React, { useState, useEffect } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { getPastGames } from "./writeToDb";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Legend,
  Tooltip
);

export default function Chart() {
  const [data, setData] = useState(null);

  useEffect(() => {
    getPastGames().then((_games) => {
      const playerData = {};

      _games.forEach((game) => {
        game.players.forEach((player) => {
          playerData[player.name] = playerData[player.name] || {
            name: player.name,
            gameScores: [],
          };
          const totalScore = player.rounds.reduce((p, a) => p + a, 0);
          playerData[player.name].gameScores.push(totalScore);
        });
      });

      const _data = {
        labels: playerData["Jack"]?.gameScores,
        datasets: [
          {
            label: "Jack",
            data: playerData["Jack"]?.gameScores || [],
            borderColor: "rgb(255, 99, 132)",
            backgroundColor: "rgba(255, 99, 132, 0.5)",
          },
          {
            label: "Michelle",
            data: playerData["Michelle"]?.gameScores || [],
            borderColor: "rgb(100, 99, 132)",
            backgroundColor: "rgba(100, 99, 132, 0.5)",
          },
          {
            label: "Lexy",
            data: playerData["Lexy"]?.gameScores || [],
            borderColor: "rgb(255, 99, 255)",
            backgroundColor: "rgba(255, 99, 255, 0.5)",
          },
        ],
      };
      setData(_data);
    });
  }, [setData]);

  return (
    <div
      style={{
        height: "70vh",
        marginTop: "80px",
        paddingTop: "50px",
        paddingBottom: "50px",
        backgroundColor: "rgba(255, 255, 255, 0.7",
        paddingLeft: "80px",
      }}
    >
      {data && <Line data={data} />}
    </div>
  );
}
