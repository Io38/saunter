import { LatLngExpression, LeafletEventHandlerFnMap } from "leaflet";
import { PropsWithChildren } from "react";
import { MapContainerProps } from "react-leaflet";
import { IMarker } from "types";

export interface MapControlProps {
  center: LatLngExpression;
}

export interface MapProps extends PropsWithChildren {
  mapContainerProps?: MapContainerProps;
  markers: IMarker[];
  markerEventHandler?: LeafletEventHandlerFnMap;
}
