import React from 'react';

import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import queryString from 'query-string';
import Api from '../../../Services/Api';
import ListPets from '../../../Components/ListPets';
import './PetsList.scss';

class PetsList extends React.PureComponent {
  constructor() {
    super();
    this.state = {
      petsList: [],
      isLoading: false,
      error: null,
    };
  }

  async componentDidMount() {
    const { id } = queryString.parse(this.props.location.search);
    // if (id) {
    try {
      this.setState({ ...this.state, isLoading: true });
      const pets = await Api.pets.fetch();
      this.setState({ ...this.state, isLoading: false, petsList: pets.data });
    } catch (err) {
      this.setState({ isLoading: false });
    }
    // }
  }

  render() {
    const { petsList } = this.state;
    return (
      <div className="container">
        <div className="my-pets">
          <h2>Mis Mascotas</h2>
          <Link className="btn btn-link btn-lg" to="/add-pet">
            Agregar mascota
          </Link>
        </div>
        {petsList.length > 0 ? <ListPets pets={petsList} /> : <p>No tenes registrado ninguna mascota</p>}
      </div>
    );
  }
}

PetsList.propTypes = {
  location: PropTypes.shape({
    search: PropTypes.string,
  }),
};

export default PetsList;
