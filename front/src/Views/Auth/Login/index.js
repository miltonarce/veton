import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { Grid, Paper, CssBaseline, CircularProgress, Snackbar, SnackbarContent, IconButton } from '@material-ui/core';
import { Close, Error } from '@material-ui/icons';
import { styled } from '@material-ui/core/styles';

import Api from "../../../Services/Api";
import Auth from "../../../Services/Auth";
import FormLogin from "../../../Components/Forms/FormLogin";
import { AppContext } from "../../../Store";


// Roles by view
const ROLES = Api.roles.all();

const Content = styled('div')({
  height: "100vh",
  display: 'flex',
  backgroundImage: "url('assets/background_kitty.png')",
});


const PaperLogin = styled(Paper)({
  padding: "3rem",
});

const ContentLogin = styled('div')({
  marginTop: "2rem"
})

const SnackError = styled(SnackbarContent)({
  backgroundColor: "#D32F2F",
})

const SpanError = styled('span')({
  display: 'flex',
  alignItems: 'center',
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

  handleClose = () => {
    this.setState({ ...this.state, openError: false })
  }

  handleOnSubmit = async request => {
    try {
      this.setState({ ...this.state, isLoading: true });
      const { data: { success, additional_info, msg } } = await Auth.login(request);
      if (success) {
        this.setState({ ...this.state, isLoading: false, hasError: null });
        this.context.login({ logged: true, user: additional_info });
        const defaultView = ROLES[additional_info.id_role];
        this.props.history.push(`/${defaultView}`);
      } else {
        this.setState({
          ...this.state,
          isLoading: false,
          hasError: "Se produjo un error al autenticarse",
          openError: true,
        });
      }
    } catch (err) {
      this.setState({
        ...this.state,
        isLoading: false,
        openError: true,
        hasError: err,
      });
    }
  }

  render() {
    const { isLoading, hasError, openError } = this.state;
    const { handleOnSubmit, handleClose } = this;
    return (
      <Content>
        <CssBaseline />
        <Grid
          container
          direction="row"
          justify="center"
          alignItems="center"
        >
          <Grid item xs={10} md={3}>
            <PaperLogin>
              <Grid item xs={12}>
                <img src="assets/Logo.svg" alt="Logo vet On, veterinaria online" />
              </Grid>
              <Grid item xs={12}>
                <ContentLogin>
                  {isLoading ?
                    <CircularProgress color="secondary" /> :
                    <FormLogin onSubmit={handleOnSubmit} />
                  }
                  {openError ?
                    <Snackbar open={openError} autoHideDuration={6000} onClose={handleClose} anchorOrigin={{ vertical: 'bottom', horizontal: 'right', }} >
                      <SnackError message={<SpanError><ErrorIconSnack />{hasError}</SpanError>} action={<IconButton aria-label="close" color="inherit" onClick={handleClose}><Close /></IconButton>} />
                    </Snackbar> : ''}
                </ContentLogin>
              </Grid>
            </PaperLogin>
          </Grid>
        </Grid>
      </Content>
    );
  }
}

Login.contextType = AppContext;

export default withRouter(props => <Login {...props} />);
