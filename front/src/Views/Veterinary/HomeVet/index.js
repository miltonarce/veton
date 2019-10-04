import React from 'react';
import { Link } from 'react-router-dom';

import ApiVet from '../../../Services/ApiVet';
import ListPets from '../../../Components/ListPets';

class HomeVet extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      petsList: [],
    };
  }

  async componentDidMount() {
    try {
      const petsList = await ApiVet.pets.fetch();
      this.setState({ isLoading: false, petsList: petsList.data });
    } catch (err) {
      console.log(err);
    }
  }
  render() {
    const { petsList } = this.state;
    return (
      <div className="container">
        <div className="my-pets">
          <h2>Mis Pacientes</h2>
          <Link className="btn btn-link btn-lg" to="/add-clinical-history">
            Agregar nuevo paciente
          </Link>
        </div>
        {petsList.length > 0 ? <ListPets pets={petsList} /> : <p>No tenes registrado ninguna mascota</p>}
      </div>
    );
  }
}

export default HomeVet;
