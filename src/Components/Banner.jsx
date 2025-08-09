import React from "react";
import { Link } from "react-router";

const Banner = () => {
  return (
    <div
      className="hero min-h-[70vh]"
      style={{
        backgroundImage:
          "url(https://i.ibb.co/HpTwFHJQ/Chat-GPT-Image-Jun-10-2025-02-44-19-PM.png)",
      }}
    >
      <div className="hero-overlay"></div>
      <div className="hero-content text-neutral-content text-center">
        <div className="max-w-md">
          <h1 className="mb-5 text-4xl font-bold">Welcome to E-Services </h1>
          <p className="mb-5">
            Discover a wide range of services tailored for you.Your digital
            service partner. Empowering your business with innovative
            E-solutions. Explore our solutions and boost your productivity.
          </p>
          <Link to={"/all-services"}>
            <button className="btn bg-purple-900 hover:bg-purple-800 border-none text-white">
              Get Started
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Banner;
