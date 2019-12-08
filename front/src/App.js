import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { SnackbarProvider } from "notistack";
import Main from "./Components/Shared/Main";
import AppProvider from "./Store";

function App() {
  return (
    <AppProvider>
      <Router>
        <SnackbarProvider
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "right",
          }}
          maxSnack={3}
        >
          <Main />
        </SnackbarProvider>
      </Router>
    </AppProvider>
  );
}

export default App;
