import React, {Component} from "react";
import {withRouter, Link} from "react-router-dom";
import {Grid, Paper, CssBaseline, Typography} from "@material-ui/core";
import {withStyles} from "@material-ui/core/styles";
import {Api, Auth} from "../../../Services";
import {LoginForm} from "../../../Components/Auth";
import {ModalMsg, Spinner} from "../../../Components/Notifications";
import {AppContext} from "../../../Store";
import styles from "./styles";

// Roles by view
const ROLES = Api.roles.all();

class Login extends Component {
  state = {
    isLoading: false,
    hasError: null,
    openError: false,
  };

  /**
   * Method to handle submit form login
   * @param {object} request
   * @returns {void}
   */
  handleOnSubmit = async request => {
    const {state} = this;
    const {login} = this.context;
    const {history} = this.props;

    try {
      this.setState({...state, isLoading: true});
      const {
        data: {success, additional_info, msg},
      } = await Auth.login(request);
      if (success) {
        this.setState({...state, isLoading: false, hasError: null});
        login({logged: true, user: additional_info});
        const defaultView = ROLES[additional_info.id_role];
        history.push(`/${defaultView}`);
      } else {
        this.setState({
          ...state,
          isLoading: false,
          hasError: msg,
          openError: true,
        });
        setTimeout(() => {
          this.setState({
            ...state,
            openMsg: false,
          });
        }, 2000);
      }
    } catch (err) {
      this.setState({
        ...state,
        isLoading: false,
        openError: true,
        hasError: err,
      });
      setTimeout(() => {
        this.setState({
          ...state,
          openMsg: false,
        });
      }, 2000);
    }
  };

  render() {
    const {isLoading, openError, hasError} = this.state;
    const {handleOnSubmit} = this;
    const {classes} = this.props;
    return (
      <div className={classes.Content}>
        <CssBaseline />
        <Grid container alignItems="center" direction="row" justify="center">
          <Grid item lg={6} md={10} xs={10}>
            <Paper className={classes.PaperLogin}>
              <Grid
                container
                alignItems="center"
                direction="row"
                justify="space-around"
              >
                <Grid item component="aside" lg={5} md={8} xs={12}>
                  <figure>
                    <img
                      alt="Vet On, veterinaria online"
                      className={classes.Cimg1}
                      src="assets/Logo.svg"
                    />
                  </figure>
                  <figure>
                    <img
                      alt="Personas con mascotas y la marca Veton"
                      className={classes.Cimg2}
                      src="assets/login-resource1.svg"
                    />
                  </figure>
                </Grid>
                <Grid item component="section" lg={5} md={8} xs={12}>
                  <Typography
                    className={classes.TitleForm}
                    color="secondary"
                    component="h1"
                  >
                    Iniciar sesión
                  </Typography>
                  <div className={classes.ContentLogin}>
                    {isLoading ? (
                      <Spinner />
                    ) : (
                      <LoginForm onSubmit={handleOnSubmit} />
                    )}
                    {openError ? (
                      <ModalMsg hasSucces={false} msg={hasError} />
                    ) : (
                      ""
                    )}
                  </div>
                  <Grid item className={classes.LinkReg} md={12} xs={12}>
                    <Link to="/register">No tiene cuenta? Registrarse</Link>
                  </Grid>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
        </Grid>
      </div>
    );
  }
}

// Add context to get all data from provider...
Login.contextType = AppContext;

// Add router to handle history push go to other page...
export default withStyles(styles)(withRouter(props => <Login {...props} />));
