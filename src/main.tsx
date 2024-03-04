import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";

import { AdminThemeProvider } from "./components/providers";
import { router } from "./utils/router";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity,
    },
  },
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <AdminThemeProvider>
        <RouterProvider router={router} />
      </AdminThemeProvider>
    </QueryClientProvider>
  </React.StrictMode>,
);
