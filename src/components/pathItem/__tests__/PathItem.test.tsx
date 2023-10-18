import { fireEvent, render, screen } from "@testing-library/react";
import { PathDetails } from "components/pathDetails";
import { IPath } from "types";
import PathItem from "../PathItem";
import { formatDistance } from "utils/formatDistance";
import { STAR_ICON_TEST_ID } from "constants/testIds";

const navigate = jest.fn();

jest.mock("react-router-dom", () => ({
  ...(jest.requireActual("react-router-dom") as any),
  useNavigate: () => navigate,
}));

const shortDescription = "shortDescription";
const title = "title";
const id = "1";
const distance = 700;
const isFavorite = false;

const props: IPath = {
  shortDescription,
  distance,
  isFavorite,
  title,
  id,
  fullDescription: "",
  markers: [],
};
describe("PathItem", () => {
  it("renders title, short description and formatted distance", () => {
    render(<PathItem {...props} />);
    screen.getByText(title);
    screen.getByText(shortDescription);
    screen.getByText(formatDistance(distance));
  });
  it("renders star icon if its favorite path", () => {
    render(<PathItem {...props} isFavorite />);
    screen.getByTestId(STAR_ICON_TEST_ID);
  });
  it("clicking on item should call navigate", () => {
    render(<PathItem {...props} />);
    const item = screen.getByText(title);
    fireEvent.click(item);
    expect(navigate).toBeCalledTimes(1);
  });
});
