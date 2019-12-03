import React, { useState, useEffect } from "react";
import Api from "../../Services/Api";
import moment from "moment";
import MomentUtils from "@date-io/moment";
import { MuiPickersUtilsProvider, DatePicker } from "@material-ui/pickers";
import "moment/locale/es";
import { Badge } from "@material-ui/core";

moment.locale("es");

const AppointmentDatePickerUser = ({ idUser }) => {
    const [date, changeDate] = useState(new Date());
    const [appointments, setAppointments] = useState([]);

    const getAppointmentsByUser = async () => {
        const { data: { data, success } } = await Api.appointments.fetchByUserFuture(idUser);
        if (success) {
            const appointmentsDates = data.map(appointment => appointment.date);
            setAppointments(appointmentsDates);
        }
    }

    useEffect(() => {
        getAppointmentsByUser();
    }, []);

    return (
        <MuiPickersUtilsProvider libInstance={moment} utils={MomentUtils} locale="es">
            <DatePicker
                autoOk
                autoOk
                orientation="portrait"
                variant="static"
                value={date}
                onChange={changeDate}
                renderDay={(day, selectedDate, isInCurrentMonth, dayComponent) => {
                    const dateDatepicker = moment(day).format("YYYY-MM-DD");
                    const isAppointmentForUser = appointments.includes(dateDatepicker);
                    if (isAppointmentForUser) {
                        return <Badge badgeContent="Turno" color="secondary" style={{ backgroundColor: '#ddd', borderRadius: '50%' }}>{dayComponent}</Badge>;
                    }
                    return <Badge>{dayComponent}</Badge>;
                }}
            />

        </MuiPickersUtilsProvider>
    );
};

export default AppointmentDatePickerUser;