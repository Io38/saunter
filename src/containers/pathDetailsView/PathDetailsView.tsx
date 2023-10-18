import { Box } from "@mui/material";
import { PathDetails } from "components/pathDetails";
import { PATH_DETAILS_VIEW_TEST_ID } from "constants/testIds";

const PathDetailsView = () => {
  return (
    <Box flex={3} data-testid={PATH_DETAILS_VIEW_TEST_ID}>
      <PathDetails />
    </Box>
  );
};

export default PathDetailsView;
