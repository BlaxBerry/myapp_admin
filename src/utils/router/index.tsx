import { lazy } from "react";
import { Navigate, createBrowserRouter } from "react-router-dom";

/* eslint-disable react-refresh/only-export-components */
const RootPage = lazy(() => import("@/pages/root"));
const NotFoundPage = lazy(() => import("@/pages/404"));
const AnalysisPage = lazy(() => import("@/pages/analysis"));
const ScenarioPage = lazy(() => import("@/pages/scenario"));

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootPage />,
    children: [
      {
        index: true,
        element: <AnalysisPage />,
      },

      {
        path: "analysis",
        element: <AnalysisPage />,
      },

      {
        path: "scenario",
        element: <ScenarioPage />,
      },

      {
        path: "404",
        element: <NotFoundPage />,
      },

      {
        path: "*",
        element: <Navigate to="/404" replace />,
      },
    ],
  },
]);
