import React from "react";
import Header from "../Header/Header";
import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function FrontLayout() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
      <ToastContainer position="top-center" />
    </>
  );
}

export default FrontLayout;
