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
import TeamDetails from "../pages/team/TeamDetails";

import PublicationDetails from "../pages/publications/PublicationDetails";
import ImageGallery from "../components/ImageGallery";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index={true} element={<Home />} />
      <Route path="gallery" element={<ImageGallery />} />
      <Route path="team/:teamName/:id" element={<TeamDetails />} />
      <Route path="publication/details" element={<PublicationDetails />} />
      <Route path="*" element={<Error />} />
    </Route>
  )
);

function WebRoutes() {
  return <RouterProvider router={router} />;
}

export default WebRoutes;
