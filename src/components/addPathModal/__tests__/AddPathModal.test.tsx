import { renderWithProviders } from "utils/testUtils";
import AddPathModal from "../AddPathModal";
import { fireEvent, screen } from "@testing-library/react";
import { texts } from "constants/texts";

const onClose = jest.fn();

jest.mock("components/map", () => ({
  Map: () => <div />,
}));

describe("AddPathModal", () => {
  it("renders the modal when isOpen is true", () => {
    renderWithProviders(<AddPathModal isOpen={true} onClose={onClose} />);
    screen.getByText(texts.addNewPath);
  });

  it("does not render the modal when isOpen is false", () => {
    renderWithProviders(<AddPathModal isOpen={false} onClose={onClose} />);
    expect(screen.queryByText(texts.addNewPath)).not.toBeInTheDocument();
  });

  it("calls onClose when the close icon is clicked", () => {
    renderWithProviders(<AddPathModal isOpen={true} onClose={onClose} />);
    const closeIcon = screen.getByTestId("CLOSE_ICON_TEST_ID");
    fireEvent.click(closeIcon);
    expect(onClose).toBeCalledTimes(1);
  });
});
