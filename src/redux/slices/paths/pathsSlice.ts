import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from "redux/store";
import { IMarker, IPath } from "types";
import { PathsState } from "./types";
import pathsService from "services/pathsService";

const initialState: PathsState = {
  paths: [],
  newPath: {
    distance: 0,
    markers: [],
  },
};

export const getPaths = createAsyncThunk("paths/getAll", async () => {
  const res = await pathsService.getPaths();
  return res;
});

export const updatePath = createAsyncThunk(
  "paths/updatePath",
  async (path: IPath) => {
    await pathsService.updatePath(path);
    return path;
  }
);

export const deletePath = createAsyncThunk(
  "paths/removePath",
  async (id: string) => {
    await pathsService.deletePath(id);
    return id;
  }
);

export const counterSlice = createSlice({
  name: "paths",
  initialState,
  reducers: {
    setDistance: (state, action: PayloadAction<number>) => {
      state.newPath.distance = action.payload;
    },
    setMarkers: (state, action: PayloadAction<IMarker[]>) => {
      state.newPath.markers = action.payload;
    },
    clearNewPath: (state) => {
      state.newPath = {
        distance: 0,
        markers: [],
      };
    },
  },

  extraReducers: (builder) => {
    builder.addCase(getPaths.fulfilled, (state, action) => {
      state.paths = action.payload as IPath[];
    });
    builder.addCase(updatePath.fulfilled, (state, action) => {
      const { id } = action.payload;
      const existingPath = state.paths.find((path) => path.id === id);
      existingPath && Object.assign(existingPath, action.payload);
    });
    builder.addCase(deletePath.fulfilled, (state, action) => {
      const idToDelete = action.payload;
      state.paths = state.paths.filter((path) => path.id !== idToDelete);
    });
  },
});

export const { setDistance, clearNewPath, setMarkers } = counterSlice.actions;

export const selectAllPaths = (state: RootState) => state.paths.paths;
export const selectDistance = (state: RootState) =>
  state.paths.newPath.distance;
export const selectMarkers = (state: RootState) => state.paths.newPath.markers;

export default counterSlice.reducer;
