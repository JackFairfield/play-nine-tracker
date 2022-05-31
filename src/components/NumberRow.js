import React from "react";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";

export default function NumberRow() {
  return (
    <Grid container spacing={2}>
      <div style={{ width: "138px" }}></div>
      {Array(9)
        .fill(0)
        .map((val, i) => (
          <Paper
            key={i}
            sx={{
              // backgroundColor: "lightblue !important",
              m: 3,
              p: 2,
              width: "50px",
              fontSize: "30px",
              textAlign: "center",
            }}
          >
            <b>{i + 1}</b>
          </Paper>
        ))}
    </Grid>
  );
}
