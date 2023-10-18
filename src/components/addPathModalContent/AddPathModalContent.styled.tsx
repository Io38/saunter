import { Stack } from "@mui/material";
import styled from "styled-components";

export const Content = styled(Stack)({
  flexDirection: "row",
  height: "100%",
  overflow: "scroll",
});

export const NewPathDetails = styled(Stack)({
  flex: 1,
  flexDirection: "column",
  marginBottom: "20px",
  gap: "20px",
});
