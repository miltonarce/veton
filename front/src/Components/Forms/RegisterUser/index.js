import React from "react";
import PropTypes from "prop-types";
import Validator from "../../../Services/Validator";
import {
  EMPTY_MAIL,
  EMPTY_PASSWORD,
  INVALID_MAIL,
  EMPTY_DNI
} from "../../../Utils/messages";
import "./index.scss";

class RegisterUser extends React.Component {
  constructor(props) {
    super(props);
    const {
      email = "",
      password = "",
      dni = "",
      id_role = 4
    } = props.initialValue;
    this.state = {
      request: {
        email,
        password,
        dni,
        id_role
      },
      errors: {
        email: null,
        password: null,
        dni: null
      }
    };
    this.handleOnSubmit = this.handleOnSubmit.bind(this);
    this.handleOnChange = this.handleOnChange.bind(this);
    this.getStatusFormAndSetErrors = this.getStatusFormAndSetErrors.bind(this);
  }

  render() {
    const { errors, request } = this.state;
    const { name } = this.props;
    const { handleOnSubmit, handleOnChange } = this;
    return (
      <form className="container" onSubmit={handleOnSubmit} noValidate>
        <div className="form-group text-left">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            value={request.email}
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
        <div className="form-group text-left">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            className="form-control"
            id="password"
            name="password"
            value={request.password}
            placeholder="Ingrese su contraseña"
            onChange={handleOnChange}
          />
          <span className="form__err">
            {errors.password && errors.password.isEmpty}
          </span>
        </div>
        <div className="form-group text-left">
          <label htmlFor="dni">DNI</label>
          <input
            type="text"
            className="form-control"
            id="dni"
            placeholder="Ingrese su DNI"
            name="dni"
            value={request.dni}
            onChange={handleOnChange}
          />
          <span className="form__err">{errors.dni && errors.dni.isEmpty}</span>
        </div>
        <button type="submit" className="btn btn-primary btn-lg">
          {name}
        </button>
      </form>
    );
  }

  /**
   * Method to handle event on change in form register
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
        password: null,
        dni: null
      }
    });
  }

  /**
   * Method to handle event submit form register
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
    const { email, password, dni } = this.state.request;
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
    if (Validator.isEmpty(dni)) {
      this.setState({
        ...this.state,
        errors: {
          ...this.state.errors,
          dni: {
            isEmpty: EMPTY_DNI
          }
        }
      });
      return false;
    }
    return true;
  }
}

RegisterUser.defaultProps = {
  initialValue: {},
  name: "Registrarse"
};

RegisterUser.propTypes = {
  initialValue: PropTypes.shape({}),
  name: PropTypes.string
};

export default RegisterUser;
