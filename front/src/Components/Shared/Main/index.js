import React from 'react';
import { Route } from 'react-router-dom';

// Views App
import Home from '../../../Views/User/Home/index';
import Contact from '../../../Views/User/Contact/index';

export default class Main extends React.PureComponent {
  render() {
    return (
      <section className="veton_app">
        <Route exact path="/" component={Home} />
        <Route exact path="/contact" component={Contact} />
      </section>
    );
  }
}