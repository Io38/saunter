import { render, screen } from "@testing-library/react";
import PathDetailsView from "../PathDetailsView";
import { PATH_DETAILS_VIEW_TEST_ID } from "constants/testIds";

jest.mock("components/pathDetails", () => ({
  PathDetails: () => <div />,
}));

describe("PathDetailsView", () => {
  it("renders PathDetails component", () => {
    render(<PathDetailsView />);
    screen.getByTestId(PATH_DETAILS_VIEW_TEST_ID);
  });
});
