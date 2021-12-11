import React from "react";
import ReactDOM from "react-dom";
import Layout from "./components/Layout/Layout";
import MenuBg from "./components/MenuBg/MenuBg";
import Navbar from "./components/Navbar/Navbar";
import "./index.css";
import Hero from "./sections/Hero";
import Landmark from "./sections/Landmark";
import AOS from "aos";
import "aos/dist/aos.css";
import LMOR from "./sections/LMOR";
import Residences from "./sections/Residences";
AOS.init();

ReactDOM.render(
  <React.StrictMode>
    <Navbar />
    <Hero />
    <MenuBg />
    <Landmark />
    <LMOR />
    <Residences />
  </React.StrictMode>,
  document.getElementById("root")
);
