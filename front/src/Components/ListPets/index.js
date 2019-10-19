import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import Pet from '../Pet';

export default class ListPets extends React.PureComponent {

  constructor(props) {
    super(props);
    this.showAddClinicalHistory = this.showAddClinicalHistory.bind(this);
  }

  render() {
    const { pets, clinicalHistories = null } = this.props;

    return pets.map((pet, i) => (
      <div key={i} className="box-list">
        <Link to={`/user/pet/${pet.id_pet}`}>
          <Pet
            {...pet}
            addConsult={clinicalHistories && this.showAddClinicalHistory(pet.id_pet) && <Link to={`/veterinary/add-clinical-history/${pet.id_pet}`}>
              Agregar Consulta</Link>}
            addHistor={clinicalHistories && this.showAddClinicalHistory(pet.id_pet) && <Link to={`/veterinary/add-clinical-history/${pet.id_pet}`}>
              Agregar Historia</Link>} />
        </Link>
      </div>
    ))
  }

  showAddClinicalHistory(idPet) {
    return this.props.clinicalHistories.find(clinical => clinical.id_pet === idPet) === undefined;
  }
}

ListPets.propTypes = {
  pets: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      last_name: PropTypes.string,
      image: PropTypes.string,
      birthday: PropTypes.string,
    }),
  ),
};
