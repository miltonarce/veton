import React from "react";
import PropTypes from "prop-types";
import {styled} from "@material-ui/core/styles";
import {Grid} from "@material-ui/core";

import Pet from "../Pet";

const GridList = styled(Grid)({
  marginBottom: "2rem",
});

class LastPetsByVet extends React.Component {
  showAddClinicalHistory = idPet => {
    const {clinicalHistories} = this.props;
    return (
      clinicalHistories.find(clinical => clinical.id_pet === idPet) ===
      undefined
    );
  };

  render() {
    const {pets} = this.props;

    return (
      <Grid
        container
        alignItems="flex-start"
        direction="row"
        justify="flex-start"
        spacing={2}
      >
        {pets.map((pet, i) => (
          <GridList key={i} item lg={6} md={6} xl={6} xs={12}>
            <Grid
              container
              alignItems="center"
              direction="row"
              justify="center"
            >
              <Pet {...pet} />
            </Grid>
          </GridList>
        ))}
      </Grid>
    );
  }
}

LastPetsByVet.propTypes = {
  pets: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      last_name: PropTypes.string,
      image: PropTypes.string,
      birthday: PropTypes.string,
    })
  ),
};

export default LastPetsByVet;
