import React from 'react';
import { Route } from 'react-router-dom';

// Views App
import PetList from '../../../Views/User/Profile/PetsList';
import Contact from '../../../Views/User/Contact/index';

export default class Main extends React.PureComponent {
  render() {
    return (
      <section className="veton_app">
        <Route exact path="/" component={PetList} />
        <Route exact path="/contact" component={Contact} />
      </section>
    );
  }
}
