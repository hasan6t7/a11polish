import React, { use, useState } from "react";
import { Slide } from "react-awesome-reveal";

import { useNavigate } from "react-router";
import Swal from "sweetalert2";

// import { useNavigate } from "react-router";

const MyService = ({ servicePromise }) => {
  const data = use(servicePromise);
  const [services, setServices] = useState(data);

  const navigate = useNavigate();
  const handleDeletePost = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://e-services-server.vercel.app/services/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount) {
              Swal.fire({
                title: "Deleted!",
                text: "Your Service has been deleted.",
                icon: "success",
              });
              const remainingServices = services.filter(
                (service) => service._id !== id
              );
              setServices(remainingServices);
            }
          })
          .catch((error) => {
            console.log(error.message);
          });
      }
    });
  };
  return (
    <div>
      {services.length === 0 ? (
        <>
          <div>NO Post Found</div>
        </>
      ) : (
        <div className="my-20">
          <h1 className="text-4xl text-center font-bold text-purple-700 mb-16">
            <Slide delay={500} triggerOnce>
              <p> My Services List</p>
            </Slide>
          </h1>
          <div className="overflow-x-auto">
            <table className="table">
              {/* head */}
              <thead>
                <tr>
                  <th>No</th>
                  <th>Provider Name Name</th>
                  <th>Service Name</th>
                  <th>Service Amount</th>
                  <th></th>
                </tr>
              </thead>
              {services.map((service, index) => (
                <tbody key={index}>
                  {/* row 1 */}
                  <tr>
                    <th>{index + 1}</th>
                    <td>
                      <div className="font-semibold text-lg">
                        {service.name}
                      </div>
                    </td>
                    <td className="font-semibold">{service.service_name}</td>
                    <td className="font-semibold flex items-center gap-1">
                      {service.amount} tk
                    </td>
                    <th className="">
                      <button
                        onClick={() => handleDeletePost(service._id)}
                        className="btn btn-ghost btn-xs mr-2 border border-purple-500 text-purple-700"
                      >
                        Delete
                      </button>
                      <button
                        onClick={() =>
                          navigate(`/update-service/${service._id}`)
                        }
                        className="btn btn-ghost btn-xs border border-purple-500 text-purple-700"
                      >
                        Update
                      </button>
                    </th>
                  </tr>
                </tbody>
              ))}
            </table>
          </div>
        </div>
      )}
    </div>
  );
};

export default MyService;
