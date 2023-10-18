import { IPath } from "types";
import { PathListProps } from "./types";
import { Box, Stack } from "@mui/material";
import { PathItem } from "components/pathItem";
import { texts } from "constants/texts";
import { PATH_LIST_CONTAINER_TEST_ID } from "constants/testIds";

const PathList = ({ paths }: PathListProps) => {
  const renderPathsItem = (path: IPath) => <PathItem {...path} key={path.id} />;

  if (!paths.length) return <Box>{texts.noItemsFound}</Box>;

  return (
    <Stack gap="8px" overflow="auto" data-testid={PATH_LIST_CONTAINER_TEST_ID}>
      {paths.map(renderPathsItem)}
    </Stack>
  );
};

export default PathList;
