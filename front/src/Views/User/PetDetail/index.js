import React from "react";
import {
  CssBaseline,
  Container,
  Grid,
  Typography,
  CardContent,
  Card,
  CardMedia,
  CardHeader,
} from "@material-ui/core";
import {styled} from "@material-ui/core/styles";
import {Link} from "react-router-dom";

import Api from "../../../Services/Api";
import calculateAge from "../../../Utils/globals";
import ListHistories from "../../../Components/ListHistories";
import {AppContext} from "../../../Store";

const CardPet = styled(Card)({
  maxWidth: 345,
});

const CardPetMedia = styled(CardMedia)({
  height: 0,
  paddingTop: "56.25%",
});

const ContainerTypo = styled(Typography)({
  margin: "2rem",
  fontSize: "2rem",
  color: "#5c2299",
});

class PetDetail extends React.Component {
  state = {
    dataPet: {},
    isLoading: true,
    error: null,
  };

  async componentDidMount() {
    const {match} = this.props;
    const {state} = this;
    try {
      const {data} = await Api.pet.fetch(match.params.id);
      this.setState({
        ...state,
        dataPet: data,
        isLoading: false,
      });
    } catch (error) {
      console.log("error", error);
      this.setState({...state, isLoading: false, error: true});
    }
  }

  render() {
    const {dataPet, isLoading, error} = this.state;
    const {
      auth: {user},
    } = this.context;
    if (isLoading) {
      return (
        <div className="veton-container-spinner">
          <div>Spinner</div>
        </div>
      );
    }
    if (error) {
      return <p>Se produjo un error</p>;
    }

    return (
      <>
        <CssBaseline />
        <Container fixed>
          <ContainerTypo component="h2" variant="h2">
            Mi mascota
          </ContainerTypo>
          <Grid
            container
            alignItems="flex-start"
            direction="row"
            justify="center"
            spacing={3}
          >
            <Grid item xs={3}>
              <CardPet>
                <CardHeader title={`${dataPet.name} ${dataPet.last_name}`} />
                <CardPetMedia
                  image={
                    dataPet.image
                      ? `http://api.veton/imgs/${dataPet.image}`
                      : "https://via.placeholder.com/300x200"
                  }
                  title={dataPet.name}
                />
                <CardContent>
                  <Typography
                    color="textSecondary"
                    component="p"
                    variant="body2"
                  >
                    Cumpleaños: {dataPet.birthday || "Sin cumpleaños."}
                  </Typography>
                  <Typography
                    color="textSecondary"
                    component="p"
                    variant="body2"
                  >
                    Peso: {dataPet.weight || "0"} Kg.
                  </Typography>
                  <Typography
                    color="textSecondary"
                    component="p"
                    variant="body2"
                  >
                    Raza: {dataPet.breed.breed}
                  </Typography>
                  <Typography
                    color="textSecondary"
                    component="p"
                    variant="body2"
                  >
                    Colores: {dataPet.colors}
                  </Typography>
                  <Typography
                    color="textSecondary"
                    component="p"
                    variant="body2"
                  >
                    Cumpleaños: {dataPet.birthday}
                  </Typography>
                  <Typography
                    color="textSecondary"
                    component="p"
                    variant="body2"
                  >
                    Edad: {calculateAge(dataPet.birthday)}
                  </Typography>
                  <Typography
                    color="textSecondary"
                    component="p"
                    variant="body2"
                  >
                    Genero: {calculateAge(dataPet.birthday)}
                  </Typography>
                  <Typography
                    color="textSecondary"
                    component="p"
                    variant="body2"
                  >
                    Comentarios: {dataPet.comments}
                  </Typography>
                </CardContent>
              </CardPet>
            </Grid>
            <Grid item xs={9}>
              <ContainerTypo component="h3" variant="h3">
                Historia Clínica
              </ContainerTypo>
              {dataPet.clinical_history.length > 0 ? (
                <ListHistories histories={dataPet.clinical_history} />
              ) : (
                <>
                  <p>No hay historias clínicas registradas.</p>
                  {user.id_role === 3 ? (
                    <Link
                      to={`/veterinary/add-clinical-history/${dataPet.id_pet}`}
                    >
                      Agregar Historia
                    </Link>
                  ) : (
                    ""
                  )}
                </>
              )}
            </Grid>
          </Grid>
        </Container>
      </>
    );
  }
}

PetDetail.contextType = AppContext;

export default PetDetail;
