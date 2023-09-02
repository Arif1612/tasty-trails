import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import { Outlet } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "../../components/Footer/Footer";
import Carousel from "../../components/Home/Carousel";

const MainLayout = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Carousel></Carousel>
      <Outlet></Outlet>
      
      <ToastContainer></ToastContainer>
      <Footer></Footer>
    </div>
  );
};

export default MainLayout;
