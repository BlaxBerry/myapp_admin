import { QueryClientProvider } from "@tanstack/react-query";
import React from "react";
import ReactDOM from "react-dom/client";
import { Provider as StoreProvider } from "react-redux";
import { RouterProvider } from "react-router-dom";

import "./styles/index.css";

import { router } from "./router";
import "./utils/libs/reactI18n";
import { queryClient } from "./utils/libs/reactQueryClient";
import { store } from "./utils/libs/reduxStore/store";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <StoreProvider store={store}>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </StoreProvider>
  </React.StrictMode>,
);
