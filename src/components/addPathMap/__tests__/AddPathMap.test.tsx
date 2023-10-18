import { render, screen } from "@testing-library/react";
import AddPathMap from "../AddPathMap";
import { renderWithProviders } from "utils/testUtils";
import { texts } from "constants/texts";

jest.mock("components/map", () => ({
  Map: () => <div />,
}));

describe("AddPathMap", () => {
  it("renders map", () => {
    renderWithProviders(<AddPathMap />);
    screen.getByText(texts.clickToAddMarker);
  });
});
