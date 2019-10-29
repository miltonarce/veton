import React from "react";
import PropTypes from "prop-types";
import { Link, withRouter } from "react-router-dom";
import { CssBaseline, Container, Typography, Button } from '@material-ui/core';
import { Add } from '@material-ui/icons';
import { styled } from '@material-ui/core/styles';

import Api from "../../../Services/Api";
import ListPets from "../../../Components/ListPets";
import { AppContext } from "../../../Store";

const PetLink = styled(Link)({
  textDecoration: "none",
  margin: "1rem",
});

const ContainerMain = styled('div')({
  margin: "2rem",
})
const ContainerTypo = styled(Typography)({
  margin: "2rem",
  fontSize: "2rem",
  color: "#5c2299",
})

class Pets extends React.Component {
  constructor() {
    super();
    this.state = {
      petsList: [],
      isLoading: false,
      error: null
    };
  }

  async componentDidMount() {
    const { auth: { user } } = this.context;
    try {
      this.setState({ ...this.state, isLoading: true });
      const pets = await Api.pets.fetch(user.id_user);
      this.setState({ ...this.state, isLoading: false, petsList: pets.data });
    } catch (err) {
      this.setState({ isLoading: false });
    }
  }

  render() {
    const { petsList, isLoading } = this.state;
    if (isLoading)
      return (
        <div className="veton-container-spinner">
          <div>
            Spinner
          </div>
        </div>
      );
    return (
      <>
        <CssBaseline />
        <Container fixed>
          <ContainerTypo variant="h2" component="h2">Mis mascotas</ContainerTypo>
          <PetLink to="/user/add-pet">
            <Button
              variant="contained"
              color="secondary"
              endIcon={<Add />}
            >
              Agregar mascota
              </Button>
          </PetLink>

          {petsList.length > 0 ? (
            <ContainerMain><ListPets pets={petsList} /></ContainerMain>
          ) : (
              <ContainerMain><p>No tenes registrado ninguna mascota</p></ContainerMain>
            )}
        </Container>
      </>
    );
  }
}

Pets.contextType = AppContext;

export default Pets;
