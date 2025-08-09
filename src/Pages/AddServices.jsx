import React, { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Helmet } from "react-helmet";
import { Slide } from "react-awesome-reveal";
import Swal from "sweetalert2";
import axios from "axios";

const AddServices = () => {
  const { user } = useContext(AuthContext);

  const handleAddServices = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const newAddServices = Object.fromEntries(formData.entries());
    console.log(newAddServices);

    axios
      .post("https://e-services-server.vercel.app/services", newAddServices)
      .then((res) => {
        if (res.data.insertedId) {
          Swal.fire({
            title: `${form.name.value} added successfully!`,
            icon: "success",
            draggable: true,
          });
        }
      })
      .catch((error) => {
        console.log(error);
      });

  
  };
  return (
    <div className="p-5 lg:p-24">
      <Helmet>
        <meta charSet="utf-8" />
        <title> Add a Services </title>
        <link rel="canonical" />
      </Helmet>
      <div className="p-12 text-center space-y-4">
        <h1 className="text-5xl font-semibold text-purple-700">
          <Slide triggerOnce>
            <p> Add a Services</p>
          </Slide>
        </h1>
      </div>
      <form onSubmit={handleAddServices}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">
            <label className="label">Provider Name</label>
            <input
              type="text"
              name="name"
              value={user?.displayName}
              readOnly
              className="input w-full"
              placeholder="Provider Name"
            />
          </fieldset>
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">
            <label className="label">Provider Photo Url</label>
            <input
              type="text"
              name="provider_photo"
              value={user?.photoURL}
              readOnly
              className="input w-full"
              placeholder="Provider Photo URL"
            />
          </fieldset>

          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">
            <label className="label">Provider Email</label>
            <input
              type="text"
              name="provider_email"
              value={user?.email}
              readOnly
              className="input w-full"
              placeholder="Provider Email "
            />
          </fieldset>
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">
            <label className="label">Image URL of the Service </label>
            <input
              type="text"
              name="service_photo"
              className="input w-full"
              placeholder="Service Photo URL"
            />
          </fieldset>
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">
            <label className="label">Service Name</label>
            <input
              type="text"
              name="service_name"
              className="input w-full"
              placeholder="Service Name"
            />
          </fieldset>
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">
            <label className="label">Amount</label>
            <input
              type="number"
              name="amount"
              className="input w-full"
              placeholder="Service Amount"
            />
          </fieldset>
        </div>
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">
          <label className="label">Service Area</label>
          <input
            type="text"
            name="service_area"
            className="input w-full"
            placeholder="Service Area"
          />
        </fieldset>

        <fieldset className="fieldset my-6 bg-base-200 border-base-300 rounded-box  border p-4">
          <textarea
            name="description"
            className="textarea w-full"
            placeholder="Description"
          ></textarea>
        </fieldset>
        <input
          type="submit"
          className="btn w-full bg-gradient-to-r from-purple-600 to-purple-800 hover:from-purple-800 hover:to-purple-600 text-white"
          value=" Add a Services"
        />
      </form>
    </div>
  );
};

export default AddServices;
