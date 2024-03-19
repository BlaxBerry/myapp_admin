import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

export type AdminLayoutSliceState = {
  globalErrors: Array<{
    id: string;
    errorName: string;
    errorMessage: string;
  }>;
};

export const adminLayoutSliceState: AdminLayoutSliceState = {
  globalErrors: [],
};

const adminLayoutSlice = createSlice({
  name: "adminLayout",
  initialState: adminLayoutSliceState,
  reducers: {
    updateGlobalErrors: (
      state: AdminLayoutSliceState,
      action: PayloadAction<AdminLayoutSliceState["globalErrors"][number]>,
    ) => {
      const isExist = state.globalErrors.find(
        (item) => item.id === action.payload.id,
      );
      if (!isExist) {
        state.globalErrors = [...state.globalErrors, action.payload];
      }
    },

    clearGlobalErrorById: (
      state: AdminLayoutSliceState,
      action: PayloadAction<
        Pick<AdminLayoutSliceState["globalErrors"][number], "id">
      >,
    ) => {
      state.globalErrors = state.globalErrors.filter(
        (item) => item.id !== action.payload.id,
      );
    },
  },
});

export const adminLayoutReducer = adminLayoutSlice.reducer;
export const adminLayoutActions = adminLayoutSlice.actions;
