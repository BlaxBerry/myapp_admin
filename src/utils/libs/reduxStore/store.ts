import { configureStore } from "@reduxjs/toolkit";
import { adminLayoutReducer } from "./slices/adminLayout";

export const store = configureStore({
  reducer: {
    adminLayout: adminLayoutReducer,
  },
});
