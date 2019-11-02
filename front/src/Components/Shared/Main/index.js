import React, {useContext} from "react";
import {Route, Switch} from "react-router-dom";

import RouteAuth from "../../RouteAuth";
import {AppContext} from "../../../Store";
import User from "../../../Views/User";
import Veterinary from "../../../Views/Veterinary";
import Admin from "../../../Views/Admin";
import Login from "../../../Views/Auth/Login";
import Register from "../../../Views/Auth/Register";

const Main = () => {
  const {
    auth: {logged},
  } = useContext(AppContext);
  return (
    <Switch>
      <Route exact component={Login} path="/" />
      <Route exact component={Register} path="/register" />
      <RouteAuth
        auth={logged}
        path="/user"
        render={props => <User {...props} />}
      />
      <RouteAuth auth={logged} component={Veterinary} path="/veterinary" />
      <RouteAuth auth={logged} component={Veterinary} path="/admin-vet" />
      <RouteAuth auth={logged} component={Admin} path="/admin" />
    </Switch>
  );
};
export default Main;
