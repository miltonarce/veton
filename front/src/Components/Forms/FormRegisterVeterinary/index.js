import React from "react";
import PropTypes from "prop-types";
import Validator from "../../../Services/Validator";
import {
  EMPTY_BUSINESS_NAME,
  EMPTY_CUIT_CUIL,
  EMPTY_PHONE,
  EMPTY_STREET,
  EMPTY_FANTASY_NAME
} from "../../../Utils/messages";
import "./index.scss";

class FormRegisterVeterinary extends React.Component {
  constructor(props) {
    super(props);
    const {
      business_name = "",
      cuit_cuil = "",
      phone1 = "",
      street = "",
      fantasy_name = ""
    } = props.initialValue;
    this.state = {
      request: {
        business_name,
        cuit_cuil,
        phone1,
        street,
        fantasy_name
      },
      errors: {
        business_name: null,
        cuit_cuil: null,
        phone1: null,
        street: null,
        fantasy_name: null
      }
    };
    this.handleOnSubmit = this.handleOnSubmit.bind(this);
    this.handleOnChange = this.handleOnChange.bind(this);
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
        business_name: null,
        cuit_cuil: null,
        phone1: null,
        street: null,
        fantasy_name: null
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
    const {
      business_name,
      cuit_cuil,
      phone1,
      street,
      fantasy_name
    } = this.state.request;
    if (Validator.isEmpty(business_name)) {
      this.setState({
        ...this.state,
        errors: {
          ...this.state.errors,
          business_name: {
            isEmpty: EMPTY_BUSINESS_NAME
          }
        }
      });
      return false;
    }
    if (Validator.isEmpty(cuit_cuil)) {
      this.setState({
        ...this.state,
        errors: {
          ...this.state.errors,
          cuit_cuil: {
            isEmpty: EMPTY_CUIT_CUIL
          }
        }
      });
      return false;
    }
    if (Validator.isEmpty(phone1)) {
      this.setState({
        ...this.state,
        errors: {
          ...this.state.errors,
          phone1: {
            isEmpty: EMPTY_PHONE
          }
        }
      });
      return false;
    }
    if (Validator.isEmpty(street)) {
      this.setState({
        ...this.state,
        errors: {
          ...this.state.errors,
          street: {
            isEmpty: EMPTY_STREET
          }
        }
      });
      return false;
    }
    if (Validator.isEmpty(fantasy_name)) {
      this.setState({
        ...this.state,
        errors: {
          ...this.state.errors,
          fantasy_name: {
            isEmpty: EMPTY_FANTASY_NAME
          }
        }
      });
      return false;
    }
    return true;
  }

  render() {
    const { onClickBeforeStep } = this.props;
    const { errors, request } = this.state;
    const { handleOnSubmit, handleOnChange } = this;
    return (
      <form className="container" onSubmit={handleOnSubmit} noValidate>
        <div className="form-group text-left">
          <label htmlFor="business_name">Nombre de la veterinaria</label>
          <input
            type="text"
            className="form-control"
            id="business_name"
            name="business_name"
            placeholder="Ingrese el nombre de la veterinaria"
            value={request.business_name}
            onChange={handleOnChange}
          />
          <span className="form__err">
            {errors.business_name && errors.business_name.isEmpty}
          </span>
        </div>
        <div className="form-group text-left">
          <label htmlFor="fantasy_name">Nombre fantasía</label>
          <input
            type="text"
            className="form-control"
            id="fantasy_name"
            name="fantasy_name"
            placeholder="Ingrese el nombre fantasía"
            value={request.fantasy_name}
            onChange={handleOnChange}
          />
          <span className="form__err">
            {errors.fantasy_name && errors.fantasy_name.isEmpty}
          </span>
        </div>
        <div className="form-group text-left">
          <label htmlFor="cuit_cuil">CUIT / CUIL</label>
          <input
            type="number"
            className="form-control"
            id="cuit_cuil"
            name="cuit_cuil"
            placeholder="Ingrese su CUIT / CUIL"
            value={request.cuit_cuil}
            onChange={handleOnChange}
          />
          <p className="text-muted m-0">
            El cuit / cuil, sin espacios ni guiones
          </p>
          <span className="form__err">
            {errors.cuit_cuil && errors.cuit_cuil.isEmpty}
          </span>
        </div>
        <div className="form-group text-left">
          <label htmlFor="phone1">Teléfono</label>
          <input
            type="tel"
            className="form-control"
            id="phone1"
            name="phone1"
            placeholder="Ingrese el télefono"
            value={request.phone1}
            onChange={handleOnChange}
          />
          <p className="text-muted m-0">El télefono, sin espacios ni guiones</p>
          <span className="form__err">
            {errors.phone1 && errors.phone1.isEmpty}
          </span>
        </div>
        <div className="form-group text-left">
          <label htmlFor="street">Dirección</label>
          <input
            type="tel"
            className="form-control"
            id="street"
            name="street"
            placeholder="Ingrese la dirección de la veterinaria"
            value={request.street}
            onChange={handleOnChange}
          />
          <span className="form__err">
            {errors.street && errors.street.isEmpty}
          </span>
        </div>
        <div className="d-flex justify-content-lg-between">
          <button
            type="button"
            className="btn btn-primary btn-lg"
            onClick={() => onClickBeforeStep(request)}
          >
            Anterior
          </button>
          <button type="submit" className="btn btn-primary btn-lg">
            Finalizar
          </button>
        </div>
      </form>
    );
  }
}

FormRegisterVeterinary.defaultProps = {
  initialValue: {}
};

FormRegisterVeterinary.propTypes = {
  initialValue: PropTypes.shape({}).isRequired,
  onSubmit: PropTypes.func.isRequired
};

export default FormRegisterVeterinary;
