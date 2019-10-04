import React from 'react';
import { Route } from 'react-router-dom';

// Views App
import Home from '../../../Views/User/Home';
import Contact from '../../../Views/User/Contact';
import MyPets from '../../../Views/User/MyPets';

export default class Main extends React.PureComponent {
  render() {
    return (
      <section className="veton_app">
        <Route exact path="/" component={Home} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/my-pets" component={MyPets} />
      </section>
    );
  }
}
