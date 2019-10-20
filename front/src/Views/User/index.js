import React from "react";
import { Route } from "react-router-dom";

// Users Views
import HomeUser from "./HomeUser";
import Profile from "./Profile";
import Option from "./Option";
import Pets from "./Pets";
import PetDetail from "./PetDetail";
import AddPet from "./AddPet";
import Header from "./Header";

class User extends React.Component {
  render() {
    const { idUser } = this.props;
    return (
      <React.Fragment>
        <Header />
        <Route exact path={this.props.match.path} component={HomeUser} />
        <Route path={`${this.props.match.path}/option`} component={Option} />
        <Route
          path={`${this.props.match.path}/pets`}
          render={() => <Pets idUser={idUser} />}
        />
        <Route
          path={`${this.props.match.path}/pet/:id`}
          component={PetDetail}
        />
        <Route path={`${this.props.match.path}/profile`} component={Profile} />
        <Route path={`${this.props.match.path}/add-pet`} component={AddPet} />
      </React.Fragment>
    );
  }
}

export default User;
