import React from 'react';
import PropTypes from 'prop-types';
import Validator from '../../../Services/Validator';
import './index.scss';

class LoginForm extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      request: {
        email: '',
        password: '',
      },
      errors: {
        email: {},
        password: {},
      }
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleOnChange = this.handleOnChange.bind(this);
  }

  render() {
    const { errors } = this.state;
    return (
      <div className="login container">
        <form onSubmit={this.handleSubmit} noValidate>
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
                onChange={this.handleOnChange}
              />
              <span className="form__err">{errors.email.isEmpty && 'El campo email es obligatorio'}</span>
              <span className="form__err">{errors.email.isInvalidEmail && 'No es un email válido'}</span>
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
              <span className="form__err">{errors.password.isEmpty && 'El campo password es obligatorio'}</span>
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
      errors: {
        ...this.state.errors,
        [name] : {
          isEmpty: Validator.isEmpty(value),
          isInvalidEmail: name === 'email' ? !Validator.isEmail(value) : {}
        }
      }
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    const { email , password } = this.state.errors;
    if (!email.isInvalidEmail && !email.isEmpty && !password.isEmpty) {
      this.props.onSubmit(this.state.request);
    }
  }
}

LoginForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default LoginForm;
