import React from "react";
import HomePage from "./pages/HomePage";
import NotFound from "./pages/NotFound";
import About from "./pages/About";
import Experiences from "./pages/Experiences";
import RealStateDatabase from "./components/Experiences/RealStateDatabase";
import ShoeShop from "./components/Experiences/ShoeShop";
import FarsiPortfolio from "./components/Experiences/FarsiPortfolio";
const routes = [
  { path: "/about", element: <About /> },
  { path: "/experiences", element: <Experiences /> },
  { path: "/experiences/1", element: <ShoeShop /> },
  { path: "/experiences/2", element: <RealStateDatabase /> },
  { path: "/experiences/3", element: <FarsiPortfolio /> },
  { path: "/", element: <HomePage /> },
  { path: "*", element: <NotFound /> },
];

export default routes;
