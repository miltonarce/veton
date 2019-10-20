import React from "react";
import RegisterUser from "../../../Components/Forms/RegisterUser";
import Auth from "../../../Services/Auth";
import Spinner from "../../../Components/Spinner";
import ErrorStatus from "../../../Components/ErrorStatus";

class RegisterVet extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      request: {
        email: "",
        password: "",
        dni: "",
        id_role: 3
      },
      hasError: null,
      isLoading: false
    };
    this.handleOnSubmit = this.handleOnSubmit.bind(this);
  }

  render() {
    const { request, isLoading, hasError } = this.state;
    const { handleOnSubmit } = this;
    return (
      <React.Fragment>
        <RegisterUser
          initialValue={request}
          name="Registar Veterinario"
          onSubmit={handleOnSubmit}
        />
        {isLoading && <Spinner />}
        {!isLoading && hasError && <ErrorStatus>{hasError}</ErrorStatus>}
      </React.Fragment>
    );
  }

  async handleOnSubmit(vet) {
    try {
      this.setState({ ...this.state, isLoading: true });
      const {
        data: { success, msg = "Error inesperado" }
      } = await Auth.register(vet);
      if (success) {
        this.setState({ ...this.state, isLoading: false });
      } else {
        this.setState({ ...this.state, isLoading: false, hasError: msg });
      }
    } catch (err) {
      this.setState({
        ...this.state,
        isLoading: false,
        hasError: err
      });
    }
  }
}

export default RegisterVet;
