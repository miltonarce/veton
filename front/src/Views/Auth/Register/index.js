import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import {
  Grid, Paper, CssBaseline, CircularProgress, Snackbar, Button, SnackbarContent,
  IconButton, Typography, Stepper, Step, StepConnector, StepLabel, List, ListItem, ListItemText,
  ListItemAvatar, Avatar
} from '@material-ui/core';
import {
  Check, CallSplit, Email, FeaturedPlayList, Lock, Error, Close,
  BusinessCenter, MyLocation, Apartment, Phone, AspectRatio
} from '@material-ui/icons';
import { styled, makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';

import RolSelect from "../../../Components/Forms/RolSelect";
import FormRegistarVeterinary from "../../../Components/Forms/FormRegisterVeterinary";
import FormRegisterUser from "../../../Components/Forms/FormRegisterUser";
import Auth from "../../../Services/Auth";

const Content = styled('div')({
  height: "100vh",
  display: 'flex',
  backgroundImage: "url('assets/background_kitty.png')",
});


const PaperLogin = styled(Paper)({
  padding: "3rem",
});

const RegisterStepper = styled(Stepper)({
  padding: "0rem",
});

const TitleRegister = styled(Typography)({
  padding: "1rem",
  textAlign: "center",
  fontSize: "2rem",
});

const GridFormC = styled(Grid)({
  marginTop: "3rem",
});

const ButtonBack = styled(Button)({
  marginRight: "1rem",
});

const TextFinishRegister = styled(Typography)({
  textAlign: "center",
  color: "#43A047",
  border: "1px solid #43A047",
  padding: "1rem",
  borderRadius: "2rem",
  marginTop: "2rem",
});

const TextDataRegister = styled(Typography)({
  textAlign: "center",
  color: "#544b59",
});

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

const QontoConnector = styled(StepConnector)({
  alternativeLabel: {
    top: 10,
    left: 'calc(-50% + 16px)',
    right: 'calc(50% + 16px)',
  },
  active: {
    '& $line': {
      borderColor: '#784af4',
    },
  },
  completed: {
    '& $line': {
      borderColor: '#784af4',
    },
  },
  line: {
    borderColor: '#eaeaf0',
    borderTopWidth: 3,
    borderRadius: 1,
  },
});

const useQontoStepIconStyles = makeStyles({
  root: {
    color: '#eaeaf0',
    display: 'flex',
    height: 22,
    alignItems: 'center',
  },
  active: {
    color: '#784af4',
  },
  circle: {
    width: 8,
    height: 8,
    borderRadius: '50%',
    backgroundColor: 'currentColor',
  },
  completed: {
    color: '#784af4',
    zIndex: 1,
    fontSize: 18,
  },
});

const StaticListData = props => <>
  <List>
    <Grid container>
      <Grid item xs={6}>
        <ListItem>
          <ListItemAvatar>
            <Avatar>
              <CallSplit />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary="Tipo de usuario" secondary={props.data.id_role === 4 ? "Usuario" : "Veterinaria"} />
        </ListItem>
      </Grid>
      <Grid item xs={6}>
        <ListItem>
          <ListItemAvatar>
            <Avatar>
              <Email />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary="Email" secondary={props.data.email} />
        </ListItem>
      </Grid>
    </Grid>
    <Grid container>
      <Grid item xs={6}>
        <ListItem>
          <ListItemAvatar>
            <Avatar>
              <Lock />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary="Contraseña" secondary="**********" />
        </ListItem>
      </Grid>
      <Grid item xs={6}>
        <ListItem>
          <ListItemAvatar>
            <Avatar>
              <FeaturedPlayList />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary="Dni" secondary={props.data.dni} />
        </ListItem>
      </Grid>
    </Grid>
    {props.data.id_role === 2 ?
      <>
        <Grid container>
          <Grid item xs={6}>
            <ListItem>
              <ListItemAvatar>
                <Avatar>
                  <BusinessCenter />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary="Nombre de su empresa" secondary={props.data.business_name} />
            </ListItem>
          </Grid>
          <Grid item xs={6}>
            <ListItem>
              <ListItemAvatar>
                <Avatar>
                  <Apartment />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary="Nombre de fantasía" secondary={props.data.fantasy_name} />
            </ListItem>
          </Grid>
        </Grid>
        <Grid container>
          <Grid item xs={6}>
            <ListItem>
              <ListItemAvatar>
                <Avatar>
                  <AspectRatio />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary="CUIT / CUIL" secondary={props.data.cuit_cuil} />
            </ListItem>
          </Grid>
          <Grid item xs={6}>
            <ListItem>
              <ListItemAvatar>
                <Avatar>
                  <Phone />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary="Número de teléfono" secondary={props.data.phone1} />
            </ListItem>
          </Grid>
        </Grid>
        <Grid container>
          <Grid item xs={6}>
            <ListItem>
              <ListItemAvatar>
                <Avatar>
                  <MyLocation />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary="Domicilio" secondary={props.data.street} />
            </ListItem>
          </Grid>
        </Grid>
      </>
      : ''}
  </List>
</>;

class Register extends Component {
  state = {
    isLoading: false,
    hasError: null,
    openError: false,
    id_role: 4,
    steps: ['Seleccione el tipo de usuario.', 'Ingrese sus datos.', 'Confirmar datos.'],
    activeStep: 0,
    dataRegister: {},
    disabled: true,
  };

  handleNext = () => {
    this.setState({ ...this.state, activeStep: this.state.activeStep + 1 });
  };

  handleBack = () => {
    this.setState({ ...this.state, activeStep: this.state.activeStep - 1 });
  };

  handleClose = () => {
    this.setState({ ...this.state, openError: false })
  }

  QontoStepIcon = props => {
    const classes = useQontoStepIconStyles();
    const { active, completed } = props;
    return (
      <div
        className={clsx(classes.root, {
          [classes.active]: active,
        })}
      >
        {completed ? <Check className={classes.completed} /> : <div className={classes.circle} />}
      </div>
    );
  }
  getStepContent = step => {
    switch (step) {
      case 0:
        return <RolSelect initialValue={this.state.id_role} onRolSelected={this.handleOnRolSelected} onSetNext={val => { this.setState({ disabled: false }) }} />;
      case 1:
        return <>{this.state.id_role === 4 && (
          <div><TextDataRegister variant="body2" gutterBottom>Datos personales</TextDataRegister><FormRegisterUser onSubmit={this.handleFinish} idRole={this.state.id_role} /></div>
        )}
          {this.state.id_role === 2 && (
            <FormRegistarVeterinary onSubmit={this.handleFinish} idRole={this.state.id_role} />
          )}</>;
      case 2:
        return <StaticListData data={this.state.dataRegister} />;
      default:
        return 'Unknown step';
    }
  }

  handleOnRolSelected = id_role => {
    this.setState({ ...this.state, id_role });
  }

  handleFinish = data => {
    this.setState({ ...this.state, dataRegister: data.data, disabled: data.disabled });
  }

  handleOnSubmitRegister = async () => {
    try {
      this.setState({ ...this.state, isLoading: true });
      console.log(this.state.dataRegister);
      const {
        data: { success, msg }
      } = await Auth.register(this.state.dataRegister);
      if (success) {
        this.setState({ ...this.state, isLoading: false, activeStep: this.state.activeStep + 1 });
        setTimeout(() => {
          this.props.history.push(`/`);
        }, 3000);
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
        hasError: "Se produjo un error al registarse",
        openError: true,
      });
    }
  }

  render() {
    const { id_role, hasError, isLoading, steps, activeStep, disabled, dataRegister, openError } = this.state;
    const { handleOnSubmitRegister, handleOnRolSelected, QontoStepIcon, getStepContent, handleNext, handleBack, handleClose } = this;
    return (
      <Content>
        <CssBaseline />
        <Grid
          container
          direction="row"
          justify="center"
          alignItems="center"
        >
          <Grid item xs={10} md={6}>
            <PaperLogin>
              <Grid item xs={6} style={{ margin: '0px auto' }}>
                <img src="assets/Logo.svg" alt="Logo vet On, veterinaria online" />
              </Grid>
              <Grid item xs={12}>
                <TitleRegister variant="body2" color="secondary" gutterBottom>
                  Registro
              </TitleRegister>
              </Grid>
              <Grid item xs={12}>
                <RegisterStepper alternativeLabel activeStep={activeStep} connector={<QontoConnector />}>
                  {steps.map(label => (
                    <Step key={label}>
                      <StepLabel StepIconComponent={QontoStepIcon}>{label}</StepLabel>
                    </Step>
                  ))}
                </RegisterStepper>
              </Grid>
              <Grid item xs={12}>
                <div>
                  {activeStep === steps.length ? (
                    <div>
                      <TextFinishRegister>
                        Su registro se ha realizado exitosamente...
                      </TextFinishRegister>
                    </div>
                  ) : (
                      <Grid item xs={12}>
                        <Grid container direction="row" justify="center" alignItems="center" >
                          <GridFormC item xs={12}>{getStepContent(activeStep)}</GridFormC>
                          <Grid item item xs={12}>
                            <GridFormC container alignItems="center" justify="flex-end">
                              {isLoading ? <CircularProgress color="secondary" /> :
                                <><ButtonBack disabled={activeStep === 0} onClick={handleBack}>
                                  Atras
                                </ButtonBack>
                                  <Button
                                    disabled={disabled}
                                    variant="contained"
                                    color="primary"
                                    onClick={activeStep === 2 ? handleOnSubmitRegister : handleNext}
                                  >
                                    {activeStep === steps.length - 1 ? 'Finalizar' : 'Siguiente'}
                                  </Button></>
                              }
                              {openError ?
                                <Snackbar open={openError} autoHideDuration={6000} onClose={handleClose} anchorOrigin={{ vertical: 'bottom', horizontal: 'right', }} >
                                  <SnackError message={<SpanError><ErrorIconSnack />{hasError}</SpanError>} action={<IconButton aria-label="close" color="inherit" onClick={handleClose}><Close /></IconButton>} />
                                </Snackbar> : ''}
                            </GridFormC>
                          </Grid>
                        </Grid>
                      </Grid>
                    )}
                </div>
              </Grid>
            </PaperLogin>
          </Grid>
        </Grid>
      </Content >
    );
  }
}

export default withRouter(props => <Register {...props} />);
