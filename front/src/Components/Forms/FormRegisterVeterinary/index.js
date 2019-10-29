import React, { Component } from "react";
import PropTypes from "prop-types";
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import {
  InputAdornment, FormControlLabel, Button, Grid, IconButton, Typography, ExpansionPanel,
  ExpansionPanelSummary, ExpansionPanelDetails
} from '@material-ui/core';
import {
  Email, Visibility, VisibilityOff, FeaturedPlayList, BusinessCenter, MyLocation, Apartment,
  Phone, AspectRatio, ExpandMore
} from '@material-ui/icons';
import { styled } from '@material-ui/core/styles';

const Adorment = styled(InputAdornment)({
  marginRight: "8px",
});


class FormRegisterVeterinary extends Component {
  state = {
    formData: {
      email: '',
      password: '',
      dni: '',
      id_role: this.props.idRole,
      business_name: '',
      cuit_cuil: '',
      phone1: '',
      street: '',
      fantasy_name: ''
    },
    showPassword: false,
    expanded: false,
  };

  emailRef = React.createRef();
  passwordRef = React.createRef();
  dniRef = React.createRef();
  businessRef = React.createRef();
  fantasyRef = React.createRef();
  ccRef = React.createRef();
  phone1Ref = React.createRef();
  streetRef = React.createRef();

  componentDidMount() {
    this.props.onSubmit({ data: this.state.formData, disabled: true });
  }

  handleExpanded = panel => (event, isExpanded) => {
    this.setState({ ...this.state, expanded: isExpanded ? panel : false });
  };

  handleOnBlur = event => {
    const { emailRef, passwordRef, dniRef, businessRef, fantasyRef, ccRef, phone1Ref, streetRef } = this;
    switch (event.target.name) {
      case "email":
        emailRef.current.validate(event.target.value);
      case "password":
        passwordRef.current.validate(event.target.value);
      case "dni":
        dniRef.current.validate(event.target.value);
      case "business_name":
        businessRef.current.validate(event.target.value);
      case "cuit_cuil":
        ccRef.current.validate(event.target.value);
      case "phone1":
        phone1Ref.current.validate(event.target.value);
      case "street":
        streetRef.current.validate(event.target.value);
      case "fantasy_name":
        fantasyRef.current.validate(event.target.value);
    }

    this.form.isFormValid().then((isValid) => {
      if (isValid) {
        this.props.onSubmit({ data: this.state.formData, disabled: false });
      }
    });
  }

  handleOnSubmit = event => {
    event.preventDefault();
    this.props.onSubmit(this.state.formData);
  }

  handleOnChange = event => {
    const { formData } = this.state;
    formData[event.target.name] = event.target.value;
    this.setState({ formData });
  }

  handleClickShowPassword = () => {
    this.setState({ ...this.state, showPassword: !this.state.showPassword });
  };

  handleMouseDownPassword = event => {
    event.preventDefault();
  };

  render() {
    const { formData, showPassword, expanded } = this.state;
    const { handleOnSubmit, handleOnChange, handleOnBlur, handleClickShowPassword,
      handleMouseDownPassword, handleExpanded, emailRef, passwordRef, dniRef, businessRef,
      fantasyRef, ccRef, phone1Ref, streetRef } = this;
    return (
      <ValidatorForm onSubmit={handleOnSubmit} ref={(r) => { this.form = r; }} instantValidate>
        <ExpansionPanel expanded={expanded === 'panel1'} onChange={handleExpanded('panel1')}>
          <ExpansionPanelSummary
            expandIcon={<ExpandMore />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography variant="body2" gutterBottom>Datos personales</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Grid container>
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
                  label="Contraseña"
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
                  label="DNI"
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
            </Grid>
          </ExpansionPanelDetails>
        </ExpansionPanel>
        <ExpansionPanel expanded={expanded === 'panel2'} onChange={handleExpanded('panel2')}>
          <ExpansionPanelSummary
            expandIcon={<ExpandMore />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography variant="body2" gutterBottom>Datos de la veterinaria</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Grid container direction="row"
              justify="space-between"
              alignItems="center">
              <Grid item xs={5}>
                <TextValidator
                  margin="normal"
                  label="Nombre de la empresa"
                  name="business_name"
                  value={formData.business_name}
                  ref={businessRef}
                  onBlur={handleOnBlur}
                  onChange={handleOnChange}
                  validators={['required']}
                  errorMessages={['Este campo es requerido.']}
                  fullWidth
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="start">
                        <BusinessCenter color="secondary" />
                      </InputAdornment>
                    ),
                  }}
                />
              </Grid>
              <Grid item xs={5}>
                <TextValidator
                  margin="normal"
                  label="Nombre de fantasía"
                  name="fantasy_name"
                  value={formData.fantasy_name}
                  ref={fantasyRef}
                  onBlur={handleOnBlur}
                  onChange={handleOnChange}
                  validators={['required']}
                  errorMessages={['Este campo es requerido.']}
                  fullWidth
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="start">
                        <Apartment color="secondary" />
                      </InputAdornment>
                    ),
                  }}
                />
              </Grid>
              <Grid item xs={5}>
                <TextValidator
                  margin="normal"
                  label="CUIT / CUIL"
                  type="number"
                  name="cuit_cuil"
                  value={formData.cuit_cuil}
                  ref={ccRef}
                  onBlur={handleOnBlur}
                  onChange={handleOnChange}
                  validators={['required',]}
                  errorMessages={['Este campo es requerido.']}
                  fullWidth
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="start">
                        <AspectRatio color="secondary" />
                      </InputAdornment>
                    ),
                  }}
                />
              </Grid>
              <Grid item xs={5}>
                <TextValidator
                  margin="normal"
                  label="Teléfono"
                  type="number"
                  name="phone1"
                  value={formData.phone1}
                  ref={phone1Ref}
                  onBlur={handleOnBlur}
                  onChange={handleOnChange}
                  validators={['required']}
                  errorMessages={['Este campo es requerido.']}
                  fullWidth
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="start">
                        <Phone color="secondary" />
                      </InputAdornment>
                    ),
                  }}
                />
              </Grid>
              <Grid item xs={5}>
                <TextValidator
                  margin="normal"
                  label="Domicilio"
                  name="street"
                  value={formData.street}
                  ref={streetRef}
                  onBlur={handleOnBlur}
                  onChange={handleOnChange}
                  validators={['required',]}
                  errorMessages={['Este campo es requerido.']}
                  fullWidth
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="start">
                        <MyLocation color="secondary" />
                      </InputAdornment>
                    ),
                  }}
                />
              </Grid>
            </Grid>
          </ExpansionPanelDetails>
        </ExpansionPanel>
      </ValidatorForm>
    );
  }
}

FormRegisterVeterinary.propTypes = {
  onSubmit: PropTypes.func.isRequired
};
export default FormRegisterVeterinary;
