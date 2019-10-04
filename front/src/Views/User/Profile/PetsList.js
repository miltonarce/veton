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
      pets: [],
      isLoading: false,
      error: null,
    };
  }

  async componentDidMount() {
    const { id } = queryString.parse(this.props.location.search);
    // if (id) {
    try {
      this.setState({ ...this.state, isLoading: true });
      const pets = await Api.pets.getPetsByUser(id);
      this.setState({ ...this.state, isLoading: false, pets });
    } catch (err) {
      this.setState({ isLoading: false });
    }
    // }
  }

  render() {
    const { pets } = this.state;
    return (
      <div className="container">
        <div className="my-pets">
          <h2>Mis Mascotas</h2>
          <Link className="btn btn-link btn-lg" to="/add-pet">
            Agregar mascota
          </Link>
        </div>
        {pets.length > 0 && <ListPets pets={pets} />}
        {/* {pets.length === 0 && <p>No tenes registrado ninguna mascota</p>} */}
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
