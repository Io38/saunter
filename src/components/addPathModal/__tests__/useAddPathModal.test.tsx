import { act } from "@testing-library/react";
import useAddPathModal from "../hooks/useAddPathModal";
import { renderHookWithProviders } from "utils/testUtils";

describe("useAddPathModal", () => {
  it("should open and close the modal", () => {
    const { result } = renderHookWithProviders(useAddPathModal);

    expect(result.current.isOpen).toBeFalsy();

    act(() => {
      result.current.openModal();
    });

    expect(result.current.isOpen).toBeTruthy();

    act(() => {
      result.current.closeModal();
    });

    expect(result.current.isOpen).toBeFalsy();
  });
});
