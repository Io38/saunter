import { act, renderHook } from "@testing-library/react";
import usePathsSearch from "../usePathsSearch";
import { IUsePathsSearchParams } from "../types";
import { IPath } from "types";

const createEvent = (value: string) =>
  ({
    target: { value },
  } as React.ChangeEvent<HTMLInputElement>);

const paths = [
  { title: "Path 1", fullDescription: "Description 1" },
  { title: "Path 2", fullDescription: "Description 2" },
  { title: "Path 3", fullDescription: "Description 3" },
];

describe("usePathsSearch", () => {
  it("should filter paths based on the search input", () => {
    const { result } = renderHook(() =>
      usePathsSearch({ paths } as IUsePathsSearchParams)
    );

    act(() => result.current.handleSearchChange(createEvent("Description 2")));

    expect(result.current.filteredPaths).toEqual([
      { title: "Path 2", fullDescription: "Description 2" },
    ]);
  });

  it("should handle empty paths array", () => {
    const paths: IPath[] = [];
    const { result } = renderHook(() => usePathsSearch({ paths }));
    expect(result.current.filteredPaths).toEqual([]);
  });

  it("should handle search input that matches no paths", () => {
    const { result } = renderHook(() =>
      usePathsSearch({ paths } as IUsePathsSearchParams)
    );

    act(() => result.current.handleSearchChange(createEvent("No match")));

    expect(result.current.filteredPaths).toEqual([]);
  });
});
