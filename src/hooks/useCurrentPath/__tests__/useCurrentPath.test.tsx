import useCurrentPath from "../useCurrentPath";
import { renderHookWithProviders } from "utils/testUtils";
import * as reduxHooks from "redux/hooks";

const pathId = "1";
const mockUseAppSelector = jest.spyOn(reduxHooks, "useAppSelector");

jest.mock("react-router-dom", () => ({
  useParams: () => ({
    id: pathId,
  }),
}));

describe("useCurrentPath", () => {
  it("should return the current path based on the URL parameter", () => {
    const paths = [
      { id: "1", title: "Path 1" },
      { id: "2", title: "Path 2" },
      { id: "3", title: "Path 3" },
    ];

    mockUseAppSelector.mockReturnValue(paths);

    const { result } = renderHookWithProviders(useCurrentPath);

    expect(result.current.currentPath).toEqual({ id: pathId, title: "Path 1" });
  });

  it("should return undefined when the path is not found", () => {
    const paths = [
      { id: "2", title: "Path 2" },
      { id: "3", title: "Path 3" },
    ];

    mockUseAppSelector.mockReturnValue(paths);

    const { result } = renderHookWithProviders(useCurrentPath);

    expect(result.current.currentPath).toBeUndefined();
  });
});
