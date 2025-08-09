import React from "react";
import { NavLink, Outlet, useNavigate } from "react-router";
import logo from "../assets/logo.png";

import { AiFillHome } from "react-icons/ai";

const DashLayout = () => {
  const navigate = useNavigate();

  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />

      {/* MAIN CONTENT */}
      <div className="drawer-content flex flex-col">
        {/* Mobile Navbar */}
        <div className="navbar bg-base-300 w-full lg:hidden">
          <div className="flex-none">
            <label htmlFor="my-drawer-2" className="btn btn-square btn-ghost">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block h-6 w-6 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </label>
          </div>
          <div className="mx-2 flex-1 px-2 font-semibold">Dashboard</div>
        </div>

        {/* Routed Page Content */}
        <div className="p-4">
          <Outlet />
        </div>
      </div>

      {/* SIDEBAR */}
      <div className="drawer-side">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>

        <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4 space-y-1">
          {/* Logo */}
          <div
            onClick={() => navigate("/")}
            className="flex items-center gap-2 mb-4 cursor-pointer"
          >
            <img src={logo} alt=" Logo" className="h-10" />
            <h4 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
              E-Services
            </h4>
          </div>

          {/* Universal Dashboard Home */}
          <li className="">
            <NavLink to="/dashboard" end>
               Dashboard Home
            </NavLink>
          </li>
          <li>
            <NavLink to={"/dashboard/add-services"}>Add Services</NavLink>
          </li>
          <li>
            <NavLink to={"/dashboard/manage-services"}>Manage Services</NavLink>
          </li>
          <li>
            <NavLink to={"/dashboard/booked-services"}>Booked-Services</NavLink>
          </li>
          <li>
            <NavLink to={"/dashboard/service-to-do"}>Service-To-Do</NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default DashLayout;
