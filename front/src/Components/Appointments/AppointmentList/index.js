import React from "react";
import PropTypes from "prop-types";
import AppointmentItem from "../AppointmentItem";

const AppointmentList = ({ appointments, showDate = true, showCancelation = false, onClickCancelAppointment }) => {
  return appointments.map((app, index) => (
    <AppointmentItem
      key={index}
      date={app.date}
      idAppointment={app.id_appointment}
      reason={app.reason}
      showCancelation={showCancelation}
      showDate={showDate}
      time={app.time}
      onClickCancelAppointment={onClickCancelAppointment}
    />
  ));
}

AppointmentList.propTypes = {
  appointments: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  onClickCancelAppointment: PropTypes.func,
  showDate: PropTypes.bool,
  showCancelation: PropTypes.bool,
};

export default AppointmentList; 