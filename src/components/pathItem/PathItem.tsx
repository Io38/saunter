import { Stack, Typography } from "@mui/material";
import { IPath } from "types";
import * as Styled from "./PathItem.styled";
import { Logo } from "components/logo";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import StarIcon from "@mui/icons-material/Star";
import { ROUTE_DETAILS } from "containers/navigation/routes";
import { useNavigate, useParams } from "react-router-dom";
import { formatDistance } from "utils/formatDistance";
import { STAR_ICON_TEST_ID } from "constants/testIds";

const PathItem = ({
  shortDescription,
  distance,
  isFavorite,
  title,
  id,
}: IPath) => {
  const navigate = useNavigate();
  const { id: detailsId } = useParams();

  const handlePathClick = () => {
    const detailsPage = ROUTE_DETAILS.replace(":id", id);

    navigate(detailsPage);
  };

  const isSelected = detailsId === id;

  return (
    <Styled.Container
      key={title}
      sx={{
        backgroundColor: isSelected ? "primary.main" : "background.paper",
        color: isSelected ? "#fff" : "text.primary",
      }}
      onClick={handlePathClick}
    >
      <Styled.LogoContainer flex={1}>
        <Logo />
      </Styled.LogoContainer>
      <Stack flex={8}>
        <Styled.Description>
          <Styled.Title>
            {isFavorite && (
              <StarIcon fontSize="small" data-testid={STAR_ICON_TEST_ID} />
            )}
            <Typography variant="h2">{title}</Typography>
          </Styled.Title>
          <Typography variant="body1" minHeight="2em">
            {shortDescription}
          </Typography>
        </Styled.Description>
      </Stack>
      <Stack flex={2} alignItems="center" justifyContent="center">
        <Typography variant="h2">{formatDistance(distance)}</Typography>
      </Stack>
      <Stack flex={1} alignItems="end" justifyContent="center">
        <NavigateNextIcon fontSize="large" />
      </Stack>
    </Styled.Container>
  );
};

export default PathItem;
