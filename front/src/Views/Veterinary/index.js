import React from "react";
import {Route} from "react-router-dom";
import {CssBaseline} from "@material-ui/core";
import {styled} from "@material-ui/core/styles";

// Veterinary all Views
import HomeVet from "./HomeVet";
import AddClinicalHistory from "./AddClinicalHistory";
import AddConsultation from "./AddConsultation";
import EditConsultation from "./EditConsultation";
import EditHistory from "./EditHistory";
import Header from "../../Components/Shared/Veterinary/Header";
import PetDetail from "./PetDetail";
import Profile from "./Profile";
import Footer from "../../Components/Shared/Footer";

const ContentMain = styled("div")({
  width: "100%",
  top: "0",
  bottom: "0",
  position: "absolute",
  height: "100vh",
  overflowX: "hidden",
  backgroundImage: "url('assets/pattern-veton2.png')",
  backgroundSize: "cover",
});

const ContainerMain = styled("main")({
  height: "auto",
  minHeight: "-webkit-fill-available",
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
        <ContainerMain>
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
          <Route
            component={EditConsultation}
            path={`${match.path}/edit-consultation/:idConsultation`}
          />
          <Route
            component={EditHistory}
            path={`${match.path}/edit-history/:idHistory`}
          />
          <Route component={Profile} path={`${match.path}/profile`} />
        </ContainerMain>
        <Footer />
      </ContentMain>
    );
  }
}

export default Veterinary;
