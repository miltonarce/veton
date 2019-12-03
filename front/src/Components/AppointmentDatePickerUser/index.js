import React, {useState, useEffect} from "react";
import moment from "moment";
import MomentUtils from "@date-io/moment";
import {Link} from "react-router-dom";
import {MuiPickersUtilsProvider, DatePicker} from "@material-ui/pickers";
import "moment/locale/es";
import {Badge} from "@material-ui/core";
import Api from "../../Services/Api";

moment.locale("es");

const AppointmentDatePickerUser = ({idUser}) => {
  const [date, changeDate] = useState(new Date());
  const [appointments, setAppointments] = useState([]);

  const getAppointmentsByUser = async () => {
    const {
      data: {data, success},
    } = await Api.appointments.fetchByUserFuture(idUser);
    if (success) {
      const appointmentsDates = data.map(appointment => appointment.date);
      setAppointments(appointmentsDates);
    }
  };

  useEffect(() => {
    getAppointmentsByUser();
  }, []);

  return (
    <MuiPickersUtilsProvider
      libInstance={moment}
      locale="es"
      utils={MomentUtils}
    >
      <DatePicker
        autoOk
        orientation="portrait"
        renderDay={(day, selectedDate, isInCurrentMonth, dayComponent) => {
          const dateDatepicker = moment(day).format("YYYY-MM-DD");
          const isAppointmentForUser = appointments.includes(dateDatepicker);
          if (isAppointmentForUser) {
            return (
              <Link to="/user/appointments">
                <Badge
                  badgeContent="Turno"
                  color="secondary"
                  style={{backgroundColor: "#ddd", borderRadius: "50%"}}
                >
                  {dayComponent}
                </Badge>
              </Link>
            );
          }
          return <Badge>{dayComponent}</Badge>;
        }}
        value={date}
        variant="static"
        onChange={changeDate}
      />
    </MuiPickersUtilsProvider>
  );
};

export default AppointmentDatePickerUser;
