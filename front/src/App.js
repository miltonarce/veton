import './App.scss';
import React from 'react';

// Template Header, Main, Footer
import Header from './components/shared/Header';
import Footer from './components/shared/Footer';
import Main from './components/shared/Main';

import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Header />
      <Main />
      <Footer />
    </Router>
  );
}

export default App;
