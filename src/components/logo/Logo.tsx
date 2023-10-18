import ZoomOutMapIcon from "@mui/icons-material/ZoomOutMap";
import { LOGO_TEST_ID } from "constants/testIds";
import { SvgIconOwnProps } from "@mui/material";

const Logo = (props: SvgIconOwnProps) => {
  return (
    <ZoomOutMapIcon fontSize="large" {...props} data-testid={LOGO_TEST_ID} />
  );
  // return <ZoomOutMapIcon fontSize="large" sx={sx} data-testid={LOGO_TEST_ID} />;
};

export default Logo;
