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
  Paper,
  Button,
  Grid,
  Fab,
} from "@material-ui/core";
import {ThumbUp} from "@material-ui/icons";

const CardPet = styled(Card)({
  maxWidth: 306,
  minWidth: 306,
  maxHeight: 436,
  minHeight: 436,
  borderRadius: "23px",
  overflow: "visible",
  boxShadow: "00px 3px 50px -27px rgba(0,0,0,0.75)",
});

const CardPetMedia = styled(CardMedia)({
  height: 210,
  width: 210,
  borderRadius: "150px",
  position: "absolute",
  top: "-14px",
  left: "46px",
  boxShadow: "0px 3px 11px 5px rgba(0, 0, 0, 0.16)",
});

const ContentMedia = styled("div")({
  position: "relative",
  width: "100%",
  height: 195,
});

const CardPetHeader = styled(CardHeader)({
  paddingBottom: "0px",
  "& div": {
    overflow: "hidden",
    "& span": {
      textOverflow: "ellipsis",
      whiteSpace: "nowrap",
      overflow: "hidden",
    },
    "& span:first-child": {
      color: "#4E4E4E",
      fontSize: "1.87rem",
      fontWeight: "800",
    },
  },
});

const PinkTypo = styled(Typography)({
  fontWeight: 500,
});

const TextTypo = styled(Typography)({
  color: "#4E4E4E",
});

const CardPaper = styled(Paper)({
  background: "#F2F2F2",
  borderRadius: 11,
  boxShadow: "none",
  padding: ".3rem",
});

const PetLink = styled(Link)({
  textDecoration: "none",
  margin: "1rem",
});

const ButtonDetailsPet = styled(Button)({
  marginBottom: "1rem",
});

const NotiIcon = styled(ThumbUp)({
  color: "#999999",
});

const Pet = ({id_pet, name, last_name, image, birthday, weight, comments}) => (
  <CardPet>
    <ContentMedia>
      <CardPetMedia
        image={
          image
            ? `http://api.veton/imgs/${image}`
            : "https://via.placeholder.com/300x200"
        }
        title="Mascota Imagen"
      />
    </ContentMedia>
    <CardPetHeader subheader={comments} title={`${name} ${last_name}`} />
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
          <ButtonDetailsPet aria-label="notification" size="small">
            <NotiIcon />
          </ButtonDetailsPet>
        </Grid>
        <Grid item xs={9}>
          <PetLink to={`/user/pet/${id_pet}`}>
            <ButtonDetailsPet color="primary" variant="contained">
              VER DETALLES
            </ButtonDetailsPet>
          </PetLink>
        </Grid>
      </Grid>
    </CardContent>
  </CardPet>
);

Pet.propTypes = {
  name: PropTypes.string,
  last_name: PropTypes.string,
  image: PropTypes.string,
  birthday: PropTypes.string,
};

export default Pet;
