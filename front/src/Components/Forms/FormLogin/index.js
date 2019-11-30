import React, {Component} from "react";
import PropTypes from "prop-types";
import {ValidatorForm, TextValidator} from "react-material-ui-form-validator";
import {
  InputAdornment,
  FormControlLabel,
  Checkbox,
  Button,
  Grid,
} from "@material-ui/core";
import {AccountCircle, Lock} from "@material-ui/icons";
import {styled} from "@material-ui/core/styles";

const ButtonForm = styled(Button)({
  marginTop: "1rem",
});

class FormLogin extends Component {
  state = {
    formData: {
      email: "",
      password: "",
    },
  };

  emailRef = React.createRef();

  passwordRef = React.createRef();

  handleOnBlur = event => {
    const {emailRef, passwordRef} = this;
    if (event.target.name === "email") {
      emailRef.current.validate(event.target.value);
    } else {
      passwordRef.current.validate(event.target.value);
    }
  };

  handleOnChange = event => {
    const {formData} = this.state;
    formData[event.target.name] = event.target.value;
    this.setState({formData});
  };

  handleOnSubmit = event => {
    const {props, state} = this;
    event.preventDefault();
    props.onSubmit(state.formData);
  };

  render() {
    const {formData} = this.state;
    const {
      handleOnSubmit,
      handleOnChange,
      handleOnBlur,
      emailRef,
      passwordRef,
    } = this;
    return (
      <ValidatorForm instantValidate={false} onSubmit={handleOnSubmit}>
        <Grid item xs={12}>
          <TextValidator
            ref={emailRef}
            fullWidth
            errorMessages={['Este campo es requerido.', 'No es un email valido.']}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <AccountCircle color="primary" />
                </InputAdornment>
              ),
            }}
            label="Email"
            margin="normal"
            name="email"
            validators={['required', 'isEmail']}
            value={formData.email}
            onBlur={handleOnBlur}
            onChange={handleOnChange}
          />
        </Grid>
        <Grid item xs={12}>
          <TextValidator
            ref={passwordRef}
            fullWidth
            errorMessages={['Este campo es requerido.']}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Lock color="primary" />
                </InputAdornment>
              ),
            }}
            label="Contraseña"
            margin="normal"
            name="password"
            type="password"
            validators={['required']}
            value={formData.password}
            onBlur={handleOnBlur}
            onChange={handleOnChange}
          />
        </Grid>
        <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox color="primary" value="remember" />}
            label="Recordarme"
          />
        </Grid>
        <Grid item xs={12}>
          <ButtonForm
            fullWidth
            color="primary"
            margin="normal"
            type="submit"
            variant="contained"
          >
            INGRESAR
          </ButtonForm>
        </Grid>
      </ValidatorForm>
    );
  }
}

FormLogin.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default FormLogin;
