import React from "react";
import ControlMap from "./ControlMap";
import { useAppSelector } from "redux/hooks";
import { selectMarkers } from "redux/slices/paths/pathsSlice";
import { Typography } from "@mui/material";
import { texts } from "constants/texts";
import * as Styled from "./AddPathMap.styled";
import useControlMap from "./hooks/useControlMap";
import { DNIPRO_CORDS } from "constants/constants";
import { Map } from "components/map";

const AddPathMap: React.FC = () => {
  const markers = useAppSelector(selectMarkers);
  const { markerEventHandler } = useControlMap();

  return (
    <Styled.Container>
      <Typography variant="h4">{texts.clickToAddMarker}</Typography>
      <Map
        mapContainerProps={{ center: DNIPRO_CORDS, className: "add-path-map" }}
        markers={markers}
        markerEventHandler={markerEventHandler}
      >
        <ControlMap />
      </Map>
    </Styled.Container>
  );
};

export default AddPathMap;
