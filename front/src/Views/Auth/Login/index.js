import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import Api from '../../../Services/Api';
import LoginForm from '../../../Components/Forms/LoginForm';
import Alert from '../../../Components/Alert';
import Spinner from '../../../Components/Spinner';
import Logo from '../../../assets/images/Logo.png';
import './index.scss';

class Login extends React.PureComponent {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      isLoading: false,
      hasError: null,
    }
    this.roles = {
      1: 'admin',
      2: 'veterinary',
      3: 'user'
    }
  }

  render() {
    const { isLoading, hasError } = this.state;
    return (
      <div className="view">
        <div className="login-view">
          <div className="logo-app">
            <img src={Logo} className="img-fluid" alt="Logo vetOn, veterinaria oline" />
          </div>
          <LoginForm onSubmit={this.handleSubmit} />
          <div className="status-view">
            {hasError && <Alert message={hasError} type="danger" />}
            {isLoading && <Spinner />}
          </div>
          <div>
            No tienes cuenta?  <Link to="/register" className="btn btn-link">Registrarse</Link>
          </div>
        </div>
      </div>
    );
  }

  /**
   * Method to handle submit login and redirect to home user
   * @param {Event} event
   * @returns {void}
   */
  async handleSubmit(request) {
    try {
      this.setState({ ...this.state, isLoading: true });
      const { data: { success, additional_info, msg } } = await Api.auth.login(request);
      if (success) {
        this.setState({ ...this.state, isLoading: false, hasError: null });
        const defaultView = this.roles[additional_info.id_role];
        this.props.history.push(`/${defaultView}`);
      } else {
        this.setState({ ...this.state, isLoading: false, hasError: msg });
      }
    } catch (err) {
      this.setState({ ...this.state, isLoading: false, hasError: 'Se produjo un error al autenticarse' });
    }
  }
}

export default withRouter(props => <Login {...props} />);
