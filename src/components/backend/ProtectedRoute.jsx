// src/components/ProtectedRoute.js
import { Navigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { useContext } from "react";

const ProtectedRoute = ({ children }) => {
  const { auth } = useContext(AuthContext);

  if (!auth) {
    return <Navigate to="/admin/login" replace />;
  }

  return children;
};

export default ProtectedRoute;
