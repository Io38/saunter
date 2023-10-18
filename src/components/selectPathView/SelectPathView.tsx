import { Logo } from "components/logo";
import * as Styled from "./SelectPathView.styled";
import { Typography } from "@mui/material";
import { texts } from "constants/texts";

const SelectPathView = () => {
  return (
    <Styled.Container>
      <Logo
        sx={{
          fontSize: "160px",
        }}
      />
      <Typography variant="caption">{texts.selectAnyPath}</Typography>
    </Styled.Container>
  );
};

export default SelectPathView;
