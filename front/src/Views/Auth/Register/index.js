import React, {Component} from "react";
import {withRouter} from "react-router-dom";
import {
  Grid,
  Paper,
  CssBaseline,
  CircularProgress,
  Snackbar,
  Button,
  SnackbarContent,
  IconButton,
  Typography,
  Stepper,
  Step,
  StepConnector,
  StepLabel,
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  Avatar,
} from "@material-ui/core";
import {
  Check,
  CallSplit,
  Email,
  FeaturedPlayList,
  Lock,
  Error,
  Close,
  BusinessCenter,
  MyLocation,
  Apartment,
  Phone,
  AspectRatio,
} from "@material-ui/icons";
import {styled, makeStyles} from "@material-ui/core/styles";
import clsx from "clsx";

import RolSelect from "../../../Components/Forms/RolSelect";
import FormRegistarVeterinary from "../../../Components/Forms/FormRegisterVeterinary";
import FormRegisterUser from "../../../Components/Forms/FormRegisterUser";
import Auth from "../../../Services/Auth";

const Content = styled("div")({
  height: "100vh",
  display: "flex",
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
});

const SpanError = styled("span")({
  display: "flex",
  alignItems: "center",
});

const ErrorIconSnack = styled(Error)({
  marginRight: ".5rem",
});

const QontoConnector = styled(StepConnector)({
  alternativeLabel: {
    top: 10,
    left: "calc(-50% + 16px)",
    right: "calc(50% + 16px)",
  },
  active: {
    "& $line": {
      borderColor: "#784af4",
    },
  },
  completed: {
    "& $line": {
      borderColor: "#784af4",
    },
  },
  line: {
    borderColor: "#eaeaf0",
    borderTopWidth: 3,
    borderRadius: 1,
  },
});

const useQontoStepIconStyles = makeStyles({
  root: {
    color: "#eaeaf0",
    display: "flex",
    height: 22,
    alignItems: "center",
  },
  active: {
    color: "#784af4",
  },
  circle: {
    width: 8,
    height: 8,
    borderRadius: "50%",
    backgroundColor: "currentColor",
  },
  completed: {
    color: "#784af4",
    zIndex: 1,
    fontSize: 18,
  },
});

const StaticListData = ({props: {data}}) => (
  <>
    <List>
      <Grid container>
        <Grid item xs={6}>
          <ListItem>
            <ListItemAvatar>
              <Avatar>
                <CallSplit />
              </Avatar>
            </ListItemAvatar>
            <ListItemText
              primary="Tipo de usuario"
              secondary={data.id_role === 4 ? "Usuario" : "Veterinaria"}
            />
          </ListItem>
        </Grid>
        <Grid item xs={6}>
          <ListItem>
            <ListItemAvatar>
              <Avatar>
                <Email />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary="Email" secondary={data.email} />
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
            <ListItemText primary="Dni" secondary={data.dni} />
          </ListItem>
        </Grid>
      </Grid>
      {data.id_role === 2 ? (
        <>
          <Grid container>
            <Grid item xs={6}>
              <ListItem>
                <ListItemAvatar>
                  <Avatar>
                    <BusinessCenter />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText
                  primary="Nombre de su empresa"
                  secondary={data.business_name}
                />
              </ListItem>
            </Grid>
            <Grid item xs={6}>
              <ListItem>
                <ListItemAvatar>
                  <Avatar>
                    <Apartment />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText
                  primary="Nombre de fantasía"
                  secondary={data.fantasy_name}
                />
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
                <ListItemText
                  primary="CUIT / CUIL"
                  secondary={data.cuit_cuil}
                />
              </ListItem>
            </Grid>
            <Grid item xs={6}>
              <ListItem>
                <ListItemAvatar>
                  <Avatar>
                    <Phone />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText
                  primary="Número de teléfono"
                  secondary={data.phone1}
                />
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
                <ListItemText primary="Domicilio" secondary={data.street} />
              </ListItem>
            </Grid>
          </Grid>
        </>
      ) : (
        ""
      )}
    </List>
  </>
);

class Register extends Component {
  state = {
    isLoading: false,
    hasError: null,
    openError: false,
    id_role: 4,
    steps: [
      "Seleccione el tipo de usuario.",
      "Ingrese sus datos.",
      "Confirmar datos.",
    ],
    activeStep: 0,
    dataRegister: {},
    disabled: true,
  };

  handleNext = () => {
    const {state} = this;
    this.setState({...state, activeStep: state.activeStep + 1});
  };

  handleBack = () => {
    const {state} = this;
    this.setState({...state, activeStep: state.activeStep - 1});
  };

