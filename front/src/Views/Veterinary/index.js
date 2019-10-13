import React from 'react';
import { Route } from 'react-router-dom';

// Veterinary Views
import HomeVet from './HomeVet';
import AddClinicalHistory from './AddClinicalHistory';
import Header from './Header';

class Veterinary extends React.PureComponent {
  render() {
    return (
      <React.Fragment>
        <Header />
        <Route exact path={this.props.match.path} component={HomeVet} />
        <Route path={`${this.props.match.path}/add-clinical-history`} component={AddClinicalHistory} />
      </React.Fragment>
    );
  }
}

export default Veterinary;
