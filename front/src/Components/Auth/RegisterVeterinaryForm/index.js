import React, {Component} from "react";
import PropTypes from "prop-types";
import {ValidatorForm, TextValidator} from "react-material-ui-form-validator";
import {withRouter, Link} from "react-router-dom";
import {
  InputAdornment,
  Grid,
  IconButton,
  Typography,
  Button,
} from "@material-ui/core";
import {
  Email,
  Visibility,
  VisibilityOff,
  FeaturedPlayList,
  BusinessCenter,
  MyLocation,
  Apartment,
  Phone,
  AspectRatio,
} from "@material-ui/icons";
import {withStyles} from "@material-ui/core/styles";
import {Spinner, ModalMsg} from "../../Notifications";
import {Auth} from "../../../Services";
import styles from "./styles";

class RegisterVeterinaryForm extends Component {
  state = {
    formData: {
      email: "",
      password: "",
      dni: "",
      id_role: this.props.idRole,
      business_name: "",
      cuit_cuil: "",
      phone1: "",
      street: "",
      fantasy_name: "",
    },
    showPassword: false,
    isLoading: false,
    openMgs: false,
    hasMsg: null,
    succes: false,
  };

  /**
   * Handle on change input form
   * @param {Event} event
   * @returns {void}
   */
  handleOnChange = event => {
    const {formData} = this.state;
    formData[event.target.name] = event.target.value;
    this.setState({formData});
  };

  /**
   * Handle click show password form
   * @returns {void}
   */
  handleClickShowPassword = () => {
    const {state} = this;
    this.setState({...state, showPassword: !state.showPassword});
  };

  /**
   * Prevent mouse down
   * @param {Event} event
   * @returns {void}
   */
  handleMouseDownPassword = event => {
    event.preventDefault();
  };

