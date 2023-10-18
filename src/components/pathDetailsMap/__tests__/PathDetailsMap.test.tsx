import { render, screen } from "@testing-library/react";
import PathDetailsMap from "../PathDetailsMap";

const map = "Map Component";

jest.mock("components/map", () => ({
  Map: () => <div>{map}</div>,
}));

describe("PathDetailsMap", () => {
  it("renders map", () => {
    render(<PathDetailsMap markers={[]} />);
    screen.getByText(map);
  });
});
