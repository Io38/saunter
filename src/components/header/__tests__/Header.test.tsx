import React from "react";
import { fireEvent, screen } from "@testing-library/react";
import Header from "../Header";
import { texts } from "constants/texts";
import { LOGO_TEST_ID } from "constants/testIds";
import { renderWithProviders } from "utils/testUtils";
const navigate = jest.fn();

jest.mock("react-router-dom", () => ({
  ...(jest.requireActual("react-router-dom") as any),
  useNavigate: () => navigate,
}));

describe("Header", () => {
  it("should render Header component", () => {
    renderWithProviders(<Header />);
    screen.getByText(texts.saunter);
    screen.getByTestId(LOGO_TEST_ID);
  });

  it("should navigate to the home page when the logo is clicked", () => {
    renderWithProviders(<Header />);
    const logo = screen.getByTestId(LOGO_TEST_ID);
    fireEvent.click(logo);
    expect(navigate).toHaveBeenCalledWith("/");
  });
});
