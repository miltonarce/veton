import React from "react";
import {Link} from "react-router-dom";
import {CssBaseline, Container, Button, CircularProgress} from "@material-ui/core";
import {Add} from "@material-ui/icons";
import {styled} from "@material-ui/core/styles";

import Api from "../../../Services/Api";
import ListPets from "../../../Components/ListPets";
import {AppContext} from "../../../Store";
import TitlePages from "../../../Components/TitlePages";

const PetLink = styled(Link)({
  textDecoration: "none",
  margin: "1rem",
});

const ContainerMain = styled("div")({
  margin: "2rem",
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

  async componentDidMount() {
    const {
      auth: {user},
    } = this.context;

    const {state} = this;

    try {
      this.setState({...state, isLoading: true});
      const pets = await Api.pets.fetch(user.id_user);
      console.log(pets);
      this.setState({...state, isLoading: false, petsList: pets.data});
    } catch (err) {
      this.setState({isLoading: false});
    }
  }

  render() {
    const {petsList, isLoading} = this.state;
    if (isLoading)
      return (
        <>
        <CssBaseline />
        <Container fixed>
            <CircularProgress color="secondary" />
            </Container>
        </>
      );
    return (
      <>
        <CssBaseline />
        <Container fixed>
        <TitlePages
            subtitle=" Aquí podrás encontrar información rápida de tus mascotas y cargar
            nuevas."
            title=" Mis mascotas"
          />
          <PetLink to="/user/add-pet">
            <Button color="secondary" endIcon={<Add />} variant="contained">
              Agregar mascota
            </Button>
          </PetLink>

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

Pets.contextType = AppContext;

export default Pets;
