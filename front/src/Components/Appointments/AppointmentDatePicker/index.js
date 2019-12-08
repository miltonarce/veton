import moment from "moment";
import MomentUtils from "@date-io/moment";
import PropTypes from "prop-types";
import React, { useState } from "react";
import { MuiPickersUtilsProvider, DatePicker } from "@material-ui/pickers";
import "moment/locale/es";

moment.locale("es");

const AppointmentDatePicker = ({ defaultValue, onDateChange, isDisabled = false }) => {
    const [selectedDate, setSelectedDate] = useState(defaultValue);

    /**
     * Handle onChange method from Datepicker, format the date and call callback
     * @param {Event} event
     * @returns {void}
     */
    const handleChange = event => {
        setSelectedDate(event);
        const date = moment(event._d).format("YYYY-MM-DD");
        onDateChange(date);
    }

    /**
     * Disabled sundays from Datepicker to avoid user selected
     * @param {Event} event
     * @returns {boolean}
     */
    const handleDisabledDates = event => {
        const date = moment(event._d);
        return date.day() === 0;
    }

    return (
        <MuiPickersUtilsProvider libInstance={moment} utils={MomentUtils} locale="es">
            <DatePicker
                id="day_selected"
                required
                showTodayButton
                disablePast
                fullWidth
                disabled={isDisabled}
                shouldDisableDate={handleDisabledDates}
                value={selectedDate}
                onChange={handleChange}
                label="Seleccioná el día"
                cancelLabel="Cancelar"
                okLabel="Aceptar"
                todayLabel="Hoy"
                invalidDateMessage="Fecha Inválida"
                minDateMessage="La fecha no debe ser anterior a la fecha mínima"
                maxDateMessage="La fecha no debe ser posterior a la fecha máxima"
                format="DD/MM/YYYY"
            />
        </MuiPickersUtilsProvider>
    );
}

AppointmentDatePicker.propTypes = {
    onDateChange: PropTypes.func.isRequired,
    defaultValue: PropTypes.instanceOf(Date).isRequired,
    isDisabled: PropTypes.bool,
};

export default AppointmentDatePicker;