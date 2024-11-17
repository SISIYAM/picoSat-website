import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import WebRoutes from "./routes/WebRoutes";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <WebRoutes />
  </StrictMode>
);
