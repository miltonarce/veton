import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import { InputAdornment, FormControlLabel, Checkbox, Button, Grid } from '@material-ui/core';
import { AccountCircle, Lock } from '@material-ui/icons';
import { styled } from '@material-ui/core/styles';

const ButtonForm = styled(Button)({
  marginTop: '1rem',
});

const GridFormC = styled(Grid)({
  marginTop: '1rem',
});



class FormLogin extends Component {

  state = {
    formData: {
      email: "",
      password: ""
    }
  };

  emailRef = React.createRef();
  passwordRef = React.createRef();

  handleOnBlur = event => {
    const { emailRef, passwordRef } = this;
    if (event.target.name === "email") {
      emailRef.current.validate(event.target.value);
    } else {
      passwordRef.current.validate(event.target.value);
    }
  }

  handleOnChange = event => {
    const { formData } = this.state;
    formData[event.target.name] = event.target.value;
    this.setState({ formData });
  }

  handleOnSubmit = event => {
    event.preventDefault();
    this.props.onSubmit(this.state.formData);
  }

  render() {
    const { formData } = this.state;
    const { handleOnSubmit, handleOnChange, handleOnBlur, emailRef, passwordRef } = this;
    return (
      <ValidatorForm onSubmit={handleOnSubmit} instantValidate={false}>
        <Grid item xs={12}>
          <TextValidator
            margin="normal"
            label="Email"
            name="email"
            value={formData.email}
            ref={emailRef}
            onBlur={handleOnBlur}
            onChange={handleOnChange}
            validators={['required', 'isEmail']}
            errorMessages={['Este campo es requerido.', 'No es un email valido.']}
            fullWidth
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <AccountCircle color="primary" />
                </InputAdornment>
              ),
            }}
          />
        </Grid>
        <Grid item xs={12}>
          <TextValidator
            margin="normal"
            name="password"
            label="Contraseña"
            type="password"
            fullWidth
            value={formData.password}
            ref={passwordRef}
            onBlur={handleOnBlur}
            onChange={handleOnChange}
            validators={['required']}
            errorMessages={['Este campo es requerido.']}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Lock color="primary" />
                </InputAdornment>
              ),
            }}
          />
        </Grid>
        <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Recordarme"
          />
        </Grid>
        <Grid item xs={12}>
          <ButtonForm type="submit" variant="contained" color="primary" margin="normal" fullWidth>
            INGRESAR
          </ButtonForm>
        </Grid>
        <GridFormC container alignItems="center" justify="flex-end">
          <Grid item xs={10} md={6}>
            <Link to="/register">
              {"No tiene cuenta? Registrarse"}
            </Link>
          </Grid>
        </GridFormC>
      </ValidatorForm>
    );
  }
}

FormLogin.propTypes = {
  onSubmit: PropTypes.func.isRequired
};

export default FormLogin;
