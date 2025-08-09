import React from "react";
import { useLoaderData, useNavigate } from "react-router";

const ServiceDetails = () => {
  const navigate = useNavigate();
  const service = useLoaderData();
  const {
    provider_photo,
    name,
    service_photo,
    service_name,
    description,
    service_area,
    _id,
  } = service;
  return (
    <div>
      <div className="p-6 rounded-2xl border border-purple-400 my-20">
        <div className="avatar">
          <div className="h-[45px] w-[45px] ring-purple-700 ring-offset-base-100 rounded-full ring-2 ring-offset-2">
            <img src={provider_photo} />
          </div>
        </div>
        <h1 className="font-bold text-xl my-3">{name}</h1>
        <div>
          <img className="space-y-3 rounded-2xl " src={service_photo} alt="" />
          <h1 className="font-bold text-2xl my-3">{service_name}</h1>
          <p className="">{description}</p>
        </div>
        <div className="flex justify-between items-center mt-5">
          <p className="badge  font-semibold bg-purple-400">
            {" "}
            <span className="font-bold">Location</span> : {service_area}
          </p>
          <p className="badge  font-semibold bg-purple-400">
            {" "}
            <span className="font-bold">Price</span> : {service.amount}
          </p>
        </div>
        <div>
          <button
            onClick={() => navigate(`/book/${_id}`)}
            className="btn mt-5 w-full bg-purple-900 hover:bg-purple-800 border-none text-white"
          >
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;
