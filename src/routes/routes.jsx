import { createBrowserRouter } from "react-router-dom";
import FrontLayout from "../components/frontnedLayout/FrontLayout";
import Home from "../components/frontnend/Pages/Home";
import About from "../components/frontnend/Pages/About";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <FrontLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
    ],
  },
]);
