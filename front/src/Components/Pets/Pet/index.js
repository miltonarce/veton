import React, { useContext } from "react";
import PropTypes from "prop-types";
import {
  CardContent,
  Grid,
} from "@material-ui/core";
import { AppContext } from "../../../Store";
import {
  CardPet,
  CardPetMedia,
  ContentMedia,
  CardPetHeader,
  PinkTypo,
  TextTypo,
  CardPaper,
  PetLink,
  ButtonDetailsPet
} from "./styles";

const Pet = ({ id_pet, name, last_name, image, birthday, weight, comments }) => {
  const {
    auth: { user },
  } = useContext(AppContext);

  return (
    <CardPet>
      <ContentMedia>
        <CardPetMedia
          alt={name}
          component="img"
          src={
            image ? `http://api.veton/imgs/${image}` : "/assets/no-image.png"
          }
          title={`Mascota ${name}`}
        />
      </ContentMedia>
      <CardPetHeader
        subheader={comments || "Sin comentarios."}
        title={`${name} ${last_name ? last_name : ''}`}
      />
      <CardContent>
        <Grid
          container
          alignItems="center"
          direction="row"
          justify="flex-start"
          spacing={3}
        >
          <Grid item xs={6}>
            <CardPaper>
              <Grid
                container
                alignItems="center"
                direction="column"
                justify="center"
              >
                <Grid item xs={12}>
                  <PinkTypo color="secondary">Cumpleaños</PinkTypo>
                </Grid>
                <Grid item xs={12}>
                  <TextTypo>{birthday || "Sin registro."}</TextTypo>
                </Grid>
              </Grid>
            </CardPaper>
          </Grid>
          <Grid item xs={6}>
            <CardPaper>
              <Grid
                container
                alignItems="center"
                direction="column"
                justify="center"
              >
                <Grid item xs={12}>
                  <PinkTypo color="secondary">Peso</PinkTypo>
                </Grid>
                <Grid item xs={12}>
                  <TextTypo>{weight || "0"} Kg.</TextTypo>
                </Grid>
              </Grid>
            </CardPaper>
          </Grid>
        </Grid>
      </CardContent>
      <CardContent>
        <Grid container alignItems="center" direction="row" justify="center">
          <Grid item xs={3}>
          </Grid>
          <Grid item xs={9}>
            <PetLink
              to={`/${
                user.id_role === 3 ? "veterinary" : "user"
                }/pet/${id_pet}`}
            >
              <ButtonDetailsPet color="primary" variant="contained">
                VER DETALLES
              </ButtonDetailsPet>
            </PetLink>
          </Grid>
        </Grid>
      </CardContent>
    </CardPet>
  );
};

Pet.propTypes = {
  id_pet: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  last_name: PropTypes.string,
  image: PropTypes.string,
  birthday: PropTypes.string.isRequired,
  weight: PropTypes.number.isRequired,
  comments: PropTypes.string.isRequired,
};

export default Pet;
