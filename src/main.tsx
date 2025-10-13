import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./layouts/Header.tsx";
import Setup from "./pages/Setup.tsx";
import Game from "./pages/Game.tsx";

import App from "./pages/App.tsx";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route index element={<App />} />
        <Route path="setup" element={<Setup />} />
        <Route path="game/:roomid" element={<Game />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
