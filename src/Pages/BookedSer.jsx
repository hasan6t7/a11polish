import React, { Suspense, useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { bookPromise } from "../api/bookPromise";
import MyBookedSer from "./MyBookedSer";
import Loader from "../Components/Loader";

const BookedSer = () => {
  const { user } = useContext(AuthContext);
  if (!user) {
    return;
  }

  return (
    <div>
      <Suspense
        fallback={
          <div className="flex justify-center items-center mx-auto min-h-screen">
            <span className=" loading loading-bars loading-xl"></span>
          </div>
        }
      >
        <MyBookedSer
          bookPromise={bookPromise(user?.email, user?.accessToken)}
        ></MyBookedSer>
      </Suspense>
    </div>
  );
};

export default BookedSer;
