import React from "react";
import PropTypes from "prop-types";
import {
  Grid,
  TextField,
  Button,
  FormHelperText,
  FormControl,
  MenuItem,
  ListItemText,
  ListItemIcon,
  ListItemAvatar,
  Select,
  Avatar,
  InputLabel,
  Paper,
} from "@material-ui/core";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import { withStyles } from "@material-ui/core/styles";
import Autocomplete from "@material-ui/lab/Autocomplete";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import moment from "moment";
import AppointmentDatePicker from "../AppointmentDatePicker";
import AppointmentHourPicker from "../AppointmentHourPicker";
import { Api, ApiVet } from "../../../Services";
import styles from "./styles";

class AppointmentForm extends React.Component {
  state = {
    hours: [],
    veterinaries: [],
    veterinarySelected: null,
    request: {
      date: moment(new Date()).format("YYYY-MM-DD"),
      time: null,
      reason: "",
      type: 0,
      id_veterinary: null,
    },
    errorAutocomplete: false,
    errorHour: false,
  };

  reasonRef = React.createRef();

  async componentDidMount() {
    try {
      const { data } = await ApiVet.veterinaries.fetch();
      this.setState({ ...this.state, veterinaries: data });
    } catch (err) {
      console.error("err al obtener todas las veterinarias");
    }
  }

  async componentDidUpdate(_, prevState) {
    if (prevState.request.id_veterinary !== this.state.request.id_veterinary) {
      this.handleOnDateChange(this.state.request.date);
    }
  }

  /**
   * Method to handle when user change date, and fetch the hours avalaibles for that date
   * @param {Date} date
   * @returns {void}
   */
  handleOnDateChange = async date => {
    this.setState({
      ...this.state,
      request: {
        ...this.state.request,
        date,
      },
    });
    try {
      const hours = await Api.appointments.fetch(
        date,
        this.state.veterinarySelected.id_veterinary
      );
      this.setState({ ...this.state, hours });
    } catch (err) {
      console.error("err", err);
    }
  };

  /**
   * Method to handle when user change hour form
   * @param {string} hour
   * @returns {void}
   */
  handleOnHourChange = time => {
    this.setState({
      ...this.state,
      errorHour: false,
      request: {
        ...this.state.request,
        time,
      },
    });
  };

  /**
   * Method to handle when change the veterinary with autocomplete...
   * @param {Event} event
   * @param {object} veterinarySelected
   * @returns {void}
   */
  handleOnChangeAutocomplete = (_event, veterinarySelected) => {
    this.setState({
      ...this.state,
      errorAutocomplete: false,
      request: {
        ...this.state.request,
        id_veterinary: veterinarySelected.id_veterinary,
      },
      veterinarySelected,
    });
  };

  /**
   * Method to handle onChange event in form (type, reason...)
   * @param {Event} event
   * @returns {void}
   */
  handleOnChange = event => {
    const { name, value } = event.target;
    this.setState({
      ...this.state,
      request: {
        ...this.state.request,
        [name]: value,
      },
    });
  };

  /**
   * Handle onblur and validate field
   * @param {Event} event
   * @returns {void}
   */
  handleOnBlur = event => {
    const { reasonRef } = this;
    reasonRef.current.validate(event.target.value);
  };

  /**
   * Method to handle submit event validate form and call props to parent
   * @param {Event} event
   * @returns {void}
   */
  handleOnSubmit = event => {
    const { id_veterinary, time, reason } = this.state.request;
    event.preventDefault();
    this.reasonRef.current.validate(reason);
    this.setState({
      ...this.state,
      errorAutocomplete: id_veterinary === null,
      errorHour: time === null,
    });
    if (id_veterinary !== null && time !== null) {
      this.props.onSubmit(this.state.request);
    }
  };

