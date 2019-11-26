import moment from "moment";
import MomentUtils from "@date-io/moment";
import PropTypes from "prop-types";
import React, { useState } from "react";
import { MuiPickersUtilsProvider, DatePicker } from "@material-ui/pickers";
import "moment/locale/es";

moment.locale("es");

/**
 * Disabled sunday datepicker (day 0)
 * Current day today to...
 */
const AppointmentDatePicker = ({ onDateChange, isDisabled = false }) => {
    const today = new Date();
    const [selectedDate, setSelectedDate] = useState(today);

    const handleChange = event => {
        setSelectedDate(event);
        const date = moment(event._d).format("YYYY-MM-DD");
        onDateChange(date);
    }

    const handleDisabledDates = event => {
        const date = moment(event._d);
        return date.day() === 0;
    }

    return (
        <MuiPickersUtilsProvider libInstance={moment} utils={MomentUtils} locale="es">
            <DatePicker
                required
                disabled={isDisabled}
                fullWidth
                label="Seleccioná el día"
                cancelLabel="Cancelar"
                okLabel="Aceptar"
                todayLabel="Hoy"
                invalidDateMessage="Fecha Inválida"
                minDateMessage="La fecha no debe ser anterior a la fecha mínima"
                maxDateMessage="La fecha no debe ser posterior a la fecha máxima"
                format="DD/MM/YYYY"
                showTodayButton
                disablePast
                shouldDisableDate={handleDisabledDates}
                value={selectedDate}
                onChange={handleChange}
            />
        </MuiPickersUtilsProvider>
    );
}

AppointmentDatePicker.propTypes = {
    onDateChange: PropTypes.func.isRequired,
};

export default AppointmentDatePicker;