import React, { Suspense, useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { bookToDoPromise } from "../api/bookToDoPromise";
import MyBookToDo from "./MyBookToDo";

const BookToDo = () => {
  const { user } = useContext(AuthContext);
  if (!user) {
    return;
  }

  return (
    <div>
      <Suspense fallback={"Loading..."}>
        <MyBookToDo
          bookToDoPromise={bookToDoPromise(user?.email, user?.accessToken)}
        ></MyBookToDo>
      </Suspense>
    </div>
  );
};

export default BookToDo;
