import React, { use } from "react";
import { Slide } from "react-awesome-reveal";

const MyBookedSer = ({ bookPromise }) => {
  const bookedData = use(bookPromise);
  console.log(bookedData);

  return (
    <div className="my-20">
      <h1 className="text-4xl text-center font-bold text-purple-700 mb-16">
        <Slide delay={500} triggerOnce>
          <p> My Booked List</p>
        </Slide>
      </h1>
      {bookedData.length > 0 ? (
        <>
          <div className="overflow-x-auto">
            <table className="table">
              {/* head */}
              <thead>
                <tr>
                  <th>No</th>
                  <th>Provider Name Name</th>
                  <th>Service Name</th>
                  <th>Service Amount</th>
                  <th>Service Status</th>
                </tr>
              </thead>
              {bookedData.map((booked, index) => (
                <tbody key={index}>
                  {/* row 1 */}
                  <tr>
                    <th>{index + 1}</th>
                    <td>
                      <div className="font-semibold text-lg">{booked.name}</div>
                    </td>
                    <td className="font-semibold">{booked.service_name}</td>
                    <td className="font-semibold flex items-center gap-1">
                      {booked.amount} tk
                    </td>
                    <th className="">{booked.serviceStatus}</th>
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

export default MyBookedSer;
