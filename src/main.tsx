import React, { PropsWithChildren, StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, NavLink, Link, Route } from "react-router";
import Home from "./Home.tsx";
import "./main.css";
import Hobbies from "./Hobbies.tsx";
import Work from "./Work.tsx";
import SideProjects from "./SideProjects.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hobbies" element={<Hobbies />} />
        <Route path="/work" element={<Work />} />
        <Route path="/side-projects" element={<SideProjects />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);

{
  /* <div className="nav nes-container">
          <Route className="nes-btn is-success">Home</Route >
          <Route className="nes-btn">Work</Route >
          <Route className="nes-btn">Side Projects</Route >
          <Route className="nes-btn is-warning">Hobbies</Route >
        </div> */
}
