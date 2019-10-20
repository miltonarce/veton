import React from "react";
import { Route } from "react-router-dom";

// AdminVet Views
import HomeAdminVet from "./HomeAdminVet";
import RegisterUserVet from "./RegisterUserVet";
import Header from "./Header";

class AdminVet extends React.Component {
  render() {
    const { match } = this.props;
    return (
      <React.Fragment>
        <Header />
        <Route exact component={HomeAdminVet} path={match.path} />
        <Route
          component={RegisterUserVet}
          path={`${match.path}/register-vet`}
        />
      </React.Fragment>
    );
  }
}

export default AdminVet;
