import axios from "axios";
import React, { use } from "react";
import { Slide } from "react-awesome-reveal";
import Swal from "sweetalert2";

const MyBookToDo = ({ bookToDoPromise }) => {
  const bookedToDoData = use(bookToDoPromise);
  //   console.log(bookedData);
  const handleStatusChange = (e, id) => {
    console.log(e.target.value , id);
    axios
      .patch(`https://e-services-server.vercel.app/booked/${id}`, {
        serviceStatus: e.target.value,
      })
      .then((res) => {
        console.log("patch res " , res.data);
        if (res.data.modifiedCount) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Status updated successfully",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  return (
    <div className="my-20">
      <h1 className="text-4xl text-center font-bold text-purple-700 mb-16">
        <Slide delay={500} triggerOnce>
          <p> My Booked List</p>
        </Slide>
      </h1>
      {bookedToDoData.length > 0 ? (
        <>
          <div className="overflow-x-auto">
            <table className="table">
              {/* head */}
              <thead>
                <tr>
                  <th>No</th>
                  <th>User Email</th>
                  <th>Service Name</th>
                  <th>Service Amount</th>
                  <th>Service Status</th>
                </tr>
              </thead>
              {bookedToDoData.map((booked, index) => (
                <tbody key={index}>
                  {/* row 1 */}
                  <tr>
                    <th>{index + 1}</th>
                    <td>
                      <div className="font-semibold text-lg">
                        {booked.user_email}
                      </div>
                    </td>
                    <td className="font-semibold">{booked.service_name}</td>
                    <td className="font-semibold flex items-center gap-1">
                      {booked.amount} tk
                    </td>
                    <th className="">
                      <select
                        onChange={(e) => handleStatusChange(e, booked._id)}
                        defaultValue={booked.serviceStatus}
                        className="select"
                      >
                        <option disabled={true}>Update Status</option>
                        <option value={"Pending"}>Pending</option>
                        <option value={"Working"}>Working</option>
                        <option value={"Completed"}>Completed</option>
                      </select>
                    </th>
                  </tr>
                </tbody>
              ))}
            </table>
          </div>
        </>
      ) : (
        <>
          <div>
            <h1 className="text-3xl text-center font-bold ">No Data Found</h1>
          </div>
        </>
      )}
    </div>
  );
};

export default MyBookToDo;
