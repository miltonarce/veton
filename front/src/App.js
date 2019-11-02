import React from "react";
import {BrowserRouter as Router} from "react-router-dom";

// Template Header, Main, Footer
import Main from "./Components/Shared/Main";
import AppProvider from "./Store";

function App() {
  return (
    <AppProvider>
      <Router>
        <Main />
      </Router>
    </AppProvider>
  );
}

export default App;
