import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "./assets/sass/styles.scss";

// Template Header, Main, Footer
import Footer from "./Components/Footer";
import Main from "./Components/Main";



function App() {
  return (
    <Router>
      <Main />
      <Footer />
    </Router>
  );
}

export default App;
