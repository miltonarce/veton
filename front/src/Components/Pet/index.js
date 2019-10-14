import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import './index.scss';

export default class Pet extends React.PureComponent {
  render() {
    const { name, last_name, image, birthday } = this.props;
    return (
      <div className="pet">
        <div className="pet__info">
          <p className="pet__text">
            <span className="pet__title">Nombre: </span>
            {name}
          </p>
          <p className="pet__text">
            <span className="pet__title">Apellido: </span>
            {last_name}
          </p>
          <p className="pet__text">
            <span className="pet__title">Cumpleaños: </span>
            {birthday}
          </p>
        </div>
        <div>
          <img
            className="pet__img img-fluid rounded"
            src={image ? image : 'https://via.placeholder.com/300x200'}
            alt={name}
          />
        </div>
      </div>
    );
  }
}

Pet.propTypes = {
  name: PropTypes.string,
  last_name: PropTypes.string,
  image: PropTypes.string,
  birthday: PropTypes.string,
};
