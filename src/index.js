import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom";
import Root from "./routes/root";
import ErrorPage from "./ErrorPage";
import WorkoutPlan from "./WorkoutPlan/WorkoutPlan";
import ProteinGuide from "./ProteinGuide/ProteinGuide";
import General from "./general/General";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
  },
  {
    path: "workoutPlan",
    element: <WorkoutPlan />,
  },
  {
    path: "proteinGuide",
    element: <ProteinGuide />,
  },
  {
    path: "general",
    element: <General />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
