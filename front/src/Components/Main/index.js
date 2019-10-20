import React from "react";
import { Route, Switch } from "react-router-dom";
import RouteAuth from "../../Components/RouteAuth";

//Views
import User from "../../Views/User";
import Veterinary from "../../Views/Veterinary";
import Admin from "../../Views/Admin";
import AdminVet from "../../Views/AdminVet";
import Login from "../../Views/Auth/Login";
import Register from "../../Views/Auth/Register";

export default class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      auth: {
        logged: false,
        user: {
          birthday: "",
          dni: null,
          email: "",
          id_role: null,
          image: "",
          last_name: "",
          name: ""
        }
      }
    };
    this.handleOnAuthSuccess = this.handleOnAuthSuccess.bind(this);
  }

  /**
   * Method to handle when user is logged and get the additional info
   * @param {object} user logged
   * @returns {void}
   */
  handleOnAuthSuccess(user) {
    this.setState({
      ...this.state,
      auth: {
        ...this.state.auth,
        logged: true,
        user
      }
    });
  }

  render() {
    const { handleOnAuthSuccess } = this;
    const {
      auth: { logged, user }
    } = this.state;
    return (
      <section className="veton_app">
        <Switch>
          <Route
            exact
            path="/"
            render={() => <Login onAuthSuccess={handleOnAuthSuccess} />}
          />
          <Route exact path="/register" component={Register} />
          <RouteAuth
            auth={logged}
            path="/user"
            render={props => <User {...props} idUser={user.id_user} />}
          />
          <RouteAuth auth={logged} path="/veterinary" component={Veterinary} />
          <RouteAuth auth={logged} path="/admin-vet" component={AdminVet} />
          <RouteAuth auth={logged} path="/admin" component={Admin} />
        </Switch>
      </section>
    );
  }
}
