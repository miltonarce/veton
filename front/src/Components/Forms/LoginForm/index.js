import React from 'react';
import PropTypes from 'prop-types';
import './index.scss';

class LoginForm extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      request: {
        email: '',
        password: '',
      },
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleOnChange = this.handleOnChange.bind(this);
  }

  render() {
    return (
      <div className="login">
        <form className="login__form" onSubmit={this.handleSubmit}>
          <div className="form-group row">
            <label htmlFor="email" className="col-sm-2 col-form-label">
              Email
            </label>
            <div className="col-sm-10">
              <input
                type="email"
                name="email"
                className="form-control"
                id="email"
                placeholder="Ingrese su email"
                required
                onChange={this.handleOnChange}
              />
            </div>
          </div>
          <div className="form-group row">
            <label htmlFor="password" className="col-sm-2 col-form-label">
              Password
            </label>
            <div className="col-sm-10">
              <input
                type="password"
                name="password"
                className="form-control"
                id="password"
                placeholder="Ingrese su password"
                required
                onChange={this.handleOnChange}
              />
            </div>
          </div>
          <button type="submit" className="btn btn-primary btn-block">
            Aceptar
          </button>
        </form>
      </div>
    );
  }

  /**
   * Method to validate form (email, password)
   * @param {string} email
   * @param {string} password
   * @returns {boolean}
   */
  validateForm(email, password) {
    return email.trim() !== '' && password.trim() !== '';
  }

  /**
   * Method to handle event change form
   * @param {Event} event
   * @returns {void}
   */
  handleOnChange(event) {
    const {
      target: { name, value },
    } = event;
    this.setState({
      ...this.state,
      request: {
        ...this.state.request,
        [name]: value,
      },
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    const { email, password } = this.state.request;
    if (this.validateForm(email, password)) {
      this.props.onSubmit(this.state.request);
    }
  }
}

LoginForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default LoginForm;
