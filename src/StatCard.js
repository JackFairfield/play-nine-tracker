import * as React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import imgs from "./images/index";

export default function StatCard({ data, totalCount }) {
  console.log(data, totalCount);
  const avgScore = data.totalPoints / totalCount;
  const bestGame = Math.min(...data.gameScores);
  const worstGame = Math.max(...data.gameScores);

  return (
    <Card sx={{ ml: 3, mr: 3, flex: 1 }}>
      <CardHeader title={data.name} subheader={``} />
      <CardMedia
        component="img"
        height="250"
        sx={{ objectPosition: "center top" }}
        image={imgs[data.name.toLowerCase()]}
        alt="User Pic"
      />
      <CardContent>
        <div variant="body2" color="text.secondary">
          <h2 style={{ margin: 0 }}>Number of wins: {data.wins}</h2>
          <h2 style={{ margin: 0 }}>Average Score: {Math.floor(avgScore)}</h2>
          <h2 style={{ margin: 0 }}>Best Round Ever: {data.bestRound}</h2>
          <h2 style={{ margin: 0 }}>Best Game Ever: {bestGame}</h2>
          <h2 style={{ margin: 0 }}>Worst Game Ever: {worstGame}</h2>
        </div>
      </CardContent>
    </Card>
  );
}
