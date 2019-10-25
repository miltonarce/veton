import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Pet from "../Pet";

class ListPets extends React.Component {
  constructor(props) {
    super(props);
    this.showAddClinicalHistory = this.showAddClinicalHistory.bind(this);
  }

  render() {
    const { pets, clinicalHistories = null } = this.props;
    const { showAddClinicalHistory } = this;

    return pets.map((pet, i) => (
      <div key={i} className="box-list">
        <Link to={`/user/pet/${pet.id_pet}`}>
          <Pet {...pet} />
        </Link>
      </div>
    ));
  }

  showAddClinicalHistory(idPet) {
    return (
      this.props.clinicalHistories.find(
        clinical => clinical.id_pet === idPet
      ) === undefined
    );
  }
}

ListPets.propTypes = {
  pets: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      last_name: PropTypes.string,
      image: PropTypes.string,
      birthday: PropTypes.string
    })
  )
};

export default ListPets;
