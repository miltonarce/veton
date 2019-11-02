import React from "react";
import {Link} from "react-router-dom";
import {CssBaseline, Container, Typography, Button} from "@material-ui/core";
import {Add} from "@material-ui/icons";
import {styled} from "@material-ui/core/styles";

import Api from "../../../Services/Api";
import ListPets from "../../../Components/ListPets";
import {AppContext} from "../../../Store";

const PetLink = styled(Link)({
  textDecoration: "none",
  margin: "1rem",
});

const ContainerMain = styled("div")({
  margin: "2rem",
});
const ContainerTypo = styled(Typography)({
  margin: "2rem",
  fontSize: "2rem",
  color: "#5c2299",
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
      this.setState({...state, isLoading: false, petsList: pets.data});
    } catch (err) {
      this.setState({isLoading: false});
    }
  }

  render() {
    const {petsList, isLoading} = this.state;
    if (isLoading)
      return (
        <div className="veton-container-spinner">
          <div>Spinner</div>
        </div>
      );
    return (
      <>
        <CssBaseline />
        <Container fixed>
          <ContainerTypo component="h2" variant="h2">
            Mis mascotas
          </ContainerTypo>
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
