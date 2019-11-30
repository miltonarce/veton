import React from "react";
import { FormControl, InputLabel, MenuItem, Select, FormHelperText } from "@material-ui/core";

const AppointmentHourPicker = ({ hours, onHourChange, label }) => {
    const [hour, setHour] = React.useState("");
    const handleChange = event => {
        const { target: { value } } = event;
        setHour(value);
        onHourChange(value);
    };

    return (
        <FormControl disabled={hours.length === 0} fullWidth required>
            <InputLabel shrink>{label}</InputLabel>
            <Select value={hour} onChange={handleChange} displayEmpty>
                <MenuItem value="" disabled>
                    Sin especificar
                </MenuItem>
                {hours.map((hour, index) => <MenuItem value={hour} key={index}>{hour} hs</MenuItem>)}
            </Select>
            <FormHelperText>El rango de horarios 9:00hs a 20:00hs</FormHelperText>
        </FormControl>
    );
}

export default AppointmentHourPicker;