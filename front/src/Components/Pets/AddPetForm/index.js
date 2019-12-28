import React from "react";
import PropTypes from "prop-types";
import {
  Grid,
  Paper,
  Typography,
  TextField,
  Radio,
  RadioGroup,
  FormLabel,
  FormControl,
  FormControlLabel,
  Select,
  InputLabel,
  MenuItem,
  Button,
} from "@material-ui/core";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";
import MomentUtils from "@date-io/moment";
import * as moment from "moment";
import Avatar from "@material-ui/core/Avatar";
import { withStyles } from "@material-ui/core/styles";
import { AppContext } from "../../../Store";
import { InvalidField } from "../../Notifications";
import styles from "./styles";

class AddPetForm extends React.Component {
  state = {
    form: {
      id_user: this.context.auth.user.id_user,
      id_type: 0,
      id_breed: 0,
      name: "",
      last_name: "",
      birthday: moment(new Date()).format("YYYY-MM-DD"),
      image: "",
      weight: "",
      colors: "",
      comments: "",
      id_gender: 1,
    },
    previewImage: null,
    imageSrc: null,
  };

  /**
   * OnSubmit event form validate if any image to append request
   * @param {Event} event
   * @returns {void}
   */
  handleOnSubmit = event => {
    const { state, props } = this;
    event.preventDefault();
    const request = { ...state.form };
    if (state.imageSrc) {
      request.image = state.imageSrc;
    }
    props.onSubmit(request);
  };

  /**
   * Handle when date change in datepicker component update date format
   * @param {Event} event
   * @returns {void}
   */
  handleOnChangeDate = event => {
    const { state } = this;
    const date = moment(event._d).format("YYYY-MM-DD");
    console.log(date);
    this.setState({ form: { ...state.form, birthday: date } });
  };

  /**
   * Handle on change event to validate in time errors and set state
   * @param {Event} event
   * @returns {void}
   */
  handleOnChange = event => {
    const { state } = this;
    const { name, value } = event.target;
    if (name === "id_type" || name === "id_breed" || name === "id_gender") {
      this.setState({ form: { ...state.form, [name]: Number(value) } });
    } else if (name !== "image") {
      this.setState({ form: { ...state.form, [name]: value } });
    }
  };

  /**
   * Handle event input to add preview image in form
   * @param {Event} event
   * @returns {void}
   */
  handleInputFile = event => {
    if (event.target.files.length > 0) {
      const [imagePath] = event.target.files;
      const reader = new FileReader();
      reader.readAsDataURL(imagePath);
      reader.onloadend = () =>
        this.setState({
          ...this.state,
          previewImage: reader.result,
          imageSrc: imagePath,
        });
    } else {
      this.setState({ ...this.state, previewImage: null, imageSrc: null });
    }
  };

