import React from "react";
import {
  Container,
  Typography,
} from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import FormAppointment from "../../../Components/Forms/FormAppointment";
import { AppContext } from "../../../Store";
import ApiVet from "../../../Services/ApiVet";

const styles = {
  TitleAppointment: {
    fontWeight: 500,
    marginBottom: "1rem",
    textAlign: "center",
  },
};

class Appointment extends React.Component {

  handleOnSubmit = async request => {
    const { auth: { user: { id_user } } } = this.context;
    const requestAppointment = { ...request, fk_id_user: id_user };
    try {
      const { data } = await ApiVet.appointments.register(requestAppointment);
      if (data.success) {
        alert(data.msg);
      } else {
        alert(data.msg);
      }
    } catch (err) {
      console.error('err al registrar el turno...', err);
    }
  }

  render() {
    const { props: { classes }, handleOnSubmit } = this;
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
      </Container>
    );
  }
}

Appointment.contextType = AppContext;

export default withStyles(styles)(Appointment);