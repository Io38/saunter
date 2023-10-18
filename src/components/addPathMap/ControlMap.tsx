import { useMapEvents } from "react-leaflet";
import useControlMap from "./hooks/useControlMap";

const ControlMap = () => {
  const { onMarkerAdd } = useControlMap();

  useMapEvents({
    click: onMarkerAdd,
  });

  return null;
};

export default ControlMap;
