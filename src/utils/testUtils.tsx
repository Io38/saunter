import React, { PropsWithChildren } from "react";
import { Provider } from "react-redux";
import { store as defaultStore } from "redux/store";
import { RenderHookOptions, render, renderHook } from "@testing-library/react";

export const AllProviders = ({ children }: PropsWithChildren) => (
  <Provider store={defaultStore}>{children}</Provider>
);

export const renderWithProviders = (ui: React.ReactElement) => {
  return render(ui, { wrapper: AllProviders });
};

export const renderHookWithProviders = <P, R>(
  hook: (props?: P) => R,
  options?: RenderHookOptions<P>
) => {
  return renderHook(hook, { wrapper: AllProviders, ...options });
};

export default AllProviders;
