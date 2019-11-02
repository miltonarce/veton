import React from "react";
import {Route} from "react-router-dom";
import {CssBaseline} from "@material-ui/core";
import {styled} from "@material-ui/core/styles";

// Users Views
import HomeUser from "./HomeUser";
import Profile from "./Profile";
import Option from "./Option";
import Pets from "./Pets";
import PetDetail from "./PetDetail";
import AddPet from "./AddPet";
import Header from "../../Components/Shared/Header";

const ContentMain = styled("div")({
  width: "100%",
  top: "0",
  bottom: "0",
  position: "absolute",
});

const User = ({props: {match}}) => (
  <ContentMain>
    <CssBaseline />
    <Header />
    <Route exact component={HomeUser} path={match.path} />
    <Route component={Option} path={`${match.path}/option`} />
    <Route component={Pets} path={`${match.path}/pets`} />
    <Route component={PetDetail} path={`${match.path}/pet/:id`} />
    <Route component={Profile} path={`${match.path}/profile`} />
    <Route component={AddPet} path={`${match.path}/add-pet`} />
  </ContentMain>
);

export default User;
