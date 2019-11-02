import React, {Component} from "react";
import PropTypes from "prop-types";
import {ValidatorForm, TextValidator} from "react-material-ui-form-validator";
import {
  InputAdornment,
  Grid,
  IconButton,
  Typography,
  ExpansionPanel,
  ExpansionPanelSummary,
  ExpansionPanelDetails,
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
  ExpandMore,
} from "@material-ui/icons";
import {styled} from "@material-ui/core/styles";

const Adorment = styled(InputAdornment)({
  marginRight: "8px",
});

class FormRegisterVeterinary extends Component {
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
    expanded: false,
  };

  componentDidMount() {
    const {state, props} = this;
    props.onSubmit({data: state.formData, disabled: true});
  }

  emailRef = React.createRef();

  passwordRef = React.createRef();

  dniRef = React.createRef();

  businessRef = React.createRef();

  fantasyRef = React.createRef();

  ccRef = React.createRef();

  phone1Ref = React.createRef();

  streetRef = React.createRef();

  handleExpanded = panel => (event, isExpanded) => {
    const {state} = this;
    this.setState({...state, expanded: isExpanded ? panel : false});
  };

  handleOnBlur = event => {
    const {
      props,
      state,
      emailRef,
      passwordRef,
      dniRef,
      businessRef,
      fantasyRef,
      ccRef,
      phone1Ref,
      streetRef,
    } = this;
    switch (event.target.name) {
      case "email":
        emailRef.current.validate(event.target.value);
        break;
      case "password":
        passwordRef.current.validate(event.target.value);
        break;
      case "dni":
        dniRef.current.validate(event.target.value);
        break;
      case "business_name":
        businessRef.current.validate(event.target.value);
        break;
      case "cuit_cuil":
        ccRef.current.validate(event.target.value);
        break;
      case "phone1":
        phone1Ref.current.validate(event.target.value);
        break;
      case "street":
        streetRef.current.validate(event.target.value);
        break;
      case "fantasy_name":
        fantasyRef.current.validate(event.target.value);
        break;
      default:
        return "";
    }

    this.form.isFormValid().then(isValid => {
      if (isValid) {
        props.onSubmit({data: state.formData, disabled: false});
      }
    });
  };

  handleOnSubmit = event => {
    const {props, state} = this;
    event.preventDefault();
    props.onSubmit(state.formData);
  };

  handleOnChange = event => {
    const {formData} = this.state;
    formData[event.target.name] = event.target.value;
    this.setState({formData});
  };

  handleClickShowPassword = () => {
    const {state} = this;
    this.setState({...state, showPassword: !state.showPassword});
  };

  handleMouseDownPassword = event => {
    event.preventDefault();
  };

  render() {
    const {formData, showPassword, expanded} = this.state;
    const {
      handleOnSubmit,
      handleOnChange,
      handleOnBlur,
      handleClickShowPassword,
      handleMouseDownPassword,
      handleExpanded,
      emailRef,
      passwordRef,
      dniRef,
      businessRef,
      fantasyRef,
      ccRef,
      phone1Ref,
      streetRef,
    } = this;
    return (
      <ValidatorForm
        ref={r => {
          this.form = r;
        }}
        instantValidate
        onSubmit={handleOnSubmit}
      >
        <ExpansionPanel
          expanded={expanded === "panel1"}
          onChange={handleExpanded("panel1")}
        >
          <ExpansionPanelSummary
            aria-controls="panel1a-content"
            expandIcon={<ExpandMore />}
            id="panel1a-header"
          >
            <Typography gutterBottom variant="body2">
              Datos personales
            </Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Grid container>
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
                  label="Contraseña"
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
                  label="DNI"
                  margin="normal"
                  name="dni"
                  type="number"
                  validators={['required', 'isNumber']}
                  value={formData.dni}
                  onBlur={handleOnBlur}
                  onChange={handleOnChange}
                />
              </Grid>
            </Grid>
          </ExpansionPanelDetails>
        </ExpansionPanel>
        <ExpansionPanel
          expanded={expanded === "panel2"}
          onChange={handleExpanded("panel2")}
        >
          <ExpansionPanelSummary
            aria-controls="panel1a-content"
            expandIcon={<ExpandMore />}
            id="panel1a-header"
          >
            <Typography gutterBottom variant="body2">
              Datos de la veterinaria
            </Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Grid
              container
              alignItems="center"
              direction="row"
              justify="space-between"
            >
              <Grid item xs={5}>
                <TextValidator
                  ref={businessRef}
                  fullWidth
                  errorMessages={['Este campo es requerido.']}
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
                  validators={['required']}
                  value={formData.business_name}
                  onBlur={handleOnBlur}
                  onChange={handleOnChange}
                />
              </Grid>
              <Grid item xs={5}>
                <TextValidator
                  ref={fantasyRef}
                  fullWidth
                  errorMessages={['Este campo es requerido.']}
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
                  validators={['required']}
                  value={formData.fantasy_name}
                  onBlur={handleOnBlur}
                  onChange={handleOnChange}
                />
              </Grid>
              <Grid item xs={5}>
                <TextValidator
                  ref={ccRef}
                  fullWidth
                  errorMessages={['Este campo es requerido.']}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="start">
                        <AspectRatio color="secondary" />
                      </InputAdornment>
                    ),
                  }}
                  label="CUIT / CUIL"
                  margin="normal"
                  name="cuit_cuil"
                  type="number"
                  validators={['required',]}
                  value={formData.cuit_cuil}
                  onBlur={handleOnBlur}
                  onChange={handleOnChange}
                />
              </Grid>
              <Grid item xs={5}>
                <TextValidator
                  ref={phone1Ref}
                  fullWidth
                  errorMessages={['Este campo es requerido.']}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="start">
                        <Phone color="secondary" />
                      </InputAdornment>
                    ),
                  }}
                  label="Teléfono"
                  margin="normal"
                  name="phone1"
                  type="number"
                  validators={['required']}
                  value={formData.phone1}
                  onBlur={handleOnBlur}
                  onChange={handleOnChange}
                />
              </Grid>
              <Grid item xs={5}>
                <TextValidator
                  ref={streetRef}
                  fullWidth
                  errorMessages={['Este campo es requerido.']}
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
                  onBlur={handleOnBlur}
                  onChange={handleOnChange}
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
  onSubmit: PropTypes.func.isRequired,
};
export default FormRegisterVeterinary;
