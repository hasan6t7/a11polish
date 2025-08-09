import React from "react";
import Banner from "../Components/Banner";
import { useLoaderData, useNavigate } from "react-router";
import { Slide } from "react-awesome-reveal";
import ServiceCard from "../Components/ServiceCard";
import HowItWorks from "../Components/HowItWorks";
import WhyUse from "../Components/WhyUse";
import Stats from "../Components/Stats";
import Features from "./Features";

const Home = () => {
  const allServices = useLoaderData();
  const selectRandom = allServices.sort(() => 0.5 - Math.random());
  const services = selectRandom.slice(0, 6);

  const navigate = useNavigate();
  return (
    <div>
      <Banner></Banner>
      <HowItWorks></HowItWorks>
      <div>
        <div className="p-12 text-center space-y-4">
          <h1 className="text-5xl font-semibold text-purple-700">
            <Slide triggerOnce>
              <p> Popular Services</p>
            </Slide>
          </h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-7">
          {services.map((service) => (
            <ServiceCard service={service}></ServiceCard>
          ))}
        </div>
        <div className="flex justify-center items-center my-10">
          <button
            onClick={() => navigate("/all-services")}
            className="relative mx-1 cursor-pointer rounded px-5 py-2.5 overflow-hidden group bg-purple-700 relative hover:bg-gradient-to-r hover:from-purple-500 hover:to-purple-700 text-white hover:ring-2 hover:ring-offset-2 hover:ring-purple-700 transition-all ease-out duration-300"
          >
            <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
            <span className="relative text-white font-semibold">Show All</span>
          </button>
        </div>
      </div>
      <WhyUse></WhyUse>
      <Features></Features>
      <Stats></Stats>
    </div>
  );
};

export default Home;
