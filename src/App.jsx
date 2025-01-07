import { BrowserRouter, Route, Routes } from "react-router-dom";
import reactLogo from "./assets/react.svg";
import Home from "./components/frontnend/Home";
import viteLogo from "/vite.svg";
import "bootstrap/dist/css/bootstrap.min.css";
import About from "./components/frontnend/About";
import "./assets/css/style.scss";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          {/* <Route path="/contact" element={<Contact />} />
          <Route path="/services" element={<Services />} />
          <Route path="/404" element={<NotFound />} />
          <Route path="*" element={<Navigate to="/404" />} /> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
