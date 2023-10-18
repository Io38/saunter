import {
  Alert,
  Typography,
  Snackbar as MuiSnackbar,
  IconButtonProps,
} from "@mui/material";
import { CLOSE_ICON_TEST_ID } from "constants/testIds";
import { useAppDispatch, useAppSelector } from "redux/hooks";
import {
  clearSnackbar,
  selectSnackbar,
} from "redux/slices/snackbar/snackbarSlice";

const Snackbar = () => {
  const dispatch = useAppDispatch();

  const { message, type } = useAppSelector(selectSnackbar);

  function handleClose() {
    dispatch(clearSnackbar());
  }

  return (
    <MuiSnackbar
      open={!!message}
      autoHideDuration={3000}
      onClose={handleClose}
      anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
    >
      <Alert
        onClose={handleClose}
        severity={type}
        sx={{ width: "100%" }}
        slotProps={{
          closeButton: {
            "data-testid": CLOSE_ICON_TEST_ID,
          } as IconButtonProps,
        }}
      >
        <Typography>{message}</Typography>
      </Alert>
    </MuiSnackbar>
  );
};

export default Snackbar;
