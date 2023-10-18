import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import pathsSlice from "redux/slices/paths/pathsSlice";
import snackbarSlice from "./slices/snackbar/snackbarSlice";

export const store = configureStore({
  reducer: {
    paths: pathsSlice,
    snackbar: snackbarSlice,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
