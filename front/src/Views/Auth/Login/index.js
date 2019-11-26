import React, {Component} from "react";
import {withRouter, Link} from "react-router-dom";
import clsx from "clsx";
import {Grid, Paper, CssBaseline} from "@material-ui/core";
import {withStyles} from "@material-ui/core/styles";

import Api from "../../../Services/Api";
import Auth from "../../../Services/Auth";
import FormLogin from "../../../Components/Forms/FormLogin";
import {AppContext} from "../../../Store";
import Spinner from "../../../Components/Spinner";
import ModalMsg from "../../../Components/Messages/ModalMsg";

// Roles by view
const ROLES = Api.roles.all();

const styles = {
  Content: {
    height: "100vh",
    overflowY: "auto",
    display: "flex",
    backgroundImage: "url('assets/pattern-veton.jpg')",
    backgroundSize: "cover",
  },
  PaperLogin: {
    padding: "2rem",
    borderRadius: "23px",
  },
  ContentLogin: {
    marginTop: "2rem",
  },
  SpanError: {
    display: "flex",
    alignItems: "center",
  },
  Register: {
    marginTop: "1rem",
  },
};

class Login extends Component {
  state = {
    isLoading: false,
    hasError: null,
    openError: false,
  };

  /**
   * Method to handle when user close
   * @returns {void}
   */
  handleClose = () => {
    const {state} = this;
    this.setState({...state, openError: false});
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
        localStorage.setItem("userData", JSON.stringify(additional_info));
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
        }, 3000);
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
      }, 3000);
    }
  };

  render() {
    const {isLoading, openError, hasError} = this.state;
    const {handleOnSubmit, handleClose} = this;
    const {classes} = this.props;
    return (
      <div className={classes.Content}>
        <CssBaseline />
        <Grid container alignItems="center" direction="row" justify="center">
          <Grid item lg={3} md={6} xl={2} xs={10}>
            <Paper className={classes.PaperLogin}>
              <Grid item xs={12}>
                <img
                  alt="Logo vet On, veterinaria online"
                  src="assets/Logo.svg"
                />
              </Grid>
              <Grid item xs={12}>
                <div className={classes.ContentLogin}>
                  {isLoading ? (
                    <Spinner />
                  ) : (
                    <FormLogin onSubmit={handleOnSubmit} />
                  )}
                  {openError ? (
                    <ModalMsg hasSucces={false} msg={hasError} />
                  ) : (
                    ""
                  )}
                </div>
              </Grid>
              <Grid
                container
                alignItems="center"
                className={classes.Register}
                justify="center"
              >
                <Grid item md={12} xs={12}>
                  <Link to="/register">No tiene cuenta? Registrarse</Link>
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
