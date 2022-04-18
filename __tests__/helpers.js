import React from "react";
import { Provider } from "react-redux";
import { render } from "@testing-library/react";
import configureStore from "redux-mock-store";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "../src/helpers/theme";
import { MemoryRouter } from "react-router-dom";

export const mockStore = configureStore();

export const shallowRender = (component, store) => {
  const core = store ? (
    <MemoryRouter>
      <ThemeProvider theme={theme}>
        <Provider store={store}>{component}</Provider>
      </ThemeProvider>
    </MemoryRouter>
  ) : (
    component
  );
  return render(core);
};
