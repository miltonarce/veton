import React from "react";
import { Route } from "react-router-dom";

// Veterinary Views
import HomeVet from "./HomeVet";
import AddClinicalHistory from "./AddClinicalHistory";
import Header from "./Header";

class Veterinary extends React.Component {
  render() {
    const { match } = this.props;
    return (
      <React.Fragment>
        <Header />
        <Route exact component={HomeVet} path={match.path} />
        <Route
          component={AddClinicalHistory}
          path={`${match.path}/add-clinical-history/:idPet`}
        />
      </React.Fragment>
    );
  }
}

export default Veterinary;
