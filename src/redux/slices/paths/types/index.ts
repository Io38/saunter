import { IMarker, IPath } from "types";

export interface PathsState {
  paths: IPath[];
  newPath: {
    distance: number;
    markers: IMarker[];
  };
}
