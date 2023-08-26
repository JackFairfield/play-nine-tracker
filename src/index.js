import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import Stats from "./Stats";
import Chart from "./Chart";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import your route components too

const root = document.getElementById("root");
ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" exact element={<App />} />
      <Route path="stats" element={<Stats />} />
      <Route path="chart" element={<Chart />} />
    </Routes>
  </BrowserRouter>,
  root
);
