import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

import App from "../App";
import Home from "../pages/Home";
import Error from "../pages/error/Error";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index={true} element={<Home />} />
      <Route path="*" element={<Error />} />
    </Route>
  )
);

function WebRoutes() {
  return <RouterProvider router={router} />;
}

export default WebRoutes;
