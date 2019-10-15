import React from 'react';
import { Route, Switch } from 'react-router-dom';

//Views
import User from '../../Views/User';
import Veterinary from '../../Views/Veterinary';
import Login from '../../Views/Auth/Login';

export default class Main extends React.PureComponent {
  render() {
    return (
      <section className="veton_app">
        <Switch>
          <Route exact path="/" component={Login} />
          <Route path="/user" component={User} />
          <Route path="/veterinary" component={Veterinary} />
        </Switch>
      </section>
    );
  }
}