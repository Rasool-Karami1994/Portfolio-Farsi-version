import React from "react";
import HomePage from "./pages/HomePage";
import NotFound from "./pages/NotFound";
import About from "./pages/About";
import HireMe from "./pages/HireMe";
import Experiences from "./pages/Experiences";
import CommentsDemoExperience from "./components/Experiences/CommentsDemoExperience";
import TodoListExperience from "./components/Experiences/TodoListExperience";
import WeatherAppExperience from "./components/Experiences/WeatherAppExperience";
const routes = [
  { path: "/about", element: <About /> },
  { path: "/experiences", element: <Experiences /> },
  { path: "/experiences/1", element: <TodoListExperience /> },
  { path: "/experiences/2", element: <CommentsDemoExperience /> },
  { path: "/experiences/3", element: <WeatherAppExperience /> },
  { path: "/hire-me", element: <HireMe /> },
  { path: "/", element: <HomePage /> },
  { path: "*", element: <NotFound /> },
];

export default routes;
