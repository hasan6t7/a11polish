import React, { useContext, useEffect, useState } from "react";
import logo from "../assets/logo.png";
import { Link, NavLink, useNavigate } from "react-router";
import { AuthContext } from "../Provider/AuthProvider";
import Swal from "sweetalert2";

import Loader from "./Loader";
import { MdDarkMode, MdWbTwilight } from "react-icons/md";
import { toast } from "react-toastify";

const Navbar = () => {
  const { user, LogOutUser, loading } = useContext(AuthContext);
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("theme") || "light";
  });

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  useEffect(() => {
    document.querySelector("html").setAttribute("data-theme", theme);
  }, [theme]);

  const navigate = useNavigate();
  const handleLogOut = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Logout!",
    }).then((result) => {
      if (result.isConfirmed) {
        LogOutUser()
          .then(() => {
            navigate("/");
            Swal.fire({
              title: "Logged Out!",
              text: "Log Out Successfully Done",
              icon: "success",
            });
          })
          .catch((error) => {
            toast.error(error.message);
          });
      }
    });
  };
  if (loading) {
    return <Loader></Loader>;
  }
  return (
    <div className="navbar fixed top-0 left-0 right-0 w-full z-50 bg-purple-200">
      <div className="navbar-start px-10">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {user ? (
              <>
                <li>
                  <NavLink to={"/"}>Home</NavLink>
                </li>
                <li>
                  <details>
                    <summary>Dashboard</summary>
                    <ul className="p-2">
                      <li>
                        <NavLink to={"/add-services"}>Add Services</NavLink>
                      </li>
                      <li>
                        <NavLink to={"/manage-services"}>
                          Manage Services
                        </NavLink>
                      </li>
                      <li>
                        <NavLink to={"/booked-services"}>
                          Booked-Services
                        </NavLink>
                      </li>
                      <li>
                        <NavLink to={"service-to-do"}>Service-To-Do</NavLink>
                      </li>
                    </ul>
                  </details>
                </li>
                <li>
                  <NavLink to={"/all-services"}>Services</NavLink>
                </li>{" "}
                <div className="space-y-2">
                  <label className="swap swap-rotate ml-3">
                    <input onClick={toggleTheme} type="checkbox" />
                    <div className="swap-on">
                      <MdWbTwilight size={30} />
                    </div>
                    <div className="swap-off">
                      <MdDarkMode size={30} />
                    </div>
                  </label>
                  <br />
                  <button
                    onClick={() => handleLogOut()}
                    className="relative cursor-pointer rounded px-5 py-2.5 overflow-hidden group bg-purple-700 relative hover:bg-gradient-to-r hover:from-purple-500 hover:to-purple-700 text-white hover:ring-2 hover:ring-offset-2 hover:ring-purple-700 transition-all ease-out duration-300"
                  >
                    <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
                    <span className="relative text-white font-semibold">
                      Log Out
                    </span>
                  </button>
                  <br />
                  <div className="avatar">
                    <div className="h-[45px] w-[45px] ring-purple-700 ring-offset-base-100 rounded-full ring-2 ring-offset-2">
                      <img src={user?.photoURL} referrerPolicy="no-referrer" />
                    </div>
                  </div>
                </div>
              </>
            ) : (
              <>
                <li>
                  <NavLink to={"/"}>Home</NavLink>
                </li>
                <li>
                  <NavLink to={"all-services"}>Services</NavLink>
                  {/* <details>
                    <summary>Dashboard</summary>
                    <ul className="p-2">
                      <li>
                        <NavLink to={"/add-services"}>Add Services</NavLink>
                      </li>
                      <li>
                        <NavLink to={"/manage-services"}>Manage Services</NavLink>
                      </li>
                      <li>
                        <NavLink to={"/booked-services"}>
                          Booked-Services
                        </NavLink>
                      </li>
                      <li>
                        <NavLink to={"service-to-do"}>Service-To-Do</NavLink>
                      </li>
                    </ul>
                  </details> */}
                </li>
                <li>
                  <NavLink to={"/login"}>Login</NavLink>
                </li>
              </>
            )}
          </ul>
        </div>
        <Link to={"/"}>
          <div className="flex gap-1 items-center">
            <img
              className="w-14 h-14 rounded-full hidden lg:flex"
              src={logo}
              alt=""
            />
            <p className="text-2xl text-purple-900 font-bold">E-Services</p>
          </div>
        </Link>
      </div>
      {user ? (
        <>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
              <li>
                <NavLink to={"/"}>Home</NavLink>
              </li>
              <li>
                <details>
                  <summary>Dashboard</summary>
                  <ul className="p-2">
                    <li>
                      <NavLink to={"/add-services"}>Add Services</NavLink>
                    </li>
                    <li>
                      <NavLink to={"/manage-services"}>Manage Services</NavLink>
                    </li>
                    <li>
                      <NavLink to={"/booked-services"}>Booked-Services</NavLink>
                    </li>
                    <li>
                      <NavLink to={"service-to-do"}>Service-To-Do</NavLink>
                    </li>
                  </ul>
                </details>
              </li>
              <li>
                <NavLink to={"/all-services"}>Services</NavLink>
              </li>
            </ul>
          </div>
        </>
      ) : (
        <>
          <div className="navbar-end hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
              <li>
                <NavLink to={"/"}>Home</NavLink>
              </li>
              <li>
                <NavLink to={"all-services"}>Services</NavLink>
                {/* <details>
                  <summary>Dashboard</summary>
                  <ul className="p-2">
                    <li>
                      <NavLink to={"/add-services"}>Add Services</NavLink>
                    </li>
                    <li>
                      <NavLink to={"/manage-services"}>Manage Services</NavLink>
                    </li>
                    <li>
                      <NavLink to={"/booked-services"}>Booked-Services</NavLink>
                    </li>
                    <li>
                      <NavLink to={"service-to-do"}>Service-To-Do</NavLink>
                    </li>
                  </ul>
                </details> */}
              </li>
              <li>
                <NavLink to={"/login"}>Login</NavLink>
              </li>
            </ul>
          </div>
        </>
      )}
      {user && (
        <div className="navbar-end hidden lg:flex gap-2">
          <label className="swap swap-rotate ml-3">
            <input onClick={toggleTheme} type="checkbox" />
            <div className="swap-on">
              <MdWbTwilight size={30} />
            </div>
            <div className="swap-off">
              <MdDarkMode size={30} />
            </div>
          </label>
          <button
            onClick={() => handleLogOut()}
            className="relative mx-1 cursor-pointer rounded px-5 py-2.5 overflow-hidden group bg-purple-700 relative hover:bg-gradient-to-r hover:from-purple-500 hover:to-purple-700 text-white hover:ring-2 hover:ring-offset-2 hover:ring-purple-700 transition-all ease-out duration-300"
          >
            <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
            <span className="relative text-white font-semibold">Log Out</span>
          </button>
          <div className="avatar">
            <div className="h-[45px] w-[45px] ring-purple-700 ring-offset-base-100 rounded-full ring-2 ring-offset-2">
              <img src={user?.photoURL} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
