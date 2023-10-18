import { useMap } from "react-leaflet";
import { MapControlProps } from "../map/types";
import { DNIPRO_CORDS } from "constants/constants";

const MapControl = ({ center }: MapControlProps) => {
  const map = useMap();
  const centerCoords = center || DNIPRO_CORDS;
  map.setView(centerCoords, map.getZoom());

  return null;
};

export default MapControl;
