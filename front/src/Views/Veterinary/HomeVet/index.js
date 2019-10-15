import React from 'react';
import { Link } from 'react-router-dom';

import ApiVet from '../../../Services/ApiVet';
import Api from '../../../Services/Api';
import ListPets from '../../../Components/ListPets';
import SearchBox from '../../../Components/Forms/SearchBox';
import Spinner from '../../../Components/Spinner';

class HomeVet extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
      petsList: [],
      clinicalHistories: [],
    };
    this.handleSearch = this.handleSearch.bind(this);
  }

  async handleSearch(dni) {
    try {
      this.setState({ ...this.state, isLoading: true });
      const user = await ApiVet.users.fetch(dni);
      const petsList = await ApiVet.userPets.fetch(user.data.id_user);
      const clinicalHistories = await Api.clinicalhistories.all();
      this.setState({ ...this.state, petsList: petsList.data, clinicalHistories: clinicalHistories.data, isLoading: false });
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    const { petsList, clinicalHistories, isLoading } = this.state;
    return (
      <div className="container">
        <div className="my-pets">
          <h2>Mis Pacientes</h2>
          {/* <Link className="btn btn-link btn-lg" to="veterinary/add-clinical-history">
            Agregar nuevo paciente
          </Link> */}
        </div>
        <div className="d-flex justify-content-center">
          <SearchBox placeholder="Buscar" onSearch={this.handleSearch} />
        </div>
        {isLoading ? <Spinner /> : petsList.length > 0 ? <ListPets pets={petsList} clinicalHistories={clinicalHistories} /> : <p>No tenes registrado ninguna mascota</p>}
      </div>
    );
  }
}

export default HomeVet;
