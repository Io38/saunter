import { Divider, Stack } from "@mui/material";
import { PathListView } from "containers/pathListView";
import { PathDetailsView } from "containers/pathDetailsView";

const Home = () => {
  return (
    <Stack direction="row" height="100%">
      <PathListView />
      <Stack width="40px">
        <Divider orientation="vertical" sx={{ margin: "0 auto" }} />
      </Stack>
      <PathDetailsView />
    </Stack>
  );
};

export default Home;
