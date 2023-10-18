import { renderHookWithProviders } from "utils/testUtils";
import useControlMap from "../hooks/useControlMap";
import { setDistance, setMarkers } from "redux/slices/paths/pathsSlice";
import { LeafletMouseEvent } from "leaflet";
import { IMarker } from "types";
import * as reduxHooks from "redux/hooks";
import * as calculateDistance from "utils/calculateDistance";

const distance = 100;
const markers: IMarker[] = [
  [0, 0],
  [1, 1],
];

const mockUseAppSelector = jest.spyOn(reduxHooks, "useAppSelector");
const mockUseAppDispatch = jest.spyOn(reduxHooks, "useAppDispatch");
const mockCalculateDistance = jest.spyOn(
  calculateDistance,
  "calculateDistance"
);

const dispatch = jest.fn();
mockUseAppDispatch.mockReturnValue(dispatch);

describe("useControlMap", () => {
  it("should call setDistance with 0 when there are fewer than 2 markers", () => {
    const selectMarkers = jest.fn(() => []);
    mockUseAppSelector.mockImplementation(selectMarkers);

    const { result } = renderHookWithProviders(useControlMap);
    const { updateDistance } = result.current;

    updateDistance([]);

    expect(dispatch).toHaveBeenCalledWith(setDistance(0));
  });
  it("should call setDistance with the calculated distance when there are 2 or more markers", () => {
    mockCalculateDistance.mockReturnValue(distance);
    const { result } = renderHookWithProviders(useControlMap);
    const { updateDistance } = result.current;

    updateDistance(markers);
    expect(dispatch).toHaveBeenCalledWith(setDistance(distance));
  });

  it("should add a marker and update distance onMarkerAdd", () => {
    mockUseAppSelector.mockReturnValue([]);

    const { result } = renderHookWithProviders(useControlMap);
    const { onMarkerAdd } = result.current;
    const latlng = { lat: 0, lng: 0 };

    onMarkerAdd({ latlng } as LeafletMouseEvent);

    expect(dispatch).toHaveBeenCalledWith(setMarkers([[0, 0]]));
    expect(dispatch).toHaveBeenCalledWith(setDistance(0));
  });

  it("should remove a marker and update distance removeMarker", () => {
    mockUseAppSelector.mockReturnValue(markers);

    const { result } = renderHookWithProviders(useControlMap);
    const { removeMarker } = result.current;
    const latlng = { lat: 0, lng: 0 };

    removeMarker({ latlng } as LeafletMouseEvent);

    expect(dispatch).toHaveBeenCalledWith(setMarkers([[1, 1]]));
    expect(dispatch).toHaveBeenCalledWith(setDistance(0));
  });
});
