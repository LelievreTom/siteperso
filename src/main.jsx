import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css'
import App from "./App";
import Portfolio from "./portfolio/Portfolio";
import Pokemon from "./pokemon/Pokemon";
import Scp from "./scp/homepage"
import RentYourDungeonSite from "./projet_cours/Rentyourdungeon";
import Reservation from "./projet_cours/Rentyourdungeonresa";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/pokemon" element={<Pokemon />} />
        <Route path="/scp" element={<Scp />} />
        <Route path="/rentyourdungeon" element={<RentYourDungeonSite/>}/>
        <Route path="/rentyourdungeon/reservation" element={<Reservation/>}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
