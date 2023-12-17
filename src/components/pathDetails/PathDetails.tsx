import { Button, Typography } from "@mui/material";
import * as Styled from "./PathDetails.styled";
import { formatDistance } from "utils/formatDistance";
import { texts } from "constants/texts";
import usePathDetails from "./hooks/usePathDetails";
import { PathDetailsMap } from "components/pathDetailsMap";
import { SelectPathView } from "components/selectPathView";

const PathDetails = () => {
  const { currentPath, removePath, addToFavorites, removeFromFavorites } =
    usePathDetails();

  const FavoritesButton = () => {
    if (currentPath?.isFavorite) {
      return (
        <Button variant="contained" onClick={removeFromFavorites}>
          {texts.removeFromFavorites}
        </Button>
      );
    }
    return (
      <Button variant="contained" onClick={addToFavorites}>
        {texts.addToFavorites}
      </Button>
    );
  };

  if (!currentPath) return <SelectPathView />;

  return (
    <Styled.Container>
      <Styled.Title>
        <Typography variant="body2">{currentPath.title}</Typography>
        <Typography variant="h2">
          {formatDistance(currentPath.distance)}
        </Typography>
      </Styled.Title>
      <Typography variant="h3">{currentPath.fullDescription}</Typography>
      <PathDetailsMap markers={currentPath.markers} />
      <Styled.ButtonContainer>
        <FavoritesButton />
        <Button variant="outlined" color="error" onClick={removePath}>
          {texts.remove}
        </Button>
      </Styled.ButtonContainer>
    </Styled.Container>
  );
};
export default PathDetails;
