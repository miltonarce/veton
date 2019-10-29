import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { styled } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';

import Pet from "../Pet";

const PetLink = styled(Link)({
  textDecoration: "none",
})

class ListPets extends React.Component {
  constructor(props) {
    super(props);
    this.showAddClinicalHistory = this.showAddClinicalHistory.bind(this);
  }

  render() {
    const { pets } = this.props;

    return (
      <Grid container direction="row" justify="flex-start" alignItems="flex-start" spacing={2}>
        {pets.map((pet, i) => (
          <Grid item xs={3} key={i}>
            <PetLink to={`/user/pet/${pet.id_pet}`}>
              <Pet {...pet} />
            </PetLink>
          </Grid>
        ))}
      </Grid>

    );
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
