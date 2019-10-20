import React from "react";
import PropTypes from "prop-types";
import Validator from "../../../Services/Validator";
import {
  EMPTY_MAIL,
  EMPTY_PASSWORD,
  INVALID_MAIL
} from "../../../Utils/messages";
import "./index.scss";

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      request: {
        email: "",
        password: ""
      },
      errors: {
        email: null,
        password: null
      }
    };
    this.handleOnSubmit = this.handleOnSubmit.bind(this);
    this.handleOnChange = this.handleOnChange.bind(this);
    this.getStatusFormAndSetErrors = this.getStatusFormAndSetErrors.bind(this);
  }

  render() {
    const { errors } = this.state;
    const { handleOnSubmit, handleOnChange } = this;
    return (
      <div className="container">
        <form onSubmit={handleOnSubmit} noValidate>
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
                onChange={handleOnChange}
              />
              <span className="form__err">
                {errors.email && errors.email.isEmpty}
              </span>
              <span className="form__err">
                {errors.email && errors.email.isInvalidEmail}
              </span>
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
                onChange={handleOnChange}
              />
              <span className="form__err">
                {errors.password && errors.password.isEmpty}
              </span>
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
   * Method to handle event on change in form login
   * @param {Event} event
   * @returns {void}
   */
  handleOnChange(event) {
    const {
      target: { name, value }
    } = event;
    this.setState({
      ...this.state,
      request: {
        ...this.state.request,
        [name]: value
      },
      errors: {
        email: null,
        password: null
      }
    });
  }

  /**
   * Method to handle event submit form login
   * @param {Event} event
   * @returns {void}
   */
  handleOnSubmit(event) {
    event.preventDefault();
    if (this.getStatusFormAndSetErrors()) {
      this.props.onSubmit(this.state.request);
    }
  }

  /**
   * Method to get the current status form is valid or not.
   * Set new state if errors
   * @returns {bool} isValid
   */
  getStatusFormAndSetErrors() {
    const { email, password } = this.state.request;
    if (Validator.isEmpty(email)) {
      this.setState({
        ...this.state,
        errors: {
          ...this.state.errors,
          email: {
            isEmpty: EMPTY_MAIL,
            isInvalidEmail: INVALID_MAIL
          }
        }
      });
      return false;
    }
    if (!Validator.isEmail(email)) {
      this.setState({
        ...this.state,
        errors: {
          ...this.state.errors,
          email: {
            isEmpty: null,
            isInvalidEmail: INVALID_MAIL
          }
        }
      });
      return false;
    }
    if (Validator.isEmpty(password)) {
      this.setState({
        ...this.state,
        errors: {
          ...this.state.errors,
          password: {
            isEmpty: EMPTY_PASSWORD
          }
        }
      });
      return false;
    }
    return true;
  }
}

LoginForm.propTypes = {
  onSubmit: PropTypes.func.isRequired
};

export default LoginForm;
