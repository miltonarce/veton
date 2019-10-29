import React, { useContext } from "react";
import { Route, Switch } from "react-router-dom";

import RouteAuth from "../../RouteAuth";
import { AppContext } from "../../../Store";
import User from "../../../Views/User";
import Veterinary from "../../../Views/Veterinary";
import Admin from "../../../Views/Admin";
import Login from "../../../Views/Auth/Login";
import Register from "../../../Views/Auth/Register";



const Main = props => {
  const { auth: { logged, user } } = useContext(AppContext);
  return (
    <Switch>
      <Route exact path="/" component={Login} />
      <Route exact path="/register" component={Register} />
      <RouteAuth auth={logged} path="/user" render={props => <User {...props} idUser={user.id_user} />} />
      <RouteAuth auth={logged} path="/veterinary" component={Veterinary} />
      <RouteAuth auth={logged} path="/admin-vet" component={Veterinary} />
      <RouteAuth auth={logged} path="/admin" component={Admin} />
    </Switch>
  );
}
export default Main;