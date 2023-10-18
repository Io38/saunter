import L from "leaflet";
import { IMarker } from "types";

export const calculateDistance = (markers: IMarker[]) => {
  const distance = markers
    .slice(0, -1)
    .reduce((totalDistance, marker, index) => {
      const from = L.latLng(marker);
      const to = L.latLng(markers[index + 1]);
      return totalDistance + from.distanceTo(to);
    }, 0);

  return distance;
};
