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

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index={true} element={<Home />} />
      <Route path="team/software" element={<TeamDetails />} />
      <Route path="team/eps" element={<EpsTeam />} />
      <Route path="team/ground-station" element={<GroundStationTeam />} />
      <Route path="team/mechanical" element={<MechanicalTeam />} />
      <Route path="team/ccn" element={<CcnTeam />} />
      <Route path="*" element={<Error />} />
    </Route>
  )
);

function WebRoutes() {
  return <RouterProvider router={router} />;
}

export default WebRoutes;
