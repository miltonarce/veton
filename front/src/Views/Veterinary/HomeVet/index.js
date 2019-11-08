import React from "react";
import { CircularProgress, CssBaseline, Container, Grid } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import ListPets from "../../../Components/ListPets";
import LastPetsByVet from "../../../Components/LastPetsByVet";
import Api from "../../../Services/Api";
import {AppContext} from "../../../Store";

//All classes by component
const styles = {
  title: {
    color: "#5C2299",
    paddingTop: "1rem",
    paddingBottom: "1rem",
  },
};

class HomeVet extends React.Component {
  state = {
    isLoading: false,
    petsByUser: [],
    userSelected: null,
    lastPetsAttended: [],
    isLoadingLastPets: false,
  };

  //If change prop userSelected, fetch again pets by the new user...
  async componentDidUpdate(prevProps) {
    if (prevProps.userSelected !== this.props.userSelected) {
      await this.fetchPetsByUser(this.props.userSelected);
    }
  }

  //Retrieve the last pets atendend by veterinary...
  async componentDidMount() {
    try {
      const {
        auth: {user},
      } = this.context;
      this.setState({ ...this.state, isLoadingLastPets: true });
      const { data: { success, pets } } = await Api.pets.lastPetsByVet(user.id_user);
      if (success) {
        this.setState({ ...this.state, isLoadingLastPets: false, lastPetsAttended: pets });
      } else {
        this.setState({ ...this.state, isLoadingLastPets: false, lastPetsAttended: [] });
      }
    } catch (err) {
      console.error('err', err);
      this.setState({ ...this.state, isLoadingLastPets: false, lastPetsAttended: [] });
    }
  }

  /**
   * Method to fetch pets by user_id
   * @param {object} user
   * @returns {void}
   */
  fetchPetsByUser = async user => {
    try {
      this.setState({ ...this.state, isLoading: true, userSelected: user });
      const { data } = await Api.pets.fetch(user.id_user);
      this.setState({ ...this.state, petsByUser: data, isLoading: false });
    } catch (err) {
      this.setState({ ...this.state, petsByUser: [], isLoading: false });
    }
  };

  render() {
    const { petsByUser, isLoading, userSelected, isLoadingLastPets, lastPetsAttended } = this.state;
    const { classes } = this.props;
    return (
      <>
        <CssBaseline />
        <Container fixed>
          <Grid
            container
            direction="row"
            spacing={2}
            justify="center"
          >
            <Grid item xs={6}>
              <h2 className={classes.title}>
                Últimas consultas realizadas
            </h2>
              {isLoadingLastPets && <CircularProgress />}
              {!isLoadingLastPets && lastPetsAttended.length > 0 && <LastPetsByVet pets={lastPetsAttended} />}
              {!isLoadingLastPets && lastPetsAttended.length === 0 && (
                <p>No existen consultas registradas esta semana</p>
              )}

            </Grid>
            <Grid item xs={5} justify="center">
              {userSelected && (
                <div>
                  <h2 className={classes.title}>
                    Mascotas del usuario {userSelected.name}
                  </h2>
                  {isLoading && <CircularProgress />}
                  {!isLoading && petsByUser.length > 0 && (
                    <ListPets pets={petsByUser} />
                  )}
                  {!isLoading && petsByUser.length === 0 && (
                    <p>No existen mascotas registradas</p>
                  )}
                </div>
              )}

            </Grid>
          </Grid>
        </Container>
      </>
    );
  }
}

//Add context to get all data from provider...
HomeVet.contextType = AppContext;

export default withStyles(styles)(HomeVet);
