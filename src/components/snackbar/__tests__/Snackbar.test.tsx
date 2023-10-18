import * as reduxHooks from "redux/hooks";
import Snackbar from "../Snackbar";
import { fireEvent, screen } from "@testing-library/react";
import { renderWithProviders } from "utils/testUtils";
import { clearSnackbar } from "redux/slices/snackbar/snackbarSlice";
import { CLOSE_ICON_TEST_ID } from "constants/testIds";

const useAppSelector = jest.spyOn(reduxHooks, "useAppSelector");
const mockUseAppDispatch = jest.spyOn(reduxHooks, "useAppDispatch");

const dispatch = jest.fn();
mockUseAppDispatch.mockReturnValue(dispatch);

const successSnackbar = { message: "Sample message", type: "info" };
describe("Snackbar component", () => {
  it("should not render when message is empty", () => {
    useAppSelector.mockReturnValue({ message: "", type: "info" });

    renderWithProviders(<Snackbar />);

    const snackbar = screen.queryByRole("alert");
    expect(snackbar).toBeNull();
  });

  it("should render when message is not empty", () => {
    useAppSelector.mockReturnValue(successSnackbar);

    renderWithProviders(<Snackbar />);

    const snackbar = screen.getByRole("alert");
    expect(snackbar).toBeInTheDocument();
    expect(screen.getByText("Sample message")).toBeInTheDocument();
  });

  it("should call clearSnackbar when closing the Snackbar", () => {
    useAppSelector.mockReturnValue(successSnackbar);

    renderWithProviders(<Snackbar />);

    const closeIcon = screen.getByTestId(CLOSE_ICON_TEST_ID);
    fireEvent.click(closeIcon);

    expect(dispatch).toHaveBeenCalledWith(clearSnackbar());
  });
});