  handleClose = () => {
    const {state} = this;
    this.setState({...state, openError: false});
  };

  QontoStepIcon = props => {
    const classes = useQontoStepIconStyles();
    const {active, completed} = props;
    return (
      <div
        className={clsx(classes.root, {
          [classes.active]: active,
        })}
      >
        {completed ? (
          <Check className={classes.completed} />
        ) : (
          <div className={classes.circle} />
        )}
      </div>
    );
  };

  getStepContent = step => {
    const {state} = this;
    switch (step) {
      case 0:
        return (
          <RolSelect
            initialValue={state.id_role}
            onRolSelected={this.handleOnRolSelected}
            onSetNext={() => {
              this.setState({disabled: false});
            }}
          />
        );
      case 1:
        return (
          <>
            {state.id_role === 4 && (
              <div>
                <TextDataRegister gutterBottom variant="body2">
                  Datos personales
                </TextDataRegister>
                <FormRegisterUser
                  idRole={state.id_role}
                  onSubmit={this.handleFinish}
                />
              </div>
            )}
            {state.id_role === 2 && (
              <FormRegistarVeterinary
                idRole={state.id_role}
                onSubmit={this.handleFinish}
              />
            )}
          </>
        );
      case 2:
        return <StaticListData data={state.dataRegister} />;
      default:
        return "Unknown step";
    }
  };

  handleOnRolSelected = id_role => {
    const {state} = this;
    this.setState({...state, id_role});
  };

  handleFinish = data => {
    const {state} = this;
    this.setState({
      ...state,
      dataRegister: data.data,
      disabled: data.disabled,
    });
  };

  handleOnSubmitRegister = async () => {
    const {state} = this;
    const {history} = this.props;

    try {
      this.setState({...state, isLoading: true});
      console.log(state.dataRegister);
      const {
        data: {success},
      } = await Auth.register(state.dataRegister);
      if (success) {
        this.setState({
          ...state,
          isLoading: false,
          activeStep: state.activeStep + 1,
        });
        setTimeout(() => {
          history.push(`/`);
        }, 3000);
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
        hasError: "Se produjo un error al registarse",
        openError: true,
      });
    }
  };

  render() {
    const {
      hasError,
      isLoading,
      steps,
      activeStep,
      disabled,
      openError,
    } = this.state;
    const {
      handleOnSubmitRegister,
      QontoStepIcon,
      getStepContent,
      handleNext,
      handleBack,
      handleClose,
    } = this;
    return (
      <Content>
        <CssBaseline />
        <Grid container alignItems="center" direction="row" justify="center">
          <Grid item md={6} xs={10}>
            <PaperLogin>
              <Grid item style={{margin: "0px auto"}} xs={6}>
                <img
                  alt="Logo vet On, veterinaria online"
                  src="assets/Logo.svg"
                />
              </Grid>
              <Grid item xs={12}>
                <TitleRegister gutterBottom color="secondary" variant="body2">
                  Registro
                </TitleRegister>
              </Grid>
              <Grid item xs={12}>
                <RegisterStepper
                  alternativeLabel
                  activeStep={activeStep}
                  connector={<QontoConnector />}
                >
                  {steps.map(label => (
                    <Step key={label}>
                      <StepLabel StepIconComponent={QontoStepIcon}>
                        {label}
                      </StepLabel>
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
                      <Grid
                        container
                        alignItems="center"
                        direction="row"
                        justify="center"
                      >
                        <GridFormC item xs={12}>
                          {getStepContent(activeStep)}
                        </GridFormC>
                        <Grid item xs={12}>
                          <GridFormC
                            container
                            alignItems="center"
                            justify="flex-end"
                          >
                            {isLoading ? (
                              <CircularProgress color="secondary" />
                            ) : (
                              <>
                                <ButtonBack
                                  disabled={activeStep === 0}
                                  onClick={handleBack}
                                >
                                  Atras
                                </ButtonBack>
                                <Button
                                  color="primary"
                                  disabled={disabled}
                                  variant="contained"
                                  onClick={
                                    activeStep === 2
                                      ? handleOnSubmitRegister
                                      : handleNext
                                  }
                                >
                                  {activeStep === steps.length - 1
                                    ? "Finalizar"
                                    : "Siguiente"}
                                </Button>
                              </>
                            )}
                            {openError ? (
                              <Snackbar
                                anchorOrigin={{
                                  vertical: "bottom",
                                  horizontal: "right",
                                }}
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
      </Content>
    );
  }
}

export default withRouter(props => <Register {...props} />);
