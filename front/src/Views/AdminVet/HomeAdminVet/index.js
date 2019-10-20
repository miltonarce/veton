import React from "react";
import ListVeterinarians from "../../../Components/ListVeterinarians";
import Spinner from "../../../Components/Spinner";
import ErrorStatus from "../../../Components/ErrorStatus";
import { Link } from "react-router-dom";
import Api from "../../../Services/Api";

class HomeAdminVet extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
      vets: [],
      hasError: null
    };
  }

  render() {
    const { vets, isLoading, hasError } = this.state;
    return (
      <div className="container">
        <h2 className="text-center my-4">Mis veterinarios</h2>
        <div className="d-flex flex-row justify-content-end mb-4">
          <Link to="/admin-vet/register-vet" className="btn btn-link btn-lg">
            Registrar Veterinario
          </Link>
        </div>
        {isLoading && <SpinnerWithContainer />}
        {!isLoading && !hasError && <ListVeterinarians veterinarians={vets} />}
        {!isLoading && hasError && <ErrorStatus>{hasError}</ErrorStatus>}
      </div>
    );
  }

  async componentDidMount() {
    try {
      this.setState({ ...this.state, isLoading: true });
      const {
        data: { success, vets, msg = "Error inesperado" }
      } = await Api.veterinaries.usersByVet(1);
      if (success) {
        this.setState({
          ...this.state,
          isLoading: false,
          vets,
          hasError: null
        });
      } else {
        this.setState({
          ...this.state,
          isLoading: false,
          vets: [],
          hasError: msg
        });
      }
    } catch (err) {
      this.setState({ isLoading: false, hasError: err });
    }
  }
}

const SpinnerWithContainer = () => (
  <div className="veton-container-spinner">
    <div>
      <Spinner />
    </div>
  </div>
);

export default HomeAdminVet;
