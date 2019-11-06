import React from "react";
import {CircularProgress, CssBaseline, Container} from "@material-ui/core";
import {withStyles} from "@material-ui/core/styles";
import ListPets from "../../../Components/ListPets";
import Api from "../../../Services/Api";

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
  };

  async componentDidUpdate(prevProps) {
    if (prevProps.userSelected !== this.props.userSelected) {
      await this.fetchPetsByUser(this.props.userSelected);
    }
  }

  fetchPetsByUser = async user => {
    try {
      this.setState({...this.state, isLoading: true, userSelected: user});
      const {data} = await Api.pets.fetch(user.id_user);
      this.setState({...this.state, petsByUser: data, isLoading: false});
    } catch (err) {
      this.setState({...this.state, petsByUser: [], isLoading: false});
    }
  };

  render() {
    const {petsByUser, isLoading, userSelected} = this.state;
    const {classes} = this.props;
    return (
      <>
        <CssBaseline />
        <Container fixed>
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
        </Container>
      </>
    );
  }
}

export default withStyles(styles)(HomeVet);
