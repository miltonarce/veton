import React from "react";
import {
  Container,
  Typography,
  CircularProgress,
  Snackbar,
  SnackbarContent,
  IconButton,
} from "@material-ui/core";
import {
  Error,
  Close
} from "@material-ui/icons";
import { withStyles } from "@material-ui/core/styles";
import AlertMsg from "../../../Components/Messages/AlertMsg";
import FormAppointment from "../../../Components/Forms/FormAppointment";
import { AppContext } from "../../../Store";
import ApiVet from "../../../Services/ApiVet";
import { styled } from "@material-ui/core/styles";

const styles = {
  TitleAppointment: {
    fontWeight: 500,
    marginBottom: "1rem",
    textAlign: "center",
  },
};

const SnackError = styled(SnackbarContent)({
  backgroundColor: "#D32F2F",
});

const SpanError = styled("span")({
  display: "flex",
  alignItems: "center",
});

const ErrorIconSnack = styled(Error)({
  marginRight: ".5rem",
});

class Appointment extends React.Component {

  state = {
    isLoading: false,
    statusAppointment: {},
  }

  handleOnSubmit = async request => {
    const { auth: { user: { id_user } } } = this.context;
    const requestAppointment = { ...request, id_user };
    try {
      this.setState({ ...this.state, isLoading: true });
      const { data: { msg, success } } = await ApiVet.appointments.register(requestAppointment);
      this.setState({ ...this.state, isLoading: false, statusAppointment: { msg, success } });
    } catch (err) {
      this.setState({ ...this.state, isLoading: false, statusAppointment: { msg: "Se produjo un error al reservar el turno", success: false } });
    }
  }

  /**
   * Method to handle user close...
   * @returns {void}
   */
  handleClose = () => {
    const { state } = this;
    this.setState({ ...state, openError: false });
  };


  render() {
    const { props: { classes }, handleOnSubmit, handleClose, state: { isLoading, statusAppointment } } = this;
    return (
      <Container fixed>
        <Typography
          className={classes.TitleAppointment}
          color="primary"
          component="h1"
        >
          Reservá tu turno, es muy fácil
        </Typography>
        <FormAppointment onSubmit={handleOnSubmit} />
        {!isLoading && statusAppointment.success && <AlertMsg hasSuccess={statusAppointment.success} msg={statusAppointment.msg} />}
        {!isLoading && <Snackbar
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "right",
          }}
          autoHideDuration={6000}
          open={statusAppointment.success === false}
          onClose={handleClose}
        >
          <SnackError
            action={
              <IconButton
                aria-label="close"
                color="inherit"
                onClick={handleClose}
              >
                <Close />
              </IconButton>
            }
            message={
              <SpanError>
                <ErrorIconSnack />
                {statusAppointment.msg}
              </SpanError>
            }
          />
        </Snackbar>}
        {isLoading && <CircularProgress color="secondary" />}
      </Container>
    );
  }
}

Appointment.contextType = AppContext;

export default withStyles(styles)(Appointment);