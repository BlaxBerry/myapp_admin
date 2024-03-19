import { lazy } from "react";
import { Navigate, createBrowserRouter } from "react-router-dom";
import { APP_PATHS } from "./paths";

/* eslint-disable react-refresh/only-export-components */
const RootPage = lazy(() => import("@/pages/root"));
const NotFoundPage = lazy(() => import("@/pages/404"));
const AnalysisPage = lazy(() => import("@/pages/analysis"));
const ScenarioPage = lazy(() => import("@/pages/scenario"));
const ChatPage = lazy(() => import("@/pages/chat"));
const NotesPage = lazy(() => import("@/pages/notes"));

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
        path: APP_PATHS.analysis.root,
        element: <AnalysisPage />,
      },

      {
        path: APP_PATHS.scenario.root,
        element: <ScenarioPage />,
      },

      {
        path: APP_PATHS.chat.root,
        element: <ChatPage />,
      },

      {
        path: APP_PATHS.notes.root,
        element: <NotesPage />,
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
