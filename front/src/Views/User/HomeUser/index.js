import React from "react";
import { Container, Grid } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import { AppointmentDatePickerUser } from "../../../Components/Appointments";
import { PieConsultation } from "../../../Components/Consultations";
import TitlePages from "../../../Components/Shared/TitlePages";
import { AppContext } from "../../../Store";
import { Api } from "../../../Services";
import styles from "./styles";

class HomeUser extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
      statistics: [],
    };
  }

  async componentDidMount() {
    try {
      this.setState({ ...this.state, isLoading: true });
      const {
        auth: { user },
      } = this.context;
      const { data } = await Api.statistics.fetch(user.id_user);
      if (data.success) {
        this.setState({ ...this.state, statistics: data.data });
      } else {
        this.setState({ ...this.state, statistics: [] });
      }
    } catch (err) {
      this.setState({ ...this.state, statistics: [] });
    }
  }

  render() {
    const { statistics } = this.state;
    const { classes } = this.props;
    const {
      auth: { user },
    } = this.context;
    return (
      <>
        <Container fixed style={{ padingTop: "20px !important" }} component="section">
          <TitlePages
            subtitle="Aquí podrás encontrar información relevante sobre todas tus mascotas"
            title="Inicio"
          />
          <Grid
            container
            className={classes.paddingTop}
            direction="row"
            justify="center"
            spacing={2}
          >
            <Grid item md={3} style={{ padding: "20px" }} xs={12} component="aside">
              <AppointmentDatePickerUser idUser={user.id_user} />
            </Grid>
            <Grid item md={9} xs={12}>
              {statistics.length > 0 ? (
                <PieConsultation
                  statistics={statistics}
                  title="Cantidad de consultas"
                />
              ) : (
                  <section className={classes.marginNot}>
                    <p>No hay mascotas registradas para mostrar estadisticas.</p>
                  </section>
                )}
            </Grid>
          </Grid>
        </Container>
      </>
    );
  }
}

// Add context to get all data from provider...
HomeUser.contextType = AppContext;

export default withStyles(styles)(HomeUser);
