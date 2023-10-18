import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import PathDetails from "../PathDetails";
import { IPath } from "types";
import { texts } from "constants/texts";

let currentPath: IPath = {
  title: "title",
  distance: 10,
  fullDescription: "fullDescription",
  markers: [],
  isFavorite: false,
  shortDescription: "",
  id: "",
};
const removePath = jest.fn();
const addToFavorites = jest.fn();
const removeFromFavorites = jest.fn();

jest.mock("../hooks/usePathDetails", () => ({
  __esModule: true,
  default: () => ({
    currentPath,
    removePath,
    addToFavorites,
    removeFromFavorites,
  }),
}));

jest.mock("components/map", () => ({
  Map: () => <div />,
}));

describe("PathDetails", () => {
  it("should render PathDetails component with a favorite path", () => {
    render(<PathDetails />);
    screen.getByText(currentPath.title);
    screen.getByText(`${currentPath.distance} m`);
    screen.getByText(currentPath.fullDescription);
  });

  it("should render remove button", () => {
    currentPath.isFavorite = true;
    render(<PathDetails />);
    const btn = screen.getByText(texts.remove);
    fireEvent.click(btn);
    expect(removePath).toBeCalled();
  });

  it("should render add to favorites button with a non-favorite path", () => {
    currentPath.isFavorite = false;
    render(<PathDetails />);
    const btn = screen.getByText(texts.addToFavorites);
    fireEvent.click(btn);
    expect(addToFavorites).toBeCalled();
  });

  it("should render remove from favorites button with faavorite path", () => {
    currentPath.isFavorite = true;
    render(<PathDetails />);
    const btn = screen.getByText(texts.removeFromFavorites);
    fireEvent.click(btn);
    expect(removeFromFavorites).toBeCalled();
  });
});
