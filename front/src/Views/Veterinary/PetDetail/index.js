import React from "react";
import {
  CssBaseline,
  Container,
  Grid,
  Typography,
  CircularProgress,
  Paper,
  Hidden,
} from "@material-ui/core";
import {withStyles} from "@material-ui/core/styles";
import {Link} from "react-router-dom";
import Api from "../../../Services/Api";
import {calculateAge} from "../../../Utils/globals";
import ListHistories from "../../../Components/ListHistories";
import {AppContext} from "../../../Store";
import TitlePages from "../../../Components/TitlePages";

// All classes by component
const styles = {
  CardPet: {
    maxWidth: 345,
  },
  CardPetMedia: {
    width: "16.75rem",
    height: "14rem",
    paddingTop: "56.25%",
  },
  ContainerTypo: {
    marginTop: "1rem",
    marginBottom: "1rem",
    fontSize: "2rem",
    color: "#5c2299",
    fontWeight: 600,
  },
  Paper: {
    height: "11.56rem",
    borderRadius: "23px",
  },
  PaperMedic: {
    height: "11.56rem",
    background: "#5c2299",
    borderRadius: "23px",
  },
  ContentCardPet: {
    marginTop: ".5rem",
  },
  contenImage: {
    position: "relative",
    height: "8.56rem",
  },
  ImagePet: {
    top: "-0.7rem",
    width: "9.75rem",
    height: "10rem",
    position: "absolute",
    boxShadow: "0px 3px 11px 5px rgba(0, 0, 0, 0.16)",
    borderRadius: "123px",
    left: "2rem",
  },
  petName: {
    color: "#4E4E4E",
    fontSize: "1.87rem",
    fontWeight: 600,
    marginBottom: "1rem",
    marginTop: "1rem",
  },
  ContentCardText: {
    "& p, h3, div": {
      overflow: "hidden",
      whiteSpace: "nowrap",
      textOverflow: "ellipsis",
    },
  },
};

class PetDetail extends React.Component {
  state = {
    dataPet: {},
    isLoading: true,
    error: null,
  };

  // Retrieve detail pet by id
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
      this.setState({...state, isLoading: false, error: true});
    }
  }

  render() {
    const {classes} = this.props;
    const {dataPet, isLoading, error} = this.state;
    const {
      auth: {user},
    } = this.context;
    if (isLoading) {
      return (
        <div className="veton-container-spinner">
          <CircularProgress color="secondary" />
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
          <TitlePages
            subtitle="Aquí ver y editar los detalles de tu mascota incluyendo su historia clínica."
            title="Detalle de mascota"
          />
          <Grid
            container
            alignItems="flex-start"
            direction="row"
            justify="center"
            spacing={3}
          >
            <Grid item xs={12}>
              <Grid
                container
                alignItems="center"
                direction="row"
                justify="space-between"
                spacing={3}
              >
                <Grid item className={classes.ContentCardPet} xs={8}>
                  <Paper className={classes.Paper}>
                    <Grid
                      container
                      alignItems="center"
                      className={classes.Paper}
                      direction="row"
                      justify="space-between"
                      spacing={3}
                    >
                      <Grid item className={classes.contenImage} xs={2}>
                        <img
                          alt={dataPet.name}
                          className={classes.ImagePet}
                          src={
                            dataPet.image
                              ? `http://api.veton/imgs/${dataPet.image}`
                              : "https://via.placeholder.com/300x200"
                          }
                        />
                      </Grid>
                      <Grid item className={classes.Paper} xs={9}>
                        <Grid
                          container
                          alignItems="center"
                          direction="row"
                          justify="flex-start"
                          spacing={3}
                        >
                          <Grid
                            item
                            className={classes.ContentCardText}
                            xs={11}
                          >
                            <Grid item xs={12}>
                              <Typography
                                className={classes.petName}
                                component="h3"
                                variant="h3"
                              >{`${dataPet.name} ${dataPet.last_name}`}</Typography>
                            </Grid>
                            <Grid item xs={12}>
                              <Grid
                                container
                                alignItems="center"
                                direction="row"
                                justify="flex-start"
                                spacing={3}
                              >
                                <Grid item xs={4}>
                                  <Grid item xs={12}>
                                    <Typography color="secondary" component="p">
                                      CUMPLEAÑOS
                                    </Typography>
                                  </Grid>
                                  <Grid item xs={12}>
                                    {dataPet.birthday || "Sin registro."}
                                  </Grid>
                                </Grid>
                                <Grid item xs={4}>
                                  <Grid item xs={12}>
                                    <Typography color="secondary" component="p">
                                      PESO
                                    </Typography>
                                  </Grid>
                                  <Grid item xs={12}>
                                    {dataPet.weight || "0"} Kg.
                                  </Grid>
                                </Grid>
                                <Grid item xs={4}>
                                  <Grid item xs={12}>
                                    <Typography color="secondary" component="p">
                                      RAZA
                                    </Typography>
                                  </Grid>
                                  <Grid item xs={12}>
                                    {dataPet.breed.breed}
                                  </Grid>
                                </Grid>
                              </Grid>
                            </Grid>
                            <Grid item xs={12}>
                              <Grid
                                container
                                alignItems="center"
                                direction="row"
                                justify="flex-start"
                                spacing={3}
                              >
                                <Grid item xs={4}>
                                  <Grid item xs={12}>
                                    <Typography color="secondary" component="p">
                                      COLORES
                                    </Typography>
                                  </Grid>
                                  <Grid item xs={12}>
                                    {dataPet.colors}
                                  </Grid>
                                </Grid>
                                <Grid item xs={4}>
                                  <Grid item xs={12}>
                                    <Typography color="secondary" component="p">
                                      EDAD
                                    </Typography>
                                  </Grid>
                                  <Grid item xs={12}>
                                    {calculateAge(dataPet.birthday)} años.
                                  </Grid>
                                </Grid>
                                <Grid item xs={4}>
                                  <Grid item xs={12}>
                                    <Typography color="secondary" component="p">
                                      GÉNERO
                                    </Typography>
                                  </Grid>
                                  <Grid item xs={12}>
                                    {dataPet.gender.gender}
                                  </Grid>
                                </Grid>
                              </Grid>
                            </Grid>
                          </Grid>
                          {/* <Grid item xs={3}>
                            <Grid item xs={12}>
                              <Typography color="secondary" component="p">
                                COMENTARIOS
                              </Typography>
                            </Grid>
                            <Grid item xs={12}>
                              <Typography
                                className={classes.comments}
                                component="p"
                              >
                                {dataPet.comments}
                              </Typography>
                            </Grid>
                          </Grid> */}
                        </Grid>
                      </Grid>
                    </Grid>
                  </Paper>
                </Grid>
                {/* <Grid item xs={4}>
                  <Paper className={classes.PaperMedic}>Informacion</Paper>
                </Grid> */}
              </Grid>
            </Grid>
            <Grid item xs={12}>
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

// Add context to get all data from provider...
PetDetail.contextType = AppContext;

export default withStyles(styles)(PetDetail);
