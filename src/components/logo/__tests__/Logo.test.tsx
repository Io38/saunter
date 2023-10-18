import { render, screen } from "@testing-library/react";
import Logo from "../Logo";
import { LOGO_TEST_ID } from "constants/testIds";

const viewBox = "1 1 1 1";

describe("Logo", () => {
  it("renders logo", () => {
    render(<Logo />);
    screen.getByTestId(LOGO_TEST_ID);
  });
  it("renders logo with props", () => {
    render(<Logo viewBox={viewBox} />);
    const logo = screen.getByTestId(LOGO_TEST_ID);
    const logoViewBox = logo.getAttribute("viewBox");
    expect(logoViewBox).toStrictEqual(viewBox);
  });
});
