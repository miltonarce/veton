import React from "react";
import {
  Container,
  CircularProgress,
} from "@material-ui/core";
import {withStyles, styled} from "@material-ui/core/styles";
import FormAppointment from "../../../Components/Forms/FormAppointment";
import {AppContext} from "../../../Store";
import ApiVet from "../../../Services/ApiVet";
import TitlePages from "../../../Components/TitlePages";
import ModalMsg from "../../../Components/Messages/ModalMsg";

const styles = {
  TitleAppointment: {
    fontWeight: 500,
    marginBottom: "1rem",
    textAlign: "center",
  },
};

class Appointment extends React.Component {
  state = {
    isLoading: false,
    hasError: null,
    msg: null,
    openModal: false,
  };

  handleOnSubmit = async request => {
    const {
      auth: {
        user: {id_user},
      },
    } = this.context;
    const requestAppointment = {...request, id_user};
    try {
      this.setState({...this.state, isLoading: true});
      const {
        data: {msg, success},
      } = await ApiVet.appointments.register(requestAppointment);
      if (success) {
        this.setState({
          ...this.state,
          isLoading: false,
          hasError: null,
          openModal: true,
          msg,
        });
        setTimeout(() => {
          this.setState({
            ...this.state,
            openModal: false,
          });
        }, 3000);
      } else {
        this.setState({
          ...this.state,
          isLoading: false,
          hasError: true,
          openModal: true,
          msg,
        });
        setTimeout(() => {
          this.setState({
            ...this.state,
            openModal: false,
          });
        }, 3000);
      }
    } catch (err) {
      this.setState({
        ...this.state,
        isLoading: false,
        hasError: true,
        openModal: true,
        msg: "Se produjo un error al reservar el turno",
      });
      setTimeout(() => {
        this.setState({
          ...this.state,
          openModal: false,
        });
      }, 3000);
    }
  };

  render() {
    const {
      handleOnSubmit,
      state: {isLoading, hasError, openModal, msg},
    } = this;
    return (
      <Container fixed>
        <TitlePages
          subtitle="Aquí podrás reservar un turno en cualquier veterinaria."
          title="Reserva de turnos"
        />
        <FormAppointment onSubmit={handleOnSubmit} />
        {!isLoading && openModal && <ModalMsg success={hasError === null} msg={msg} />}
        {isLoading && <CircularProgress color="secondary" />}
      </Container>
    );
  }
}

Appointment.contextType = AppContext;

export default withStyles(styles)(Appointment);
