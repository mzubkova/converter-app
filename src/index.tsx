import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { HashRouter } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import App from "./components/App";
import store from "./store/store";
import { theme } from "../src/helpers/theme";
import "normalize.css";
import "./index.css";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLDivElement
);
root.render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <HashRouter>
        <App />
      </HashRouter>
    </ThemeProvider>
  </Provider>
);
