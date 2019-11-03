import React from "react";
import {Link} from "react-router-dom";
import PropTypes from "prop-types";
import {styled} from "@material-ui/core/styles";
import {
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  Typography,
  Button,
} from "@material-ui/core";

const CardPet = styled(Card)({
  maxWidth: 345,
});

const CardPetMedia = styled(CardMedia)({
  height: 0,
  paddingTop: "56.25%",
});

const CardPetHeader = styled(CardHeader)({
  padding: "1rem 0",
});

const PetLink = styled(Link)({
  textDecoration: "none",
  margin: "1rem",
});

const ButtonDetailsPet = styled(Button)({
  marginBottom: "1rem",
});

const Pet = ({name, last_name, image, birthday, weight}) => (
  <CardPet>
    <CardPetMedia
      image={
        image
          ? `http://api.veton/imgs/${image}`
          : "https://via.placeholder.com/300x200"
      }
      title="Mascota Imagen"
    />
    <CardContent>
      <CardPetHeader title={`${name} ${last_name}`} />
      <Typography color="textSecondary" component="p" variant="body2">
        Cumpleaños: {birthday || "Sin cumpleaños."}
      </Typography>
    </CardContent>
    <CardContent>
      <Typography color="textSecondary" component="p" variant="body2">
        Peso: {weight || "0"} Kg.
      </Typography>
    </CardContent>
    <PetLink to="">
      <ButtonDetailsPet color="primary" variant="contained">
        Ver Detalles
      </ButtonDetailsPet>
    </PetLink>
  </CardPet>
);

Pet.propTypes = {
  name: PropTypes.string,
  last_name: PropTypes.string,
  image: PropTypes.string,
  birthday: PropTypes.string,
};

export default Pet;
