import { render, screen } from "@testing-library/react";
import SelectPathView from "../SelectPathView";
import { LOGO_TEST_ID } from "constants/testIds";
import { texts } from "constants/texts";

describe("SelectPathView", () => {
  it("renders text and logo", () => {
    render(<SelectPathView />);
    screen.getByTestId(LOGO_TEST_ID);
    screen.getByText(texts.selectAnyPath);
  });
});
