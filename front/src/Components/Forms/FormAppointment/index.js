import React from "react";
import AppointmentHourPicker from "../../AppointmentHourPicker";
import AppointmentDatePicker from "../../AppointmentDatePicker";
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
} from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import Autocomplete from "@material-ui/lab/Autocomplete";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import ApiVet from "../../../Services/ApiVet";

const styles = {
    TitleView: {
        fontWeight: 500,
        marginBottom: "1rem",
        textAlign: "center",
    },
    ButtonConfirm: {
        marginTop: "10px",
    },
    Autocomplete: {
        marginBottom: "1rem",
    },
};

class FormAppointment extends React.Component {
    state = {
        hours: [],
        veterinaries: [],
        veterinarySelected: null,
        request: {
            date: null,
            hour: null,
            reason: "",
            type: "Sin especificar",
            id_veterinary: null,
        },
    };

    async componentDidMount() {
        try {
            const { data } = await ApiVet.veterinaries.fetch();
            this.setState({ ...this.state, veterinaries: data });
        } catch (err) {
            console.error('err al obtener todas las veterinarias');
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
            const hours = await ApiVet.appointments.fetch(
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
            request: {
                ...this.state.request,
                time
            }
        });
    }

    /**
     * Method to handle when change the veterinary with autocomplete...
     * @param {object} veterinarySelected
     * @returns {void}
     */
    handleOnChangeAutocomplete = (event, veterinarySelected) => {
        this.setState({
            ...this.state,
            request: {
                ...this.state.request,
                id_veterinary: veterinarySelected.id_veterinary,
            },
            veterinarySelected,
        });
    }

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
     * Method to handle submit event validate form and call props to parent
     * @param {Event} event
     * @returns {void}
     */
    handleOnSubmit = event => {
        event.preventDefault();
        this.props.onSubmit(this.state.request);
    }

    render() {
        const { props: { classes }, handleOnDateChange, handleOnHourChange, handleOnSubmit, handleOnChange, handleOnChangeAutocomplete, state: { hours, request, veterinaries, veterinarySelected } } = this;
        return (
            <Grid container direction="row" justify="space-around" spacing={2}>
                <Grid item xs={12}>
                    <form noValidate autoComplete="off" onSubmit={handleOnSubmit}>
                        <Autocomplete
                            disableClearable
                            className={classes.Autocomplete}
                            options={veterinaries}
                            value={veterinarySelected}
                            getOptionLabel={option => option.business_name}
                            onChange={handleOnChangeAutocomplete}
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
                                    <ListItemText primary={option.fantasy_name} secondary={option.street} />
                                    <ListItemIcon>
                                        <LocationOnIcon />
                                    </ListItemIcon>
                                </>
                            )}
                            renderInput={params => (
                                <TextField
                                    {...params}
                                    label="Buscar veterinaria"
                                    fullWidth
                                />
                            )}
                        />
                        <Grid container
                            direction="row"
                            justify="space-between"
                            spacing={2}>
                            <Grid item xs={6}>
                                <AppointmentDatePicker onDateChange={handleOnDateChange} isDisabled={veterinarySelected === null} />
                            </Grid>
                            <Grid item xs={6}>
                                <AppointmentHourPicker hours={hours} onHourChange={handleOnHourChange} label="Seleccioná un horario" />
                            </Grid>
                        </Grid>
                        <FormControl fullWidth>
                            <InputLabel id="type">Tipo</InputLabel>
                            <Select id="type" value={request.type} onChange={handleOnChange} value={request.type} name="type" displayEmpty>
                                <MenuItem value="Sin especificar"><em>Sin especificar</em></MenuItem>
                                <MenuItem value="Consulta rápida">Consulta rápida</MenuItem>
                                <MenuItem value="Consulta vacunación">Consulta vacunación</MenuItem>
                                <MenuItem value="Otras">Otras</MenuItem>
                            </Select>
                            <FormHelperText>Para ayudarnos mejor elige un tipo de turno</FormHelperText>
                        </FormControl>
                        <TextField
                            InputLabelProps={{
                                shrink: true,
                            }}
                            fullWidth
                            required
                            label="Motivo del turno"
                            margin="normal"
                            name="reason"
                            type="text"
                            value={request.reason}
                            onChange={handleOnChange}
                        />
                        <Button
                            className={classes.ButtonConfirm}
                            color="primary"
                            type="submit"
                            variant="contained"
                        >
                            Confirmar
                        </Button>
                    </form>
                </Grid>
            </Grid>
        );
    }
}

export default withStyles(styles)(FormAppointment);
