import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "redux/store";
import { SetSnackbarPayload, SnackbarState } from "./types";

const initialState: SnackbarState = {
  type: "success",
  message: null,
};

export const counterSlice = createSlice({
  name: "snackbar",
  initialState,
  reducers: {
    setSnackbar: (state, action: PayloadAction<SetSnackbarPayload>) => {
      const { message, type } = action.payload;
      state.type = type;
      state.message = message;
    },
    clearSnackbar: (state) => {
      state.message = null;
      state.type = "success";
    },
  },
});

export const { setSnackbar, clearSnackbar } = counterSlice.actions;

export const selectSnackbar = (state: RootState) => state.snackbar;

export default counterSlice.reducer;
