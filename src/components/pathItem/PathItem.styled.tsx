import { Stack } from "@mui/material";
import styled from "styled-components";

export const Container = styled(Stack)({
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-evenly",
  borderRadius: 4,
  padding: "10px 0",
  cursor: "pointer",
});

export const Description = styled.div`
  overflow: hidden;
  position: relative;
  display: -webkit-box;
  word-break: break-all;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;

export const Title = styled(Stack)({
  flexDirection: "row",
  gap: "4px",
  textAlign: "center",
  alignItems: "center",
});

export const LogoContainer = styled(Stack)({
  justifyContent: "center",
  alignItems: "center",
  padding: "0 4px",
});
