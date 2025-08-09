import { createBrowserRouter } from "react-router";
import Root from "../Layouts/Root";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import AddServices from "../Pages/AddServices";
import AllServices from "../Pages/AllServices";
import ServiceDetails from "../Pages/ServiceDetails";
import BookService from "../Pages/BookService";
import ManageService from "../Pages/ManageService";
import UpdateService from "../Pages/UpdateService";
import BookedSer from "../Pages/BookedSer";
import BookToDo from "../Pages/BookToDo";
import PrivateRouteProvider from "../Provider/PrivateRouteProvider";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      {
        index: true,
        loader: () => fetch("https://e-services-server.vercel.app/services"),
        Component: Home,
      },
      {
        path: "/register",
        Component: Register,
      },
      {
        path: "/login",
        Component: Login,
      },
      {
        path: "/add-services",
        element: (
          <PrivateRouteProvider>
            <AddServices></AddServices>
          </PrivateRouteProvider>
        ),
      },
      {
        path: "/all-services",
        loader: () => fetch("https://e-services-server.vercel.app/services"),
        Component: AllServices,
      },
      {
        path: "/service/:id",
        loader: ({ params }) =>
          fetch(`https://e-services-server.vercel.app/services/${params.id}`),
        element: (
          <PrivateRouteProvider>
            <ServiceDetails></ServiceDetails>
          </PrivateRouteProvider>
        ),
      },
      {
        path: "/book/:id",
        loader: ({ params }) =>
          fetch(`https://e-services-server.vercel.app/services/${params.id}`),
        Component: BookService,
      },
      {
        path: "/manage-services",
        element: (
          <PrivateRouteProvider>
            <ManageService></ManageService>
          </PrivateRouteProvider>
        ),
      },
      {
        path: "/booked-services",
        element: (
          <PrivateRouteProvider>
            <BookedSer></BookedSer>
          </PrivateRouteProvider>
        ),
      },
      {
        path: "/service-to-do",
        element: (
          <PrivateRouteProvider>
            <BookToDo></BookToDo>
          </PrivateRouteProvider>
        ),
      },
      {
        path: "/update-service/:id",
        loader: ({ params }) =>
          fetch(`https://e-services-server.vercel.app/services/${params.id}`),
        element: (
          <PrivateRouteProvider>
            <UpdateService></UpdateService>
          </PrivateRouteProvider>
        ),
      },
    ],
  },
]);

export default router;
