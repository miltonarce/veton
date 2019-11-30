import React, {useContext} from "react";
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
} from "@material-ui/core";
import {AppContext} from "../../Store";

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

const Pet = ({id_pet, name, last_name, image, birthday, weight, comments}) => {
  const {
    auth: {user},
  } = useContext(AppContext);
  
  return (
    <CardPet>
      <ContentMedia>
        <CardPetMedia
          alt={`Foto de ${name}`}
          component="img"
          src={
            image ? `http://api.veton/imgs/${image}` : "/assets/no-image.png"
          }
          title="Mascota Imagen"
        />
      </ContentMedia>
      <CardPetHeader
        subheader={comments || "Sin comentarios."}
        title={`${name} ${last_name}`}
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
            {/* <ButtonDetailsPet
              aria-label="notification"
              size="small"
              onClick={handleModal}
            >
              <NotiIcon />
            </ButtonDetailsPet> */}
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
      {/* <Modal
        closeAfterTransition
        aria-describedby="transition-modal-description"
        aria-labelledby="transition-modal-title"
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
        className={classes.modal}
        open={values.openModal}
        onClose={handleModal}
      >
        <Fade in={values.openModal}>
          <Paper className={classes.paper}>
            <h2>Ubicación actual de tu mascota</h2>
            <div style={{height: "50vh", width: "100%"}}>
              <GoogleMapReact
                bootstrapURLKeys={{
                  key: "AIzaSyCblp_aQbymjrLmPI8pS6PyHHW9SzBc63Y",
                }}
                defaultCenter={{lat: "-34.60143", lng: "-58.382667"}}
                defaultZoom={9}
              >
                ,
                <AnyReactComponent
                  lat={59.955413}
                  lng={30.337844}
                  text="My Marker"
                />
              </GoogleMapReact>
            </div>
          </Paper>
        </Fade>
      </Modal> */}
    </CardPet>
  );
};

Pet.propTypes = {
  name: PropTypes.string,
  last_name: PropTypes.string,
  image: PropTypes.string,
  birthday: PropTypes.string,
};

export default Pet;
