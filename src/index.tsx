import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import {
  CssBaseline,
  StyledEngineProvider,
  ThemeProvider,
} from "@mui/material";
import theme from "theme/theme";
import { store } from "redux/store";
import { ThemeProvider as ScThemeProvider } from "styled-components";
import "fb/firebase";

const container = document.getElementById("root")!;
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <StyledEngineProvider injectFirst>
          <ThemeProvider theme={theme}>
            <ScThemeProvider theme={theme}>
              <CssBaseline />
              <App />
            </ScThemeProvider>
          </ThemeProvider>
        </StyledEngineProvider>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
