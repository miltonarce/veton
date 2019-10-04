import React from 'react';
import { Route } from 'react-router-dom';

// Views App
import Contact from '../../../Views/User/Contact';
import PetList from '../../../Views/User/Profile/PetsList';

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
