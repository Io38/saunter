/* eslint-disable testing-library/no-unnecessary-act */
import { screen } from "@testing-library/react";
import AddPathModalForm from "../AddPathModalForm";
import { renderWithProviders } from "utils/testUtils";
import { texts } from "constants/texts";

const closeModal = jest.fn();
let mockUseMediaQuery = false;

jest.mock("@mui/material", () => ({
  ...jest.requireActual("@mui/material"),
  useMediaQuery: () => mockUseMediaQuery,
}));

jest.mock("components/map", () => ({
  Map: () => <div />,
}));

describe("AddPathModalForm", () => {
  it("renders form", () => {
    renderWithProviders(<AddPathModalForm closeModal={closeModal} />);
    screen.getByText(texts.title);
    screen.getByText(texts.shortDescription);
    screen.getByText(texts.fullDescription);
  });
  it("renders map on mobile", () => {
    renderWithProviders(<AddPathModalForm closeModal={closeModal} />);
    screen.getByText(texts.clickToAddMarker);
  });
  it("doesn't render map on mobile", () => {
    mockUseMediaQuery = true;
    renderWithProviders(<AddPathModalForm closeModal={closeModal} />);
    const map = screen.queryByText("MapComponentMock");
    expect(map).toBeNull();
  });
});
