import { Button, Stack } from "@mui/material";
import styled from "styled-components";

export const Container = styled("header")({
  display: "flex",
  justifyContent: "space-between",
  marginTop: "20px",
});

export const AddPathButton = styled(Button)({
  textTransform: "none",
});

export const Logo = styled(Stack)({
  flexDirection: "row",
  gap: "20px",
  alignItems: "center",
  justifyContent: "space-between",
  cursor: "pointer",
});
