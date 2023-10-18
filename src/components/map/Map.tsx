import { TITLE_LAYER_URL } from "constants/constants";
import { MapContainer, Marker, Polyline, TileLayer } from "react-leaflet";
import { MapProps } from "./types";
import "./styles/index.css";

const Map = ({
  mapContainerProps,
  markers,
  markerEventHandler,
  children,
}: MapProps) => {
  return (
    <MapContainer zoom={13} {...mapContainerProps}>
      <TileLayer url={TITLE_LAYER_URL} />
      {children}
      {markers.map((position, index) => (
        <Marker
          key={index}
          position={position}
          eventHandlers={markerEventHandler}
        />
      ))}
      {markers.length >= 2 && (
        <Polyline pathOptions={{ color: "red" }} positions={markers} />
      )}
    </MapContainer>
  );
};

export default Map;
