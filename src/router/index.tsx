import {
    createBrowserRouter,
  } from "react-router-dom";
import { Character } from "../pages/Character";
import { Home } from "../pages/Home";

  export const Router = createBrowserRouter([
    {
      path: "*",
      element: <Home/>,
    },
  ]);