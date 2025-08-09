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
      
      <Suspense fallback={"Loading..."}>
        <MyService servicePromise={servicePromise(user?.email)}></MyService>
      </Suspense>
    </div>
  );
};

export default ManageService;
