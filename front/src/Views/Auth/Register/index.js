import React from "react";
import { withRouter } from "react-router-dom";
import RolSelect from "../../../Components/Forms/RolSelect";
import RegisterVeterinary from "../../../Components/Forms/RegisterVeterinary";
import RegisterUser from "../../../Components/Forms/RegisterUser";
import Alert from "../../../Components/Alert";
import Spinner from "../../../Components/Spinner";
import Api from "../../../Services/Api";
import "./index.scss";

// Roles by view
const ROLES = Api.roles.all();

class Register extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
      hasError: null,
      id_role: 4
    };
    this.handleOnRolSelected = this.handleOnRolSelected.bind(this);
    this.handleOnSubmitRegisterUser = this.handleOnSubmitRegisterUser.bind(
      this
    );
    this.handleOnSubmitRegisterVeterinary = this.handleOnSubmitRegisterVeterinary.bind(
      this
    );
  }

  render() {
    const { id_role, hasError, isLoading } = this.state;
    const {
      handleOnSubmitRegisterUser,
      handleOnSubmitRegisterVeterinary,
      handleOnRolSelected
    } = this;
    return (
      <div className="container">
        <RolSelect initialValue={id_role} onRolSelected={handleOnRolSelected} />
        {id_role === 4 && (
          <RegisterUser onSubmit={handleOnSubmitRegisterUser} />
        )}
        {id_role === 2 && (
          <RegisterVeterinary onSubmit={handleOnSubmitRegisterVeterinary} />
        )}
        <div className="status-view">
          {hasError && <Alert message={hasError} type="danger" />}
          {isLoading && <Spinner />}
        </div>
      </div>
    );
  }

  /**
   * Method to handle when user select the type of role to create
   * @param {number} id_role
   * @returns {void}
   */
  handleOnRolSelected(id_role) {
    this.setState({ ...this.state, id_role });
  }

  /**
   * Method to register user and redirect to the view home
   * @param {object} request
   * @returns {void}
   */
  async handleOnSubmitRegisterUser(request) {
    try {
      this.setState({ ...this.state, isLoading: true });
      const {
        data: { success, msg }
      } = await Api.auth.register(request);
      const viewWithRole = ROLES[request.id_role];
      if (success) {
        this.setState({ ...this.state, isLoading: false });
        this.props.history.push(`/${viewWithRole}`);
      } else {
        this.setState({ ...this.state, isLoading: false, hasError: msg });
      }
    } catch (err) {
      this.setState({
        ...this.state,
        isLoading: false,
        hasError: "Se produjo un error al registarse"
      });
    }
  }

  /**
   * Method to handle submit register veterinary
   * First create a user with role veterinary , then create the veterinary
   * @param {object} request
   * @returns {void}
   */
  async handleOnSubmitRegisterVeterinary(request) {
    const { user, veterinary } = request;
    try {
      this.setState({ ...this.state, isLoading: true });
      const {
        data: { success, id, msg }
      } = await Api.auth.register(user);
      if (success) {
        const requestVet = {
          ...veterinary,
          id_user: id,
          cuit_cuil: Number(veterinary.cuit_cuil),
          phone1: Number(veterinary.phone1)
        };
        const {
          data: { success, msg }
        } = await Api.veterinaries.register(requestVet);
        if (success) {
          this.setState({ ...this.state, isLoading: false });
          const viewWithRole = ROLES[request.user.id_role];
          this.props.history.push(`/${viewWithRole}`);
        } else {
          this.setState({ ...this.state, isLoading: false, hasError: msg });
        }
      } else {
        this.setState({ ...this.state, isLoading: false, hasError: msg });
      }
    } catch (err) {
      this.setState({
        ...this.state,
        isLoading: false,
        hasError: "Se produjo un error al registrar la veterinaria"
      });
    }
  }
}

export default withRouter(props => <Register {...props} />);
