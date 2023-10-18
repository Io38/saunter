import { screen, fireEvent } from "@testing-library/react";
import PathListView from "../PathListView";
import { renderWithProviders } from "utils/testUtils";

const handleSearchChange = jest.fn();

jest.mock("hooks/usePathsSearch", () => ({
  usePathsSearch: () => ({
    handleSearchChange,
    filteredPaths: [],
  }),
}));

describe("PathListView", () => {
  it("should render the search input and a list of paths", () => {
    renderWithProviders(<PathListView />);
    screen.getByPlaceholderText("Search ...");
  });

  it("should handle search input change", () => {
    renderWithProviders(<PathListView />);

    const searchInput = screen.getByPlaceholderText("Search ...");
    fireEvent.change(searchInput, { target: { value: "Search Query" } });

    expect(handleSearchChange).toHaveBeenCalledTimes(1);
  });
});
