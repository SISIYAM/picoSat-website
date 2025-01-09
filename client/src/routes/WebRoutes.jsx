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
import EpsTeam from "../pages/team/EpsTeam";
import GroundStationTeam from "../pages/team/GroundStationTeam";
import MechanicalTeam from "../pages/team/MechanicalTeam";
import CcnTeam from "../pages/team/CcnTeam";

import PublicationDetails from "../pages/publications/PublicationDetails";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index={true} element={<Home />} />
      <Route path="team/:id" element={<TeamDetails />} />
      <Route path="publication/details" element={<PublicationDetails />} />
      <Route path="*" element={<Error />} />
    </Route>
  )
);

function WebRoutes() {
  return <RouterProvider router={router} />;
}

export default WebRoutes;
