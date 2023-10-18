import { Stack } from "@mui/material";
import styled from "styled-components";

export const Container = styled(Stack)({
  margin: "0 auto",

  padding: "0 40px 0 0",
  height: "100%",
  overflow: "scroll",
  gap: "20px",
  "@media (max-width: 700px)": {
    padding: "0 0 0 0",
  },
});

export const Title = styled(Stack)({
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
});

export const ButtonContainer = styled(Stack)({
  alignItems: "end",
  gap: "10px",
});
