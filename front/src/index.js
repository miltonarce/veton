import React from "react";
import ReactDOM from "react-dom";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import "./assets/fontstyles.css";

/**
 * Theme default for Vet On with our styles
 */
const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#5c2299",
    },
    secondary: {
      main: "#FE3090",
    },
  },
  typography: {
    fontFamily: [
      "Poppins",
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
    fontSize: 14,
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    h2: {
      fontSize: "2rem",
    },
  },
  overrides: {
    MuiButton: {
      root: {
        borderRadius: "5rem",
      },
    },
  },
});

// All aplication is wrapped with my custom MuiTheme
ReactDOM.render(
  <MuiThemeProvider theme={theme}>
    <App />
  </MuiThemeProvider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
