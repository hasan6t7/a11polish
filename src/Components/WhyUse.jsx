import React from "react";

const WhyUse = () => {
  return (
    <div className="my-20 text-black">
      <h1 className="text-center mb-10 text-4xl font-bold text-purple-700">
        Why use E-Services ?
      </h1>
      <div className="p-4 grid grid-cols-1 lg:grid-cols-3 space-y-5">
        <div className="p-10 bg-purple-100 shadow-2xl rounded ">
          <div className="">
            <img
              className="rounded-2xl mx-auto"
              src="https://i.ibb.co/3yTBXnZJ/Screenshot-6.png"
              alt=""
            />
          </div>
          <h1 className="text-center text-purple-700 my-4 font-bold text-xl">
            We are the busiest
          </h1>
          <p className="text-center">
            Every 3 minutes someone finds a services on E-Services. As #1
            E-Services you will be sure to find yours
          </p>
        </div>
        <div className="p-10 bg-purple-100 shadow-2xl rounded">
          <div className="">
            <img
              className="rounded-2xl mx-auto"
              src="https://i.ibb.co/ksJMb97B/Screenshot-7.png"
              alt=""
            />
          </div>
          <h1 className="text-center text-purple-700 my-4 font-bold text-xl">
            Safety
          </h1>
          <p className="text-center">
            Your safety is our top priority we have a team of moderator working 7
            days in a week to check ads and content.
          </p>
        </div>
        <div className="p-10 mb-5 bg-purple-100 shadow-2xl rounded">
          <div className="">
            <img
              className="rounded-2xl mx-auto"
              src="https://i.ibb.co/3yTBXnZJ/Screenshot-6.png"
              alt=""
            />
          </div>
          <h1 className="text-center text-purple-700 my-4 font-bold text-xl">
            We all about people
          </h1>
          <p className="text-center">
            Everyone's idea of the perfect service is different. So search
            based on what's important you.
          </p>
        </div>
      </div>
    </div>
  );
};

export default WhyUse;
