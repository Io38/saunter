import React from "react";
import * as Styled from "./PathDetailsMap.styled";
import { Map } from "components/map";
import MapControl from "./MapControl";
import { PathDetailsMapProps } from "./types";

const PathDetailsMap = ({ markers }: PathDetailsMapProps) => {
  const center = markers[0];

  return (
    <Styled.Container>
      <Map
        markers={markers}
        mapContainerProps={{
          className: "path-details-map",
          center: markers[0],
        }}
      >
        <MapControl center={center} />
      </Map>
    </Styled.Container>
  );
};

export default PathDetailsMap;
