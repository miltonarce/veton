import React from "react";
import {Route} from "react-router-dom";
import {CssBaseline} from "@material-ui/core";
import {styled} from "@material-ui/core/styles";

// User all Views
import HomeUser from "./HomeUser";
import Profile from "./Profile";
import Pets from "./Pets";
import PetDetail from "./PetDetail";
import AddPet from "./AddPet";
import Appointments from "./Appointments";
import AddAppointment from "./AddAppointment";
import Header from "../../Components/Shared/Header";
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

class User extends React.Component {
  render() {
    const {match} = this.props;
    return (
      <ContentMain>
        <CssBaseline />
        <Header />
        <ContainerMain>
          <Route exact component={HomeUser} path={match.path} />
          <Route component={Pets} path={`${match.path}/pets`} />
          <Route component={PetDetail} path={`${match.path}/pet/:id`} />
          <Route component={Profile} path={`${match.path}/profile`} />
          <Route component={AddPet} path={`${match.path}/add-pet`} />
          <Route component={Appointments} path={`${match.path}/appointments`} />
          <Route
            component={AddAppointment}
            path={`${match.path}/add-appointment`}
          />
        </ContainerMain>
        <Footer />
      </ContentMain>
    );
  }
}

export default User;
