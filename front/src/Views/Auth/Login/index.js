import React from 'react';
import { withRouter } from 'react-router-dom';
import Api from '../../../Services/Api';
import LoginForm from '../../../Components/Forms/LoginForm';

class Login extends React.PureComponent {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  render() {
    return <LoginForm onSubmit={this.handleSubmit} />;
  }

  /**
   * Method to handle submit login and redirect to home user
   * @param {Event} event
   * @returns {void}
   */
  async handleSubmit(request) {
    try {
      const { data } = await Api.auth.login(request);
      if (data.success) {
        const defaultHome = data.additional_info.id_role === 1 ? 'veterinary' : 'user';
        this.props.history.push(`/${defaultHome}`);
      } else {
        alert('Datos incorrectos!!');
      }
    } catch (err) {
      console.error(`Error to login the user ${err}`);
      alert('se produjo un error', err);
    }
  }
}

export default withRouter(props => <Login {...props} />);
