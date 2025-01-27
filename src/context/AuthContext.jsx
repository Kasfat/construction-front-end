// src/context/AuthContext.js
import { createContext, useContext, useState, useEffect } from "react";

export const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const userInfo = localStorage.getItem("userInfo");
  const [auth, setAuth] = useState(userInfo);

  const login = (auth) => {
    setAuth(auth);
  };
  const logout = () => {
    localStorage.removeItem("userInfo");
    setAuth(null);
  };

  return (
    <AuthContext.Provider value={{ auth, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
