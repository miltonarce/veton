import React, {Component} from "react";
import PropTypes from "prop-types";
import {withRouter, Link} from "react-router-dom";
import {ValidatorForm, TextValidator} from "react-material-ui-form-validator";
import {InputAdornment, Grid, IconButton, Button} from "@material-ui/core";
import {
  Email,
  Visibility,
  VisibilityOff,
  FeaturedPlayList,
} from "@material-ui/icons";
import {withStyles} from "@material-ui/core/styles";
import {Auth} from "../../../Services";
import {ModalMsg, Spinner} from "../../Notifications";
import styles from "./styles";

class RegisterUserForm extends Component {
  state = {
    formData: {
      email: "",
      password: "",
      dni: "",
      id_role: this.props.idRole,
    },
    showPassword: false,
    isLoading: false,
    hasMsg: null,
    openMsg: false,
    success: false,
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
        this.setState({
          ...state,
          isLoading: false,
          hasMsg: data.msg,
          openMsg: true,
          success: data.success,
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

  render() {
    const {classes} = this.props;
    const {
      formData,
      showPassword,
      openMsg,
      hasMsg,
      isLoading,
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
            label="Ingrese su email"
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
            label="Ingrese su contraseña"
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

RegisterUserForm.propTypes = {
  idRole: PropTypes.number.isRequired,
};

export default withStyles(styles)(
  withRouter(props => <RegisterUserForm {...props} />)
);
