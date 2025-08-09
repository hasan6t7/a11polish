import React from "react";
import { Slide } from "react-awesome-reveal";
import { Helmet } from "react-helmet";
import { useLoaderData, useNavigate } from "react-router";
import { toast } from "react-toastify";
import Swal from "sweetalert2";

const UpdateService = () => {
  const navigate = useNavigate();
  const service = useLoaderData();
  const {
    description,
    service_area,
    amount,
    service_name,
    service_photo,
    provider_email,
    provider_photo,
    name,
    _id,
  } = service;
  const handleUpdatePost = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const updateService = Object.fromEntries(formData.entries());

    fetch(`https://e-services-server.vercel.app/services/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updateService),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Service updated successfully",
            showConfirmButton: false,
            timer: 1500,
          });
          navigate("/manage-services");
        }
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };
  return (
    <div className="p-5 lg:p-24">
      <Helmet>
        <meta charSet="utf-8" />
        <title> Update Services </title>
        <link rel="canonical" />
      </Helmet>
      <div className="p-12 text-center space-y-4">
        <h1 className="text-5xl font-semibold text-purple-700">
          <Slide triggerOnce>
            <p> Update Services</p>
          </Slide>
        </h1>
      </div>
      <form onSubmit={handleUpdatePost}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">
            <label className="label">Provider Name</label>
            <input
              type="text"
              name="name"
              value={name}
              readOnly
              className="input w-full"
              placeholder="Provider Name"
            />
          </fieldset>
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">
            <label className="label">Provider Photo Url</label>
            <input
              type="text"
              value={provider_photo}
              name="provider_photo"
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
              value={provider_email}
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
              defaultValue={service_photo}
              className="input w-full"
              placeholder="Service Photo URL"
            />
          </fieldset>
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">
            <label className="label">Service Name</label>
            <input
              type="text"
              name="service_name"
              defaultValue={service_name}
              className="input w-full"
              placeholder="Service Name"
            />
          </fieldset>
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">
            <label className="label">Amount</label>
            <input
              type="number"
              defaultValue={amount}
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
            defaultValue={service_area}
            name="service_area"
            className="input w-full"
            placeholder="Service Area"
          />
        </fieldset>

        <fieldset className="fieldset my-6 bg-base-200 border-base-300 rounded-box  border p-4">
          <textarea
            name="description"
            className="textarea w-full"
            defaultValue={description}
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

export default UpdateService;
