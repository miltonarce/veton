import React from "react";
import AppointmentDatePickerUser from "../../../Components/AppointmentDatePickerUser";
import PieConsultation from "../../../Components/PieConsultation";
import TitlePages from "../../../Components/TitlePages";
import {
  Container,
  Grid,
} from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import { AppContext } from "../../../Store";
import Api from "../../../Services/Api";

const styles = {
  title: {
    color: "#5C2299",
    paddingTop: "1rem",
    paddingBottom: "1rem",
  },
  ctn: {
    paddingTop: '20px !important'
  }
};

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
      const { auth: { user } } = this.context;
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
    const { auth: { user } } = this.context;
    return (
      <>
        <Container fixed style={{ padingTop: '20px !important' }}>
          <TitlePages
            subtitle="Aquí podrás encontrar información relevante sobre todas tus mascotas"
            title="Home"
          />
          <Grid container direction="row" justify="center" spacing={2} className={classes.paddingTop}>
            <Grid item xs={12} md={3} style={{ padding: '20px' }}>
              <AppointmentDatePickerUser idUser={user.id_user} />
            </Grid>
            <Grid item xs={12} md={9}>
              {statistics.length > 0 && <PieConsultation title="Cantidad de consultas" statistics={statistics} />}
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
