import React from "react";
import PropTypes from "prop-types";
import { FormControl, InputLabel, MenuItem, Select, FormHelperText } from "@material-ui/core";

const AppointmentHourPicker = ({ hours, onHourChange, label }) => {
    const [hour, setHour] = React.useState("");

    /**
     * Handle when user select any hour in menu-item, set hour and call callback
     * @param {Event} event
     * @returns {void}
     */
    const handleChange = event => {
        const { target: { value } } = event;
        setHour(value);
        onHourChange(value);
    };

    return (
        <FormControl disabled={hours.length === 0} fullWidth required>
            <InputLabel htmlFor="hour" shrink>{label}</InputLabel>
            <Select id="hour" value={hour} onChange={handleChange} displayEmpty>
                <MenuItem value="" disabled>
                    Sin especificar
                </MenuItem>
                {hours.map((hour, index) => <MenuItem value={hour} key={index}>{hour} hs</MenuItem>)}
            </Select>
            <FormHelperText>El rango de horarios 9:00hs a 20:00hs</FormHelperText>
        </FormControl>
    );
}

AppointmentHourPicker.propTypes = {
    hours: PropTypes.arrayOf(PropTypes.string).isRequired,
    onHourChange: PropTypes.func.isRequired,
    label: PropTypes.string.isRequired,
};

export default AppointmentHourPicker;