import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import queryString from 'query-string';

import Spinner from '../../../Components/Spinner/index';
import Api from '../../../Services/Api';
import ListPets from '../../../Components/ListPets';
import './index.scss';

class Pets extends React.PureComponent {
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
    const { petsList, isLoading } = this.state;
    if (isLoading)
      return (
        <div className="container">
          <Spinner />
        </div>
      );
    return (
      <div className="container">
        <div className="my-pets">
          <h2>Mis Mascotas</h2>
          <Link className="btn btn-link btn-lg" to="/user/add-pet">
            Agregar mascota
          </Link>
        </div>
        {petsList.length > 0 ? <ListPets pets={petsList} /> : <p>No tenes registrado ninguna mascota</p>}
      </div>
    );
  }
}

Pets.propTypes = {
  location: PropTypes.shape({
    search: PropTypes.string,
  }),
};

export default Pets;
