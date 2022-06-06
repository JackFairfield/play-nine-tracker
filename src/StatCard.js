import * as React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

export default function RecipeReviewCard({ data, totalCount }) {
  const avgScore = data.totalPoints / totalCount;
  return (
    <Card sx={{ ml: 3, mr: 3, flex: 1 }}>
      <CardHeader title={data.name} subheader={``} />
      <CardMedia
        component="img"
        height="250"
        sx={{ objectPosition: "center top" }}
        image={`/images/${data.name.toLowerCase()}.jpg`}
        alt="User Pic"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          <h2>Number of wins: {data.wins}</h2>
          <h2>Average Score: {Math.floor(avgScore)}</h2>
          <h2>Best Round Ever: {data.bestRound}</h2>
        </Typography>
      </CardContent>
    </Card>
  );
}
