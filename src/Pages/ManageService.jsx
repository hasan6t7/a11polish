import React, { Suspense, useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import MyService from "../Components/MyService";
import { servicePromise } from "../api/servicePromise";

const ManageService = () => {
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
        <MyService servicePromise={servicePromise(user?.email)}></MyService>
      </Suspense>
    </div>
  );
};

export default ManageService;
