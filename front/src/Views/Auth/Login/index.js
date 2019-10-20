import React from "react";
import { withRouter, Link } from "react-router-dom";
import Api from "../../../Services/Api";
import Auth from "../../../Services/Auth";
import LoginForm from "../../../Components/Forms/LoginForm";
import Alert from "../../../Components/Alert";
import Spinner from "../../../Components/Spinner";
import Logo from "../../../assets/images/logo.svg";
import "./index.scss";

// Roles by view
const ROLES = Api.roles.all();

class Login extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
      hasError: null
    };
    this.handleOnSubmit = this.handleOnSubmit.bind(this);
  }

  render() {
    const { isLoading, hasError } = this.state;
    const { handleOnSubmit } = this;
    return (
      <div className="view">
        <div className="login-view">
          <div className="logo-app">
            <img
              src={Logo}
              className="img-fluid"
              alt="Logo vetOn, veterinaria oline"
            />
          </div>
          <LoginForm onSubmit={handleOnSubmit} />
          <div className="status-view">
            {hasError && <Alert message={hasError} type="danger" />}
            {isLoading && <Spinner />}
          </div>
          <div>
            No tienes cuenta?{" "}
            <Link to="/register" className="btn btn-link">
              Registrarse
            </Link>
          </div>
        </div>
      </div>
    );
  }

  /**
   * Method to handle submit login and redirect to home by role
   * @param {object} request
   * @returns {void}
   */
  async handleOnSubmit(request) {
    try {
      this.setState({ ...this.state, isLoading: true });
      const {
        data: { success, additional_info, msg }
      } = await Auth.login(request);
      if (success) {
        this.setState({ ...this.state, isLoading: false, hasError: null });
        this.props.onAuthSuccess(additional_info);
        const defaultView = ROLES[additional_info.id_role];
        this.props.history.push(`/${defaultView}`);
      } else {
        this.setState({ ...this.state, isLoading: false, hasError: msg });
      }
    } catch (err) {
      this.setState({
        ...this.state,
        isLoading: false,
        hasError: "Se produjo un error al autenticarse"
      });
    }
  }
}

export default withRouter(props => <Login {...props} />);
