import React from "react";
import { Outlet } from "react-router";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { ToastContainer } from "react-toastify";

const Root = () => {
  return (
    <div className="">
      <ToastContainer />
      <div className="bg-purple-200 ">
        <nav className="px-11">
          <Navbar></Navbar>
        </nav>
      </div>
      <div className="max-w-[95%] mx-auto">

      <Outlet></Outlet>
      </div>
      <div>
        <footer>
          <Footer></Footer>
        </footer>
      </div>
    </div>
  );
};

export default Root;
