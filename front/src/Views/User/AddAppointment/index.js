import React from "react";
import { Container } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import { AppointmentForm } from "../../../Components/Appointments";
import { ModalMsg } from "../../../Components/Notifications";
import { AppContext } from "../../../Store";
import { Api } from "../../../Services";
import TitlePages from "../../../Components/Shared/TitlePages";
import { withRouter } from "react-router-dom";
import styles from "./styles";

class AddAppointment extends React.Component {
  state = {
    isLoading: false,
    hasError: null,
    msg: null,
    openModal: false,
  };

  handleOnSubmit = async request => {
    const {
      auth: {
        user: { id_user },
      },
    } = this.context;
    const requestAppointment = { ...request, id_user };
    try {
      this.setState({ ...this.state, isLoading: true });
      const {
        data: { msg, success },
      } = await Api.appointments.register(requestAppointment);
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
          this.props.history.push(`/user/appointments`);
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
      state: { isLoading, hasError, openModal, msg },
    } = this;
    return (
      <Container fixed>
        <TitlePages
          subtitle="Aquí podrás reservar un turno en cualquier veterinaria."
          title="Reserva de turnos"
        />
        <AppointmentForm onSubmit={handleOnSubmit} />
        {!isLoading && openModal && <ModalMsg success={hasError === null} msg={msg} />}
      </Container>
    );
  }
}

AddAppointment.contextType = AppContext;

export default withStyles(styles)(withRouter(props => <AddAppointment {...props} />));
