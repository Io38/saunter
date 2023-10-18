import styled from "@emotion/styled";
import { Stack } from "@mui/material";
import Close from "@mui/icons-material/Close";

export const Container = styled(Stack)({
  position: "absolute",
  width: "calc(100% - 20px)",
  height: "calc(100% - 40px)",
  backgroundColor: "#fff",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  borderRadius: "4px",
  gap: "10px",
});

export const Title = styled(Stack)({
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "10px 20px 0 20px",
});

export const CloseIcon = styled(Close)({
  cursor: "pointer",
});
