import React from "react";
import { Link } from "react-router-dom";
import { Add } from "@material-ui/icons";
import { withStyles } from "@material-ui/core/styles";
import { AppContext } from "../../../Store";
import { CssBaseline, Container, Button, Grid } from "@material-ui/core";
import { styled } from "@material-ui/core/styles";
import TitlePages from "../../../Components/TitlePages";
import Spinner from "../../../Components/Spinner";
import AppointmentList from "../../../Components/AppointmentList"
import Api from "../../../Services/Api";

const styles = {
    TitleAppointment: {
        fontWeight: 500,
        marginBottom: "1rem",
        textAlign: "center",
    },
};
//New custom components by styled hook...
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

    //Get all appointments history by user logged
    async componentDidMount() {
        const {
            auth: { user },
        } = this.context;
        try {
            this.setState({ ...this.state, isLoading: true });
            const { data: { success, data, msg } } = await Api.appointments.fetchByUser(user.id_user);
            if (success) {
                this.setState({ ...this.state, isLoading: false, appointments: data });
            } else {
                this.setState({ ...this.state, isLoading: false, appointments: [], error: msg });
            }
        } catch (err) {
            this.setState({ isLoading: false });
        }
    }

    /**
     * Method to handle when user is click on confirm dialog to cancel appointment
     * call delete method from API to cancel reservation
     * @param {number} idAppointment
     * @returns {void}
     */
    onClickCancelAppointment = async idAppointment => {
        const { auth: { user } } = this.context;
        try {
            this.setState({ ...this.state, isLoading: true });
            const { data : { success }} = await Api.appointments.cancel(user.id_user, idAppointment);
            if (success) {
                this.setState({ ...this.state, isLoading: false, appointments: this.removeAppointmentFromList(idAppointment) });
            } else {
                this.setState({ ...this.state, isLoading: false });
            }
        } catch (err) {
            this.setState({ isLoading: false });
        }
    }

    /**
     * Remove appointment from list
     * @param {number} idAppointment
     * @returns {object[]}
     */
    removeAppointmentFromList = idAppointment => {
        return this.state.appointments.filter(appointment => appointment.id_appointment !== idAppointment);
    }

    render() {
        const { onClickCancelAppointment } = this;
        const { isLoading, error, appointments } = this.state;
        return (
            <>
                <CssBaseline />
                <Container fixed>
                    <Grid item xs={12}>
                        <Grid
                            container
                            direction="row"
                            justify="space-between"
                            alignItems="center"
                        >
                            <Grid item xs={12} md={9}>
                                <TitlePages
                                    subtitle=" Aquí podrás ver todos los turnos que has realizado"
                                    title=" Mis turnos"
                                />
                            </Grid>
                            <Grid item xs={12} md={3}>
                                <Grid
                                    container
                                    direction="row"
                                    justify="center"
                                    alignItems="center"
                                >
                                    <AppointmentLink to="/user/add-appointment">
                                        <Button color="secondary" endIcon={<Add />} variant="contained">
                                            Reservar turno
                                        </Button>
                                    </AppointmentLink>

                                </Grid>
                            </Grid>
                        </Grid>
                        {isLoading && <Spinner />}
                        {!isLoading && error && <p>{error}</p>}
                        {appointments.length > 0 && <AppointmentList appointments={appointments} showCancelation={true} onClickCancelAppointment={onClickCancelAppointment} />}
                        {appointments.length === 0 && !isLoading && <p>No se has realizado ningún turno</p>}
                    </Grid>
                </Container>
            </>
        );
    }

}

Appointments.contextType = AppContext;

export default withStyles(styles)(Appointments);
