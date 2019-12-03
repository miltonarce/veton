import React from "react";
import {Link} from "react-router-dom";
import {Add} from "@material-ui/icons";
import {withStyles, styled} from "@material-ui/core/styles";
import { CssBaseline, Container, Button, Grid } from "@material-ui/core";
import { AppContext } from "../../../Store";

import TitlePages from "../../../Components/TitlePages";
import Spinner from "../../../Components/Spinner";
import AppointmentList from "../../../Components/AppointmentList";
import Api from "../../../Services/Api";

const styles = {
  TitleAppointment: {
    fontWeight: 500,
    marginBottom: "1rem",
    textAlign: "center",
  },
};
// New custom components by styled hook...
const AppointmentLink = styled(Link)({
  textDecoration: "none",
});

class Appointments extends React.Component {
  constructor() {
    super();
    this.state = {
      isLoading: false,
      appointments: [],
      error: null,
    };
  }

  // Get all appointments history by user logged
  async componentDidMount() {
    const {
      auth: {user},
    } = this.context;
    try {
      this.setState({...this.state, isLoading: true});
      const {
        data: {success, data, msg},
      } = await Api.appointments.fetchByUser(user.id_user);
      if (success) {
        this.setState({...this.state, isLoading: false, appointments: data});
      } else {
        this.setState({
          ...this.state,
          isLoading: false,
          appointments: [],
          error: msg,
        });
      }
    } catch (err) {
      this.setState({isLoading: false});
    }
  }

  /**
   * Method to handle when user is click on confirm dialog to cancel appointment
   * call delete method from API to cancel reservation
   * @param {number} idAppointment
   * @returns {void}
   */
  onClickCancelAppointment = async idAppointment => {
    const {
      auth: {user},
    } = this.context;
    try {
      this.setState({...this.state, isLoading: true});
      const {
        data: {success},
      } = await Api.appointments.cancel(user.id_user, idAppointment);
      if (success) {
        this.setState({
          ...this.state,
          isLoading: false,
          appointments: this.removeAppointmentFromList(idAppointment),
        });
      } else {
        this.setState({...this.state, isLoading: false});
      }
    } catch (err) {
      this.setState({isLoading: false});
    }
  };

  /**
   * Remove appointment from list
   * @param {number} idAppointment
   * @returns {object[]}
   */
  removeAppointmentFromList = idAppointment =>
    this.state.appointments.filter(
      appointment => appointment.id_appointment !== idAppointment
    );

  render() {
    const {onClickCancelAppointment} = this;
    const {isLoading, error, appointments} = this.state;
    return (
      <>
        <CssBaseline />
        <Container fixed>
          <Grid item xs={12}>
            <Grid
              container
              alignItems="center"
              direction="row"
              justify="space-between"
            >
              <Grid item md={9} xs={12}>
                <TitlePages
                  subtitle=" Aquí podrás ver todos los turnos que has realizado"
                  title=" Mis turnos"
                />
              </Grid>
              <Grid item md={3} xs={12}>
                <Grid
                  container
                  alignItems="center"
                  direction="row"
                  justify="center"
                >
                  <AppointmentLink to="/user/add-appointment">
                    <Button
                      color="secondary"
                      endIcon={<Add />}
                      variant="contained"
                    >
                      Reservar turno
                    </Button>
                  </AppointmentLink>
                </Grid>
              </Grid>
            </Grid>
            {isLoading && <Spinner />}
            {!isLoading && error && <p>{error}</p>}
            {appointments.length > 0 && (
              <AppointmentList
                appointments={appointments}
                showCancelation
                onClickCancelAppointment={onClickCancelAppointment}
              />
            )}
            {appointments.length === 0 && !isLoading && (
              <p>No se has realizado ningún turno</p>
            )}
          </Grid>
        </Container>
      </>
    );
  }
}

Appointments.contextType = AppContext;

export default withStyles(styles)(Appointments);
