import React, { Component } from "react";
import PropTypes from "prop-types";
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import { InputAdornment, FormControlLabel, Button, Grid, IconButton } from '@material-ui/core';
import { Email, Visibility, VisibilityOff, FeaturedPlayList } from '@material-ui/icons';
import { styled } from '@material-ui/core/styles';

const Adorment = styled(InputAdornment)({
  marginRight: "8px",
});

class FormRegisterUser extends Component {
  state = {
    formData: {
      email: '',
      password: '',
      dni: '',
      id_role: this.props.idRole,
    },
    showPassword: false,
  };

  emailRef = React.createRef();
  passwordRef = React.createRef();
  dniRef = React.createRef();

  componentDidMount() {
    this.props.onSubmit({ data: this.state.formData, disabled: true });
  }

  handleOnBlur = event => {
    const { emailRef, passwordRef, dniRef } = this;
    if (event.target.name === "email") {
      emailRef.current.validate(event.target.value);
    } else if (event.target.name === "password") {
      passwordRef.current.validate(event.target.value);
    } else {
      dniRef.current.validate(event.target.value);
    }

    this.form.isFormValid().then((isValid) => {
      if (isValid) {
        this.props.onSubmit({ data: this.state.formData, disabled: false });
      }
    });
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

  handleClickShowPassword = () => {
    this.setState({ ...this.state, showPassword: !this.state.showPassword });
  };

  handleMouseDownPassword = event => {
    event.preventDefault();
  };



  render() {
    const { formData, showPassword } = this.state;
    const { handleOnSubmit, handleOnChange, handleOnBlur, handleClickShowPassword, handleMouseDownPassword, emailRef, passwordRef, dniRef } = this;
    return (
      <ValidatorForm onSubmit={handleOnSubmit} ref={(r) => { this.form = r; }} instantValidate>
        <Grid item xs={12}>
          <TextValidator
            margin="normal"
            label="Ingrese su email"
            name="email"
            value={formData.email}
            ref={emailRef}
            onBlur={handleOnBlur}
            onChange={handleOnChange}
            validators={['required', 'isEmail']}
            errorMessages={['Este campo es requerido.', 'No es un email valido.']}
            fullWidth
            InputProps={{
              endAdornment: (
                <InputAdornment position="start">
                  <Email color="secondary" />
                </InputAdornment>
              ),
            }}
          />
        </Grid>
        <Grid item xs={12}>
          <TextValidator
            margin="normal"
            name="password"
            label="Ingrese su contraseña"
            type={showPassword ? 'text' : 'password'}
            fullWidth
            value={formData.password}
            ref={passwordRef}
            onBlur={handleOnBlur}
            onChange={handleOnChange}
            validators={['required']}
            errorMessages={['Este campo es requerido.']}
            InputProps={{
              endAdornment: (
                <Adorment position="end">
                  <IconButton
                    edge="end"
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                  >
                    {showPassword ? <VisibilityOff color="secondary" /> : <Visibility color="secondary" />}
                  </IconButton>
                </Adorment>
              ),
            }}
          />
        </Grid>
        <Grid item xs={12}>
          <TextValidator
            margin="normal"
            label="Ingrese su dni"
            type="number"
            name="dni"
            value={formData.dni}
            ref={dniRef}
            onBlur={handleOnBlur}
            onChange={handleOnChange}
            validators={['required', 'isNumber']}
            errorMessages={['Este campo es requerido.', 'El dni debe ser un número.']}
            fullWidth
            InputProps={{
              endAdornment: (
                <InputAdornment position="start">
                  <FeaturedPlayList color="secondary" />
                </InputAdornment>
              ),
            }}
          />
        </Grid>
      </ValidatorForm>
    );
  }
}

FormRegisterUser.propTypes = {
  onSubmit: PropTypes.func.isRequired
};

export default FormRegisterUser;
