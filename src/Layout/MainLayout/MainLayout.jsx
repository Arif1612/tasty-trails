import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import { Outlet } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const MainLayout = () => {
  return (
    <div className="container">
      <Navbar></Navbar>
      <Outlet></Outlet>
      <ToastContainer></ToastContainer>
    </div>
  );
};

export default MainLayout;
