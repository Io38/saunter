import { LeafletMouseEvent } from "leaflet";
import { useAppDispatch, useAppSelector } from "redux/hooks";
import {
  selectMarkers,
  setDistance,
  setMarkers,
} from "redux/slices/paths/pathsSlice";
import { IMarker } from "types";
import { calculateDistance } from "utils/calculateDistance";

const useControlMap = () => {
  const markers = useAppSelector(selectMarkers);
  const dispatch = useAppDispatch();

  const updateDistance = (markers: IMarker[]) => {
    if (markers.length < 2) {
      dispatch(setDistance(0));
      return;
    }
    const distance = calculateDistance(markers);
    dispatch(setDistance(distance));
  };

  const onMarkerAdd = (e: LeafletMouseEvent) => {
    const newMarker: IMarker = [e.latlng.lat, e.latlng.lng];
    const newMarkers = [...markers, newMarker];
    dispatch(setMarkers(newMarkers));
    updateDistance(newMarkers);
  };

  const removeMarker = ({ latlng: { lat, lng } }: LeafletMouseEvent) => {
    const removingMarker = [lat, lng];
    const newMarkers = markers.filter(
      (marker) => JSON.stringify(marker) !== JSON.stringify(removingMarker)
    );
    dispatch(setMarkers(newMarkers));
    updateDistance(newMarkers);
  };

  const markerEventHandler = {
    click: removeMarker,
  };

  return {
    onMarkerAdd,
    updateDistance,
    removeMarker,
    markerEventHandler,
  };
};

export default useControlMap;
