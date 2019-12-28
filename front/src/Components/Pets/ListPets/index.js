import React from "react";
import PropTypes from "prop-types";
import { Grid } from "@material-ui/core";
import Pet from "../Pet";
import { GridList, styles } from "./styles";

const ListPets = ({ pets }) => {
  return (
    <Grid container alignItems="flex-start" direction="row" justify="flex-start" spacing={2} component="ol" style={styles}>
      {pets.map((pet, i) => (
        <GridList key={i} item lg={4} md={6} xl={4} xs={12} component="li">
          <Grid container alignItems="center" direction="row" justify="center" component="article">
            <Pet {...pet} />
          </Grid>
        </GridList>
      ))}
    </Grid>
  );
}

ListPets.propTypes = {
  pets: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      last_name: PropTypes.string,
      image: PropTypes.string,
      birthday: PropTypes.string,
    })
  ),
  clinicalHistories: PropTypes.arrayOf(PropTypes.shape({})),
};

export default ListPets;
