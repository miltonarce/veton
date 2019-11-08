import React, {Component} from "react";
import {withRouter} from "react-router-dom";
import {
  Grid,
  Paper,
  CssBaseline,
  CircularProgress,
  Snackbar,
  SnackbarContent,
  IconButton,
} from "@material-ui/core";
import {Close, Error} from "@material-ui/icons";
import {styled} from "@material-ui/core/styles";
import Api from "../../../Services/Api";
import Auth from "../../../Services/Auth";
import FormLogin from "../../../Components/Forms/FormLogin";
import {AppContext} from "../../../Store";

// Roles by view
const ROLES = Api.roles.all();

// Wrapper new styled components...
const Content = styled("div")({
  height: "100vh",
  display: "flex",
  backgroundImage: "url('assets/pattern-veton.png')",
  backgroundSize: "cover",
});

const PaperLogin = styled(Paper)({
  padding: "3rem",
});

const ContentLogin = styled("div")({
  marginTop: "2rem",
});

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
        data: {success, additional_info},
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
          hasError: "Se produjo un error al autenticarse",
          openError: true,
        });
      }
    } catch (err) {
      this.setState({
        ...state,
        isLoading: false,
        openError: true,
        hasError: err,
      });
    }
  };

  render() {
    const {isLoading, hasError, openError} = this.state;
    const {handleOnSubmit, handleClose} = this;
    return (
      <Content>
        <CssBaseline />
        <Grid container alignItems="center" direction="row" justify="center">
          <Grid item md={3} xs={10}>
            <PaperLogin>
              <Grid item xs={12}>
                <img
                  alt="Logo vet On, veterinaria online"
                  src="assets/Logo.svg"
                />
              </Grid>
              <Grid item xs={12}>
                <ContentLogin>
                  {isLoading ? (
                    <CircularProgress color="secondary" />
                  ) : (
                    <FormLogin onSubmit={handleOnSubmit} />
                  )}
                  {openError ? (
                    <Snackbar
                      anchorOrigin={{vertical: "bottom", horizontal: "right"}}
                      autoHideDuration={6000}
                      open={openError}
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
                            {hasError}
                          </SpanError>
                        }
                      />
                    </Snackbar>
                  ) : (
                    ""
                  )}
                </ContentLogin>
              </Grid>
            </PaperLogin>
          </Grid>
        </Grid>
      </Content>
    );
  }
}

// Add context to get all data from provider...
Login.contextType = AppContext;

// Add router to handle history push go to other page...
export default withRouter(props => <Login {...props} />);
