import { AlertColor } from "@mui/material";

export interface SnackbarState {
  type: AlertColor;
  message: string | null;
}

export interface SetSnackbarPayload {
  type: AlertColor;
  message: string | null;
}
