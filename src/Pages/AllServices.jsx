import React, { useState } from "react";
import { Slide } from "react-awesome-reveal";
import { useLoaderData } from "react-router";
import ServiceCard from "../Components/ServiceCard";

const AllServices = () => {
  const services = useLoaderData();
  const [searchText, setSearchText] = useState("");
  const [sortOrder, setSortOrder] = useState("asc"); // asc | desc

  const handleSortToggle = () => {
    setSortOrder(sortOrder === "asc" ? "desc" : "asc");
  };

  const filteredServices = services
    .filter((service) =>
      service.service_name.toLowerCase().includes(searchText.toLowerCase())
    )
    .sort((a, b) => {
      if (sortOrder === "asc") {
        return a.amount - b.amount;
      } else {
        return b.amount - a.amount;
      }
    });

  return (
    <div className="my-20">
      <div className="p-12 text-center space-y-4">
        <h1 className="text-5xl font-semibold text-purple-700">
          <Slide triggerOnce>
            <p>All Services</p>
          </Slide>
        </h1>

        <div className="flex flex-col md:flex-row justify-center items-center gap-4 mb-8">
          <input
            type="text"
            placeholder="Search By Service Name"
            className="input input-bordered w-full max-w-md"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button
            onClick={handleSortToggle}
            className="btn btn-primary"
          >
            Sort by Amount ({sortOrder === "asc" ? "Low → High" : "High → Low"})
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-7">
        {filteredServices.length > 0 ? (
          filteredServices.map((service) => (
            <ServiceCard key={service._id} service={service} />
          ))
        ) : (
          <p className="text-center col-span-2 text-xl text-gray-500">
            No services found.
          </p>
        )}
      </div>
    </div>
  );
};

export default AllServices;
