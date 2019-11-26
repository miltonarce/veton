import React from "react";
import {Link} from "react-router-dom";
import {CssBaseline, Container, Button, Grid} from "@material-ui/core";
import {Add} from "@material-ui/icons";
import {styled} from "@material-ui/core/styles";
import Api from "../../../Services/Api";
import ListPets from "../../../Components/ListPets";
import {AppContext} from "../../../Store";
import TitlePages from "../../../Components/TitlePages";
import Spinner from "../../../Components/Spinner";

//New custom components by styled hook...
const PetLink = styled(Link)({
  textDecoration: "none",
});
const ContainerMain = styled("div")({
  marginTop: "2rem",
});

class Pets extends React.Component {
  constructor() {
    super();
    this.state = {
      petsList: [],
      isLoading: false,
      error: null,
    };
  }

  //Get all pets by user
  async componentDidMount() {
    const {
      auth: {user},
    } = this.context;

    const {state} = this;

    try {
      this.setState({...state, isLoading: true});
      const pets = await Api.pets.fetch(user.id_user);
      this.setState({...state, isLoading: false, petsList: pets.data});
    } catch (err) {
      this.setState({isLoading: false});
    }
  }

  render() {
    const {petsList, isLoading} = this.state;
    return (
      <>
        <CssBaseline />
        <Container fixed>
          <Grid item xs={12}>
            <Grid
             container
             direction="row"
             justify="space-between"
             alignItems="center"
            >
              <Grid item xs={12} md={9}>

              <TitlePages
            subtitle=" Aquí podrás encontrar información rápida de tus mascotas y cargar
            nuevas."
            title=" Mis mascotas"
          />
              </Grid>
              <Grid item xs={12} md={3}>
                <Grid
                container
                direction="row"
                justify="center"
                alignItems="center"
                >
                  
              <PetLink to="/user/add-pet">
            <Button color="secondary" endIcon={<Add />} variant="contained">
              Agregar mascota
            </Button>
                  </PetLink>
                  
                </Grid>
              </Grid>
            </Grid>
          </Grid>

          {petsList.length > 0 ? (
            <ContainerMain>
              <ListPets pets={petsList} />
            </ContainerMain>
          ) : (
            <ContainerMain>
              <p>No tenes registrado ninguna mascota</p>
            </ContainerMain>
          )}
        </Container>
      </>
    );
  }
}

//Add context to get all data from provider...
Pets.contextType = AppContext;

export default Pets;
