import { createBrowserRouter } from "react-router-dom";
import FrontLayout from "../components/frontnedLayout/FrontLayout";
import Home from "../components/frontnend/Pages/Home";
import About from "../components/frontnend/Pages/About";
import Services from "../components/frontnend/Pages/Services";
import Projects from "../components/frontnend/Pages/Projects";
import Blogs from "../components/frontnend/Pages/Blogs";
import ContactUs from "../components/frontnend/Pages/ContactUs";
import Login from "../components/backend/pages/login";
import Dashboard from "../components/backend/pages/Dashboard";
import ProtectedRoute from "../components/backend/ProtectedRoute";
import { AuthProvider } from "../context/AuthContext";

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
      {
        path: "/services",
        element: <Services />,
      },
      {
        path: "/projects",
        element: <Projects />,
      },
      {
        path: "/blogs",
        element: <Blogs />,
      },
      {
        path: "/contact",
        element: <ContactUs />,
      },
      {
        path: "/admin/login",
        element: <Login />,
      },
      {
        path: "/admin/dashboard",
        element: (
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        ),
      },
    ],
  },
]);
