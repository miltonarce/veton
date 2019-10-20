import React from "react";

import ApiVet from "../../../Services/ApiVet";
import Api from "../../../Services/Api";
import ListPets from "../../../Components/ListPets";
import SearchBox from "../../../Components/Forms/SearchBox";
import Spinner from "../../../Components/Spinner";

class HomeVet extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
      petsList: [],
      clinicalHistories: []
    };
    this.handleSearch = this.handleSearch.bind(this);
  }

  async handleSearch(dni) {
    try {
      this.setState({ ...this.state, isLoading: true });
      const user = await ApiVet.users.fetch(dni);
      const petsList = await ApiVet.userPets.fetch(user.data.id_user);
      const clinicalHistories = await Api.clinicalhistories.all();
      this.setState({
        ...this.state,
        petsList: petsList.data,
        clinicalHistories: clinicalHistories.data,
        isLoading: false
      });
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    const { petsList, clinicalHistories, isLoading } = this.state;
    return (
      <div className="veton-container">
        <div className="veton-container__hero">
          <h2>Mis Mascotas</h2>
        </div>
        {/* <Link className="btn btn-link btn-lg" to="veterinary/add-clinical-history">
            Agregar nuevo paciente
          </Link> */}
        <div className="veton-container__list">
          <div className="veton-container__list__container-search">
            <div>
              <SearchBox
                className="search-box-border"
                placeholder="Ingrese dni del paciente"
                onSearch={this.handleSearch}
              />
            </div>
          </div>
          <div className="veton-container__list__container-list">
            <div className="veton-container__list__container-list__row">
              {isLoading ? (
                <Spinner />
              ) : petsList.length > 0 ? (
                <ListPets
                  clinicalHistories={clinicalHistories}
                  pets={petsList}
                />
              ) : (
                <p>No tenes registrado ninguna mascota</p>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default HomeVet;
