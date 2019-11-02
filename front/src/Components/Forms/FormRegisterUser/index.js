import React, {Component} from "react";
import PropTypes from "prop-types";
import {ValidatorForm, TextValidator} from "react-material-ui-form-validator";
import {InputAdornment, Grid, IconButton} from "@material-ui/core";
import {
  Email,
  Visibility,
  VisibilityOff,
  FeaturedPlayList,
} from "@material-ui/icons";
import {styled} from "@material-ui/core/styles";

const Adorment = styled(InputAdornment)({
  marginRight: "8px",
});

class FormRegisterUser extends Component {
  state = {
    formData: {
      email: "",
      password: "",
      dni: "",
      id_role: this.props.idRole,
    },
    showPassword: false,
  };

  componentDidMount() {
    const {props, state} = this;
    props.onSubmit({data: state.formData, disabled: true});
  }

  emailRef = React.createRef();

  passwordRef = React.createRef();

  dniRef = React.createRef();

  handleOnBlur = event => {
    const {props, state, emailRef, passwordRef, dniRef} = this;
    if (event.target.name === "email") {
      emailRef.current.validate(event.target.value);
    } else if (event.target.name === "password") {
      passwordRef.current.validate(event.target.value);
    } else {
      dniRef.current.validate(event.target.value);
    }

    this.form.isFormValid().then(isValid => {
      if (isValid) {
        props.onSubmit({data: state.formData, disabled: false});
      }
    });
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

  handleClickShowPassword = () => {
    const {state} = this;
    this.setState({...state, showPassword: !state.showPassword});
  };

  handleMouseDownPassword = event => {
    event.preventDefault();
  };

  render() {
    const {formData, showPassword} = this.state;
    const {
      handleOnSubmit,
      handleOnChange,
      handleOnBlur,
      handleClickShowPassword,
      handleMouseDownPassword,
      emailRef,
      passwordRef,
      dniRef,
    } = this;
    return (
      <ValidatorForm
        ref={r => {
          this.form = r;
        }}
        instantValidate
        onSubmit={handleOnSubmit}
      >
        <Grid item xs={12}>
          <TextValidator
            ref={emailRef}
            fullWidth
            errorMessages={['Este campo es requerido.', 'No es un email valido.']}
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
            label="Ingrese su contraseña"
            margin="normal"
            name="password"
            type={showPassword ? 'text' : 'password'}
            validators={['required']}
            value={formData.password}
            onBlur={handleOnBlur}
            onChange={handleOnChange}
          />
        </Grid>
        <Grid item xs={12}>
          <TextValidator
            ref={dniRef}
            fullWidth
            errorMessages={['Este campo es requerido.', 'El dni debe ser un número.']}
            InputProps={{
              endAdornment: (
                <InputAdornment position="start">
                  <FeaturedPlayList color="secondary" />
                </InputAdornment>
              ),
            }}
            label="Ingrese su dni"
            margin="normal"
            name="dni"
            type="number"
            validators={['required', 'isNumber']}
            value={formData.dni}
            onBlur={handleOnBlur}
            onChange={handleOnChange}
          />
        </Grid>
      </ValidatorForm>
    );
  }
}

FormRegisterUser.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default FormRegisterUser;
