import React, { useContext } from "react";
import { Slide } from "react-awesome-reveal";
import { Helmet } from "react-helmet";
import { useLoaderData } from "react-router";
import { AuthContext } from "../Provider/AuthProvider";
import axios from "axios";
import Swal from "sweetalert2";
import { toast } from "react-toastify";

const BookService = () => {
  const { user } = useContext(AuthContext);
  const bookService = useLoaderData();
  const { name, provider_email, _id, service_photo, service_name, amount } =
    bookService;

  const handleBookServices = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const newAddServices = Object.fromEntries(formData.entries());
    console.log(newAddServices);

    axios
      .post("https://e-services-server.vercel.app/booked", newAddServices)
      .then((res) => {
        if (res.data.insertedId) {
          Swal.fire({
            title: ` successfully booked!`,
            icon: "success",
            draggable: true,
          });
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
        <title> Book a Services </title>
        <link rel="canonical" />
      </Helmet>
      <div className="p-12 text-center space-y-4">
        <h1 className="text-5xl font-semibold text-purple-700">
          <Slide triggerOnce>
            <p> Book a Services</p>
          </Slide>
        </h1>
      </div>
      <form onSubmit={handleBookServices}>
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
            <label className="label">Service ID</label>
            <input
              type="text"
              name="service_id"
              value={_id}
              readOnly
              className="input w-full"
              placeholder="Service ID"
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
              readOnly
              value={service_photo}
              className="input w-full"
              placeholder="Service Photo URL"
            />
          </fieldset>
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">
            <label className="label">Service Name</label>
            <input
              type="text"
              name="service_name"
              value={service_name}
              readOnly
              className="input w-full"
              placeholder="Service Name"
            />
          </fieldset>
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">
            <label className="label">User Name</label>
            <input
              type="text"
              name="user_name"
              value={user?.displayName}
              readOnly
              className="input w-full"
              placeholder="User Name"
            />
          </fieldset>
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">
            <label className="label">User Email</label>
            <input
              type="text"
              name="user_email"
              value={user?.email}
              readOnly
              className="input w-full"
              placeholder="User Email "
            />
          </fieldset>

          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">
            <label className="label">Amount</label>
            <input
              type="number"
              name="amount"
              value={amount}
              className="input w-full"
              readOnly
              placeholder="Service Amount"
            />
          </fieldset>
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">
            <label className="label">Special Instruction</label>
            <input
              type="text"
              name="special_instruction"
              className="input w-full"
              placeholder="Special Instruction"
            />
          </fieldset>
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">
            <label className="label">Service Taking Date</label>
            <input type="date" name="service_taking_date" className="input" />
          </fieldset>
        </div>

        <input
          type="submit"
          className="btn mt-6 w-full bg-gradient-to-r from-purple-600 to-purple-800 hover:from-purple-800 hover:to-purple-600 text-white"
          value=" Book a Service"
        />
      </form>
    </div>
  );
};

export default BookService;
