import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css'
import Portfolio from "./portfolio/Portfolio";
import Pokemon from "./pokemon/Pokemon";
import Scp from "./scp/homepage"
import Serie from "./scp/Serie"
import ScpPage from "./scp/ScpPage";
import RentYourDungeonSite from "./projet_cours/Rentyourdungeon";
import Reservation from "./projet_cours/Rentyourdungeonresa";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Portfolio />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/pokemon" element={<Pokemon />} />
        <Route path="/scp" element={<Scp />} />
        <Route path="/scp/series/:serie" element={<Serie />} />
        <Route path="/scp/recherche" element={<Serie />} />
        <Route path="/scp/:numero" element={<ScpPage />} />
        <Route path="/rentyourdungeon" element={<RentYourDungeonSite/>}/>
        <Route path="/rentyourdungeon/reservation" element={<Reservation/>}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
