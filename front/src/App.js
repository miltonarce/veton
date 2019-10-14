import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import './assets/sass/styles.scss';

// Template Header, Main, Footer
import Header from './Components/Shared/Header/index';
import Footer from './Components/Shared/Footer/index';
import Main from './Components/Shared/Main/index';

const handleSearch = search => {
  console.log('searching...', search);
};

function App() {
  return (
    <Router>
      <Header onSearch={handleSearch} />
      <Main />
      <Footer />
    </Router>
  );
}

export default App;
