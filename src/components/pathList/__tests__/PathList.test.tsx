import { render, screen } from "@testing-library/react";
import PathList from "../PathList";
import { IPath } from "types";
import { PATH_LIST_CONTAINER_TEST_ID } from "constants/testIds";
import { texts } from "constants/texts";

jest.mock("components/pathItem", () => ({
  PathItem: () => <div />,
}));

const paths: IPath[] = [
  {
    shortDescription: "",
    distance: 100,
    isFavorite: true,
    title: "",
    id: "",
    fullDescription: "",
    markers: [],
  },
];

describe("PathList", () => {
  it("renders path list", () => {
    render(<PathList paths={paths} />);
    screen.getByTestId(PATH_LIST_CONTAINER_TEST_ID);
  });
  it("should display not found text if there no paths", () => {
    render(<PathList paths={[]} />);
    screen.getByText(texts.noItemsFound);
  });
});
