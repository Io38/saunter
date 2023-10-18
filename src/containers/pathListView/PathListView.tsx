import { InputAdornment, TextField } from "@mui/material";
import * as Styled from "./PathListView.styled";
import { PathList } from "components/pathList";
import { useAppSelector } from "redux/hooks";
import { selectAllPaths } from "redux/slices/paths/pathsSlice";
import { usePathsSearch } from "hooks/usePathsSearch";
import { sortByIsFavorite } from "./utils/sortByIsFavorite";
import SearchIcon from "@mui/icons-material/Search";

const PathListView = () => {
  const paths = useAppSelector(selectAllPaths);
  const { handleSearchChange, filteredPaths } = usePathsSearch({ paths });

  return (
    <Styled.Container>
      <TextField
        placeholder="Search ..."
        fullWidth
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <SearchIcon />
            </InputAdornment>
          ),
        }}
        onChange={handleSearchChange}
      />
      <PathList paths={sortByIsFavorite(filteredPaths)} />
    </Styled.Container>
  );
};

export default PathListView;
