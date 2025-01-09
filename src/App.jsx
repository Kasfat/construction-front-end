import { BrowserRouter, Route, RouterProvider, Routes } from "react-router-dom";
import reactLogo from "./assets/react.svg";
import Home from "./components/frontnend/Pages/Home";
import viteLogo from "/vite.svg";
import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/css/style.scss";
import { routes } from "./routes/routes";
function App() {
  return (
    <>
      <RouterProvider router={routes} />
    </>
  );
}

export default App;