  render() {
    const { types, breeds, title, classes, errors } = this.props;
    const {
      form: {
        name,
        last_name,
        birthday,
        weight,
        colors,
        comments,
        id_type,
        id_breed,
        id_gender,
      },
      previewImage,
    } = this.state;
    const breedsByType = breeds.filter(breed => breed.id_type === id_type);
    const {
      handleOnChange,
      handleOnSubmit,
      handleOnChangeDate,
      handleInputFile,
    } = this;
    return (
      <>
        <Paper className={classes.Paper}>
          <Typography
            className={classes.TitleForm}
            color="secondary"
            component="h3"
          >
            {title}
          </Typography>
          <form encType="multipart/form-data" onSubmit={handleOnSubmit}>
            <Grid item xs={12}>
              <Grid
                container
                alignItems="center"
                direction="row"
                justify="space-around"
                spacing={3}
              >
                <Grid item xs={6}>
                  <TextField
                    fullWidth
                    required
                    id="name"
                    label="Nombre"
                    margin="normal"
                    name="name"
                    type="text"
                    value={name}
                    onChange={handleOnChange}
                  />
                  <InvalidField errors={errors} field="name" />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    fullWidth
                    id="last_name"
                    label="Apellido"
                    margin="normal"
                    name="last_name"
                    type="text"
                    value={last_name}
                    onChange={handleOnChange}
                  />
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12}>
              <Grid
                container
                alignItems="center"
                direction="row"
                justify="space-around"
                spacing={3}
              >
                <Grid item xs={6}>
                  <MuiPickersUtilsProvider utils={MomentUtils}>
                    <KeyboardDatePicker
                      fullWidth
                      autoOk
                      disableFuture
                      id="birdthay"
                      KeyboardButtonProps={{
                        'aria-label': 'change date',
                      }}
                      label="Cumpleaños"
                      margin="normal"
                      value={birthday}
                      variant="inline"
                      format="DD/MM/YYYY"
                      onChange={handleOnChangeDate}
                    />
                  </MuiPickersUtilsProvider>
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    fullWidth
                    required
                    id="weight"
                    label="Peso en Kg."
                    margin="normal"
                    name="weight"
                    type="number"
                    value={weight}
                    onChange={handleOnChange}
                  />
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12}>
              <Grid
                container
                alignItems="center"
                direction="row"
                justify="space-around"
                spacing={3}
              >
                <Grid item xs={6}>
                  <TextField
                    fullWidth
                    id="colors"
                    label="Colores"
                    margin="normal"
                    name="colors"
                    type="text"
                    value={colors}
                    onChange={handleOnChange}
                  />
                </Grid>
                <Grid item xs={6}>
                  <FormControl component="fieldset">
                    <FormLabel component="legend">Género</FormLabel>
                    <RadioGroup
                      aria-label="gender"
                      name="id_gender"
                      value={id_gender}
                      onChange={handleOnChange}
                    >
                      <Grid
                        container
                        alignItems="center"
                        direction="row"
                        justify="center"
                      >
                        <Grid item xs={6}>
                          <FormControlLabel
                            control={<Radio />}
                            label="Femenino"
                            value={1}
                          />
                        </Grid>
                        <Grid item xs={6}>
                          <FormControlLabel
                            control={<Radio />}
                            label="Masculino"
                            value={2}
                          />
                        </Grid>
                      </Grid>
                    </RadioGroup>
                  </FormControl>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12}>
              <Grid
                container
                alignItems="center"
                direction="row"
                justify="space-around"
                spacing={3}
              >
                <Grid item xs={6}>
                  <FormControl fullWidth required>
                    <InputLabel htmlFor="id_type">Tipo</InputLabel>
                    <Select
                      id="id_type"
                      name="id_type"
                      value={id_type}
                      onChange={handleOnChange}
                    >
                      <MenuItem key={0} value={0}>
                        Seleccione un tipo
                      </MenuItem>
                      {types.map(type => (
                        <MenuItem key={type.id_type} value={type.id_type}>
                          {type.type}
                        </MenuItem>
                      ))}
                    </Select>
                    <InvalidField errors={errors} field="id_type" />
                  </FormControl>
                </Grid>
                <Grid item xs={6}>
                  <FormControl fullWidth required>
                    <InputLabel htmlFor="id_breed">Raza</InputLabel>
                    <Select
                      id="id_breed"
                      name="id_breed"
                      value={id_breed}
                      onChange={handleOnChange}
                    >
                      <MenuItem key={0} value={0}>
                        Seleccione una raza
                      </MenuItem>
                      {breedsByType.map(breed => (
                        <MenuItem key={breed.id_breed} value={breed.id_breed}>
                          {breed.breed}
                        </MenuItem>
                      ))}
                    </Select>
                    <InvalidField errors={errors} field="id_breed" />
                  </FormControl>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12}>
              <Grid
                container
                alignItems="center"
                direction="row"
                justify="space-around"
                spacing={3}
              >
                <Grid item xs={6}>
                  <TextField
                    fullWidth
                    col="20"
                    id="comments"
                    label="Comentarios"
                    margin="normal"
                    name="comments"
                    row="6"
                    type="text"
                    value={comments}
                    onChange={handleOnChange}
                  />
                </Grid>
                <Grid item xs={6}>
                  <input
                    accept=".jpg,.jpeg,.png"
                    id="imagePet"
                    name="image"
                    type="file"
                    onChange={handleInputFile}
                  />
                  {previewImage && (
                    <Grid container>
                      <Avatar
                        alt="Preview pet"
                        className={classes.avatar}
                        src={previewImage}
                      />
                    </Grid>
                  )}
                </Grid>
              </Grid>
            </Grid>
            <Grid item className={classes.GridButton} xs={12}>
              <Grid
                container
                alignItems="center"
                direction="row"
                justify="space-between"
              >
                <Grid item xs={3}>
                  <span>(*) Datos obligatorios.</span>
                </Grid>
                <Grid item xs={3}>
                  <Button color="primary" type="submit" variant="contained">
                    AGREGAR
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </form>
        </Paper>
      </>
    );
  }
}

AddPetForm.contextType = AppContext;

AddPetForm.propTypes = {
  breeds: PropTypes.arrayOf(
    PropTypes.shape({
      id_breed: PropTypes.number.isRequired,
      breed: PropTypes.string.isRequired,
    }).isRequired
  ),
  types: PropTypes.arrayOf(
    PropTypes.shape({
      id_type: PropTypes.number.isRequired,
      type: PropTypes.string.isRequired,
    }).isRequired
  ),
  title: PropTypes.string,
  onSubmit: PropTypes.func.isRequired,
};

export default withStyles(styles)(AddPetForm);