  render() {
    const {
      props: { classes },
      handleOnDateChange,
      handleOnHourChange,
      handleOnSubmit,
      handleOnChange,
      handleOnBlur,
      handleOnChangeAutocomplete,
      state: {
        hours,
        request,
        veterinaries,
        veterinarySelected,
        errorAutocomplete,
        errorHour,
      },
    } = this;
    return (
      <Grid
        container
        alignItems="center"
        direction="row"
        justify="center"
        spacing={3}
      >
        <Grid item lg={8} xs={12}>
          <Paper className={classes.Paper}>
            <ValidatorForm
              autoComplete="off"
              instantValidate={false}
              onSubmit={handleOnSubmit}
            >
              <Autocomplete
                disableClearable
                className={classes.Autocomplete}
                getOptionLabel={option => option.business_name}
                options={veterinaries}
                renderInput={params => (
                  <TextField {...params} fullWidth label="Buscar veterinaria" />
                )}
                renderOption={option => (
                  <>
                    <ListItemAvatar>
                      <Avatar
                        alt={option.business_name}
                        src={
                          option.image
                            ? `http://api.veton/imgs/${option.image}`
                            : "https://via.placeholder.com/300x200"
                        }
                      />
                    </ListItemAvatar>
                    <ListItemText
                      primary={option.fantasy_name}
                      secondary={option.street}
                    />
                    <ListItemIcon>
                      <LocationOnIcon />
                    </ListItemIcon>
                  </>
                )}
                value={veterinarySelected}
                onChange={handleOnChangeAutocomplete}
              />
              {errorAutocomplete && (
                <FormHelperText
                  className={classes.Error}
                  error={errorAutocomplete}
                >
                  Debes seleccionar una veterinaria
                </FormHelperText>
              )}
              <Grid
                container
                direction="row"
                justify="space-between"
                spacing={2}
              >
                <Grid item xs={6}>
                  <AppointmentDatePicker
                    defaultValue={new Date()}
                    isDisabled={veterinarySelected === null}
                    onDateChange={handleOnDateChange}
                  />
                </Grid>
                <Grid item xs={6}>
                  <AppointmentHourPicker
                    hours={hours}
                    label="Seleccioná un horario"
                    onHourChange={handleOnHourChange}
                  />
                  {errorHour && (
                    <FormHelperText className={classes.Error} error={errorHour}>
                      Debes seleccionar un horario
                    </FormHelperText>
                  )}
                </Grid>
              </Grid>
              <FormControl fullWidth>
                <InputLabel id="type">Tipo</InputLabel>
                <Select
                  displayEmpty
                  id="type"
                  name="type"
                  value={request.type}
                  onChange={handleOnChange}
                >
                  <MenuItem value={0}>
                    <em>Sin especificar</em>
                  </MenuItem>
                  <MenuItem value={1}>Consulta rápida</MenuItem>
                  <MenuItem value={2}>Consulta vacunación</MenuItem>
                  <MenuItem value={3}>Otras</MenuItem>
                </Select>
                <FormHelperText>
                  Para ayudarnos mejor elige un tipo de turno
                </FormHelperText>
              </FormControl>
              <TextValidator
                ref={this.reasonRef}
                fullWidth
                errorMessages={['El motivo del turno es requerido.']}
                InputLabelProps={{
                  shrink: true,
                }}
                label="Motivo del turno"
                margin="normal"
                name="reason"
                type="text"
                validators={['required']}
                value={request.reason}
                onBlur={handleOnBlur}
                onChange={handleOnChange}
              />
              <Grid
                container
                alignItems="center"
                direction="row"
                justify="space-between"
              >
                <span>(*) Datos obligatorios.</span>
                <Button
                  className={classes.ButtonConfirm}
                  color="primary"
                  type="submit"
                  variant="contained"
                >
                  Confirmar
                </Button>
              </Grid>
            </ValidatorForm>
          </Paper>
        </Grid>
      </Grid>
    );
  }
}

AppointmentForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default withStyles(styles)(AppointmentForm);
