import { PathsState } from "redux/slices/paths/types";
import { SnackbarState } from "redux/slices/snackbar/types";

export interface RootState {
  paths: PathsState;
  snackbar: SnackbarState;
}

export type IMarker = [number, number];

export interface IPath {
  title: string;
  shortDescription: string;
  fullDescription: string;
  isFavorite: boolean;
  distance: number;
  id: string;
  markers: IMarker[];
}
