import React from "react";
import { Route } from "react-router-dom";
import { Grid, CssBaseline } from '@material-ui/core';
import { styled } from '@material-ui/core/styles';

// Users Views
import HomeUser from "./HomeUser";
import Profile from "./Profile";
import Option from "./Option";
import Pets from "./Pets";
import PetDetail from "./PetDetail";
import AddPet from "./AddPet";
import Header from "../../Components/Shared/Header";

const ContentMain = styled('div')({
  width: '100%',
  top: '0',
  bottom: '0',
  position: 'absolute',
});

class User extends React.Component {
  render() {
    const { idUser } = this.props;
    return (
      <ContentMain>
        <CssBaseline />
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
      </ContentMain>
    );
  }
}

export default User;
