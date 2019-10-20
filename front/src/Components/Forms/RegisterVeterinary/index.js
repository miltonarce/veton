import React from "react";
import PropTypes from "prop-types";
import RegisterUser from "../RegisterUser";
import FormRegisterVeterinary from "../FormRegisterVeterinary";

class RegisterVeterinary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      request: {
        user: {
          email: "",
          password: "",
          dni: "",
          id_role: 2
        },
        veterinary: {
          business_name: "",
          cuit_cuil: "",
          phone1: "",
          street: ""
        }
      },
      currentStep: 0
    };
    this.handleOnSubmitUser = this.handleOnSubmitUser.bind(this);
    this.handleOnSubmitVeterinary = this.handleOnSubmitVeterinary.bind(this);
    this.handleOnClickBeforeStep = this.handleOnClickBeforeStep.bind(this);
  }

  /**
   * Method handle the first step in form
   * Set the form values to save state...
   * @param {object} veterinary
   * @returns {void}
   */
  handleOnClickBeforeStep(veterinary) {
    this.setState({
      ...this.state,
      request: {
        ...this.state.request,
        veterinary
      },
      currentStep: 0
    });
  }

  /**
   * Method to handle submit form and set the current step
   * @param {object} user
   * @returns {void}
   */
  handleOnSubmitUser(user) {
    this.setState({
      ...this.state,
      request: {
        ...this.state.request,
        user
      },
      currentStep: 1
    });
  }

  /**
   * Method to handle the last step and send all data
   * @param {object} veterinary
   * @returns {void}
   */
  handleOnSubmitVeterinary(veterinary) {
    this.setState(
      {
        ...this.state,
        request: {
          ...this.state.request,
          veterinary
        }
      },
      () => {
        this.props.onSubmit(this.state.request);
      }
    );
  }

  render() {
    const {
      request: { user, veterinary },
      currentStep
    } = this.state;
    const {
      handleOnSubmitUser,
      handleOnClickBeforeStep,
      handleOnSubmitVeterinary
    } = this;
    return (
      <React.Fragment>
        {currentStep === 0 && (
          <div>
            <h2>Datos personales</h2>
            <RegisterUser
              initialValue={user}
              onSubmit={handleOnSubmitUser}
              name="Siguiente"
            />
          </div>
        )}
        {currentStep === 1 && (
          <div>
            <h2>Datos de la veterinaria</h2>
            <FormRegisterVeterinary
              initialValue={veterinary}
              onClickBeforeStep={handleOnClickBeforeStep}
              onSubmit={handleOnSubmitVeterinary}
            />
          </div>
        )}
      </React.Fragment>
    );
  }
}

RegisterVeterinary.propTypes = {
  onSubmit: PropTypes.func.isRequired
};

export default RegisterVeterinary;
