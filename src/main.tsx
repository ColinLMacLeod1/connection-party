import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { RoomProvider } from "./contexts/RoomContext.tsx";
import Header from "./layouts/Header.tsx";
import Setup from "./pages/Setup.tsx";
import Game from "./pages/Game.tsx";
import Home from "./pages/Home.tsx";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <RoomProvider>
        <Header />
        <Routes>
          <Route index element={<Home />} />
          <Route path="setup" element={<Setup />} />
          <Route path="game/:roomid" element={<Game />} />
        </Routes>
      </RoomProvider>
    </BrowserRouter>
  </StrictMode>
);
