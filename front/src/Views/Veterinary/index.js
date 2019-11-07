import React from "react";
import {Route} from "react-router-dom";
import {CssBaseline} from "@material-ui/core";
import {styled} from "@material-ui/core/styles";

// Veterinary all Views
import HomeVet from "./HomeVet";
import AddClinicalHistory from "./AddClinicalHistory";
import AddConsultation from "./AddConsultation";
import Header from "../../Components/Shared/Veterinary/Header";
import PetDetail from "./PetDetail";

const ContentMain = styled("div")({
  width: "100%",
  top: "0",
  bottom: "0",
  position: "absolute",
  backgroundImage: "url('assets/pattern-veton.jpg')",
});

class Veterinary extends React.Component {
  state = {
    userSelected: null,
  };

  /**
   * Method to handle when user select any user from autocomplete component
   * @param {object} userSelected
   * @returns {void}
   */
  handleOnUserSelected = userSelected =>
    this.setState({...this.state, userSelected});

  render() {
    const {
      props: {match},
      handleOnUserSelected,
      state: {userSelected},
    } = this;
    return (
      <ContentMain>
        <CssBaseline />
        <Header onUserSelected={handleOnUserSelected} />
        <Route
          exact
          path={match.path}
          render={() => <HomeVet userSelected={userSelected} />}
        />
        <Route
          component={AddClinicalHistory}
          path={`${match.path}/add-clinical-history/:idPet`}
        />
        <Route component={PetDetail} path={`${match.path}/pet/:id`} />
        <Route
          component={AddConsultation}
          path={`${match.path}/add-consultation/:idHistory`}
        />
      </ContentMain>
    );
  }
}

export default Veterinary;
