import { Button, Stack, TextField } from "@mui/material";
import styled from "styled-components";

export const FormContainer = styled(Stack)({
  justifyContent: "space-between",
  height: "85%",
});

export const FieldsContainer = styled(Stack)({
  paddingLeft: "20px",
  gap: "10px",
  "@media(max-width: 700px)": {
    paddingLeft: 0,
  },
});

export const FormItem = styled(Stack)({
  padding: "0 20px",
  gap: "6px",
});

export const SubmitButton = styled(Button)({
  margin: "0 auto",
});

export const ShortDescriptionInput = styled(TextField)({
  "& .MuiFormHelperText-root": {
    textAlign: "right",
    fontSize: 6,
  },
});

export const ButtonContainer = styled(Stack)({
  gap: "60px",
  alignItems: "center",
  "@media(max-width: 700px)": {
    gap: "20px",
    paddingBottom: "20px",
  },
});
