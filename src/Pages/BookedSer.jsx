import React, { Suspense, useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { bookPromise } from "../api/bookPromise";
import MyBookedSer from "./MyBookedSer";

const BookedSer = () => {
  const { user } = useContext(AuthContext);
  if (!user) {
    return;
  }

  return (
    <div>
      <Suspense fallback={"Loading..."}>
        <MyBookedSer
          bookPromise={bookPromise(user?.email, user?.accessToken)}
        ></MyBookedSer>
      </Suspense>
    </div>
  );
};

export default BookedSer;
