import React from "react";
import {
  CssBaseline,
  Container,
  Grid,
  Typography,
  CircularProgress,
  Paper,
  Box,
  Button,
  Card,
} from "@material-ui/core";
import {EditOutlined} from "@material-ui/icons";

import {withStyles} from "@material-ui/core/styles";
import {Link} from "react-router-dom";
import Api from "../../../Services/Api";
import {calculateAge} from "../../../Utils/globals";
import ListHistories from "../../../Components/ListHistories";
import {AppContext} from "../../../Store";
import TitlePages from "../../../Components/TitlePages";

// All classes by component
const styles = {
  root: {
    flexGrow: 1,
    backgroundColor: "#ffffff",
    display: "flex",
    borderRadius: "23px",
    padding: "2rem",
    minHeight: "400px",
  },
  ContainerTypo: {
    marginTop: "1rem",
    marginBottom: "1rem",
    fontSize: "2rem",
    color: "#5c2299",
    fontWeight: 600,
  },
  Paper: {
    borderRadius: "23px",
    padding: "1rem",
  },
  PaperMedic: {
    background: "#5c2299",
    borderRadius: "23px",
  },
  ContentCardPet: {
    marginTop: ".5rem",
  },
  contenImage: {
    position: "relative",
    textAlign: "center",
  },
  ImagePet: {
    top: "-0.7rem",
    width: "160px",
    height: "160px",
    boxShadow: "0px 3px 11px 5px rgba(0, 0, 0, 0.16)",
    borderRadius: "123px",
    left: "2rem",
  },
  petName: {
    color: "#4E4E4E",
    fontSize: "1.87rem",
    fontWeight: 600,
    marginBottom: "1rem",
  },
  ContentCardText: {
    paddingTop: 0,
    "& p, h3, div": {
      overflow: "hidden",
      whiteSpace: "nowrap",
      textOverflow: "ellipsis",
    },
  },
  DatosPet: {
    marginTop: "1rem",
  },
  divRel: {
    width: "100%",
    height: "47px",
  },
  ContentLink: {
    textDecoration: "none",
  },
  title: {
    color: "#5C2299",
    fontSize: "2rem",
    padding: "12px",
    margin: 0,
  },
  noHistory: {
    fontSize: "2rem",
    color: "#CDCDCD",
    textAlign: "center",
    marginTop: "2rem",
  },
  ups: {
    maxWidth: "400px",
    display: "block",
    margin: "0 auto",
  },
  button: {
    paddingLeft: "20px",
    paddingRight: "20px",
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
            <Grid item className={classes.DatosPet} xs={12}>
              <Grid
                container
                alignItems="center"
                direction="row"
                justify="space-between"
                spacing={3}
              >
                <Grid item className={classes.ContentCardPet} lg={8} xs={12}>
                  <Paper className={classes.Paper}>
                    <Grid
                      container
                      alignItems="center"
                      direction="row"
                      justify="center"
                      spacing={3}
                    >
                      <Grid
                        item
                        className={classes.contenImage}
                        lg={3}
                        md={3}
                        xs={12}
                      >
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
                      <Grid
                        item
                        className={classes.Paper}
                        lg={6}
                        md={6}
                        xs={12}
                      >
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
                            xs={12}
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
                                <Grid item xs={5}>
                                  <Grid item xs={12}>
                                    <Typography color="secondary" component="p">
                                      CUMPLEAÑOS
                                    </Typography>
                                  </Grid>
                                  <Grid item xs={12}>
                                    {dataPet.birthday || "Sin registro."}
                                  </Grid>
                                </Grid>
                                <Grid item xs={3}>
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
                                <Grid item xs={5}>
                                  <Grid item xs={12}>
                                    <Typography color="secondary" component="p">
                                      COLORES
                                    </Typography>
                                  </Grid>
                                  <Grid item xs={12}>
                                    {dataPet.colors}
                                  </Grid>
                                </Grid>
                                <Grid item xs={3}>
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
                        </Grid>
                      </Grid>
                      <Grid item md={3} xs={12}>
                        <Grid item xs={12}>
                          <Box display={{xs: "none", md: "block"}}>
                            <div className={classes.divRel} />
                          </Box>
                        </Grid>
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
              <Grid
                container
                alignItems="center"
                direction="row"
                justify="space-between"
              >
                <h3 className={classes.title}>Historias clínicas</h3>
                {dataPet.clinical_history.length === 0 && user.id_role === 3 ? (
                  <Link
                    className={classes.ContentLink}
                    to={`/veterinary/add-clinical-history/${dataPet.id_pet}`}
                  >
                    <Button
                      className={classes.button}
                      color="secondary"
                      size="small"
                      type="submit"
                      variant="contained"
                    >
                      Agregar Historia
                    </Button>
                  </Link>
                ) : (
                  ""
                )}
              </Grid>
            </Grid>
            <Grid item xs={12}>
              {dataPet.clinical_history.length > 0 ? (
                <ListHistories histories={dataPet.clinical_history} />
              ) : (
                <Card className={classes.root}>
                  <Grid
                    container
                    alignItems="center"
                    direction="row"
                    justify="center"
                  >
                    <Grid item xs={12}>
                      <img
                        alt="ups algo salio mal."
                        className={classes.ups}
                        src="/assets/ups.svg"
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <Typography className={classes.noHistory} component="h3">
                        No hay historias clínicas registradas.
                      </Typography>
                    </Grid>
                  </Grid>
                </Card>
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
