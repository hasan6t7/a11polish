import React, { useEffect } from "react";
import { useNavigate } from "react-router";
import "aos/dist/aos.css";
import AOS from "aos";

const ServiceCard = ({ service }) => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);
  const {
    provider_photo,
    name,
    service_photo,
    service_name,
    description,
    _id,
  } = service;
  const navigate = useNavigate();
  const truncateText = (text, maxChars) => {
    if (text.length <= maxChars) return text;
    return text.slice(0, maxChars) + "...";
  };

  return (
    <div
      data-aos="zoom-in-up"
      className="p-6 rounded-2xl border border-purple-400"
    >
      <div className="avatar">
        <div className="h-[45px] w-[45px] ring-purple-700 ring-offset-base-100 rounded-full ring-2 ring-offset-2">
          <img src={provider_photo} />
        </div>
      </div>
      <h1 className="font-bold text-xl my-3">{name}</h1>
      <div>
        <img
          className="space-y-3 rounded-2xl h-[420px]"
          src={service_photo}
          alt=""
        />
        <h1 className="font-bold text-2xl my-3">{service_name}</h1>
        <p className="h-[150px] lg:h-[100px]">
          {truncateText(description, 100)}
        </p>
      </div>
      <div className="flex justify-between items-center mt-5">
        <button
          onClick={() => navigate(`/service/${_id}`)}
          className="btn bg-purple-900 hover:bg-purple-800 border-none text-white"
        >
          View Details
        </button>
        <p className="badge  bg-purple-400"> Price : {service.amount}</p>
      </div>
    </div>
  );
};

export default ServiceCard;