  /**
   * Method to handle when user submit form, validate all values
   * show sucess or error
   * @returns {void}
   */
  handleSubmit = async () => {
    const {state} = this;
    const {history} = this.props;

    try {
      this.setState({...state, isLoading: true});
      const {data} = await Auth.register(state.formData);
      if (data.success) {
        this.setState({
          ...state,
          isLoading: false,
          openMsg: true,
          hasMsg: data.msg,
          success: data.success,
        });
        setTimeout(() => {
          history.push(`/`);
        }, 3000);
      } else {
        setTimeout(() => {
          this.setState({
            ...state,
            isLoading: false,
            hasMsg: data.msg,
            openMsg: true,
            success: data.success,
          });
        }, 1000);
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
        hasMsg:
          "Se produjo un error al registarse, por favor verifique sus datos.",
        openMsg: true,
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
    const {classes} = this.props;
    const {
      formData,
      showPassword,
      isLoading,
      openMsg,
      hasMsg,
      success,
    } = this.state;
    const {
      handleSubmit,
      handleOnChange,
      handleClickShowPassword,
      handleMouseDownPassword,
    } = this;
    return (
      <ValidatorForm ref="form" onSubmit={handleSubmit}>
        <Typography gutterBottom variant="body2">
          Datos personales
        </Typography>
        <Grid container>
          <Grid item xs={12}>
            <TextValidator
              fullWidth
              errorMessages={['Este campo es requerido.', 'No es un email valido.']}
              id="email"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="start">
                    <Email color="secondary" />
                  </InputAdornment>
                ),
              }}
              label="Email"
              margin="normal"
              name="email"
              validators={['required', 'isEmail']}
              value={formData.email}
              onChange={handleOnChange}
            />
          </Grid>
          <Grid item xs={12}>
            <TextValidator
              fullWidth
              errorMessages={['La contraseña es requerida', 'La contraseña debe tener un mínimo de 4 caracteres', 'La contraseñá puede tener un máximo de 100 caracteres', 'Solo se aceptan letras y numeros para la contraseñá, sin espacios.']}
              id="password"
              InputProps={{
                endAdornment: (
                  <InputAdornment className={classes.Adorment} position="end">
                    <IconButton
                      edge="end"
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                    >
                      {showPassword ? <VisibilityOff color="secondary" /> : <Visibility color="secondary" />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
              label="Contraseña"
              margin="normal"
              name="password"
              type={showPassword ? 'text' : 'password'}
              validators={['required', 'minStringLength:4', 'maxStringLength:100', 'matchRegexp:^[A-Za-z0-9]+$']}
              value={formData.password}
              onChange={handleOnChange}
            />
          </Grid>
          <Grid item xs={12}>
            <TextValidator
              fullWidth
              errorMessages={['Este campo es requerido.', 'El dni debe ser un número.', 'Debe tener un minimo de 4 numeros', 'Debe tener un máximo de 12 números.']}
              id="dni"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="start">
                    <FeaturedPlayList color="secondary" />
                  </InputAdornment>
                ),
              }}
              label="DNI (Solo números)"
              margin="normal"
              name="dni"
              type="number"
              validators={['required', 'isNumber', 'minStringLength:4', 'maxStringLength:12',]}
              value={formData.dni}
              onChange={handleOnChange}
            />
          </Grid>
        </Grid>
        <Typography gutterBottom variant="body2">
          Datos de la veterinaria
        </Typography>
        <Grid
          container
          alignItems="center"
          direction="row"
          justify="space-between"
        >
          <Grid item lg={5} xs={12}>
            <TextValidator
              fullWidth
              errorMessages={['Este campo es requerido.', 'El nombre debe tener al menos 2 caracteres']}
              id="business_name"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="start">
                    <BusinessCenter color="secondary" />
                  </InputAdornment>
                ),
              }}
              label="Nombre de la empresa"
              margin="normal"
              name="business_name"
              validators={['required', 'minStringLength:2']}
              value={formData.business_name}
              onChange={handleOnChange}
            />
          </Grid>
          <Grid item lg={5} xs={12}>
            <TextValidator
              fullWidth
              errorMessages={['Este campo es requerido.', 'El nombre de fantasia debe tener al menos 2 caracteres']}
              id="fantasy_name"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="start">
                    <Apartment color="secondary" />
                  </InputAdornment>
                ),
              }}
              label="Nombre de fantasía"
              margin="normal"
              name="fantasy_name"
              validators={['required', 'minStringLength:2']}
              value={formData.fantasy_name}
              onChange={handleOnChange}
            />
          </Grid>
          <Grid item lg={5} xs={12}>
            <TextValidator
              fullWidth
              errorMessages={['Este campo es requerido.', 'El cuit debe ser un número', 'Debe tener un minimo de 4 numeros', 'Debe tener un máximo de 20 números.']}
              id="cuit_cuil"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="start">
                    <AspectRatio color="secondary" />
                  </InputAdornment>
                ),
              }}
              label="CUIT/CUIL (Solo números)"
              margin="normal"
              name="cuit_cuil"
              type="number"
              validators={['required', 'isNumber', 'minStringLength:4', 'maxStringLength:20']}
              value={formData.cuit_cuil}
              onChange={handleOnChange}
            />
          </Grid>
          <Grid item lg={5} xs={12}>
            <TextValidator
              fullWidth
              errorMessages={['Este campo es requerido.', 'El  teléfono debe ser un numero']}
              id="phone"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="start">
                    <Phone color="secondary" />
                  </InputAdornment>
                ),
              }}
              label="Teléfono (Solo números)"
              margin="normal"
              name="phone1"
              placeholder="Ej: 01115333333"
              type="number"
              validators={['required', 'isNumber']}
              value={formData.phone1}
              onChange={handleOnChange}
            />
          </Grid>
          <Grid item lg={5} xs={12}>
            <TextValidator
              fullWidth
              errorMessages={['Este campo es requerido.']}
              id="street"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="start">
                    <MyLocation color="secondary" />
                  </InputAdornment>
                ),
              }}
              label="Domicilio"
              margin="normal"
              name="street"
              validators={['required',]}
              value={formData.street}
              onChange={handleOnChange}
            />
          </Grid>
        </Grid>
        <Grid
          container
          alignItems="center"
          direction="row"
          justify="space-between"
        >
          <Link className={classes.SentButton} to="/">
            Ya tengo una cuenta, Ingresar.
          </Link>
          <Button
            className={classes.SentButton}
            color="primary"
            type="submit"
            variant="contained"
          >
            Enviar
          </Button>
        </Grid>
        {isLoading ? <Spinner /> : ""}
        {openMsg ? <ModalMsg msg={hasMsg} success={success} /> : ""}
      </ValidatorForm>
    );
  }
}

RegisterVeterinaryForm.propTypes = {
  idRole: PropTypes.number.isRequired,
};

export default withStyles(styles)(
  withRouter(props => <RegisterVeterinaryForm {...props} />)
);
