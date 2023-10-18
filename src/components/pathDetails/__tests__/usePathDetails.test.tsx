import * as reduxHooks from "redux/hooks";
import { renderHookWithProviders } from "utils/testUtils";
import usePathDetails from "../hooks/usePathDetails";
import { IPath } from "types";

const currentPath: IPath = {
  title: "title",
  distance: 10,
  fullDescription: "fullDescription",
  markers: [],
  isFavorite: false,
  shortDescription: "shortDescription",
  id: "1",
};

const mockUseAppDispatch = jest.spyOn(reduxHooks, "useAppDispatch");

const dispatch = jest.fn();
mockUseAppDispatch.mockReturnValue(dispatch);

jest.mock("hooks/useCurrentPath/useCurrentPath", () => ({
  __esModule: true,
  default: jest.fn(() => ({ currentPath })),
}));

jest.mock("react-router-dom", () => ({
  useNavigate: () => jest.fn(),
}));

describe("usePathDetails", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });
  it("should call deletePath and setSnackbar when removePath is called", async () => {
    const { result } = renderHookWithProviders(usePathDetails);
    await result.current.removePath();
    expect(dispatch).toHaveBeenCalledTimes(2);
  });

  it("should call updatePath and setSnackbar when addToFavorites is called", () => {
    const { result } = renderHookWithProviders(usePathDetails);
    result.current.addToFavorites();
    expect(dispatch).toHaveBeenCalledTimes(2);
  });

  it("should call updatePath and setSnackbar when removeFromFavorites is called", () => {
    const { result } = renderHookWithProviders(usePathDetails);
    result.current.removeFromFavorites();
    expect(dispatch).toHaveBeenCalledTimes(2);
  });
});
