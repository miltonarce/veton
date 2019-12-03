import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import {Grid} from "@material-ui/core";
import moment from "moment";
import DialogConfirmation from "../DialogConfirmation";

const useStyles = makeStyles(theme => ({
  ctn: {
    margin: "8px 0",
  },
  paperTimeDescription: {
    padding: theme.spacing(3, 2),
    backgroundColor: "#FE3090",
    color: "#fff",
    borderRadius: "23px",
    height: "100%",
    userSelect: "none",
  },
  paperHourOrDate: {
    backgroundColor: "#fff",
    color: "#FE3090",
    padding: theme.spacing(3, 2),
    borderRadius: 0,
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    userSelect: "none",
  },
  fontHour: {
    fontWeight: 800,
    userSelect: "none",
    fontSize: "16px",
  },
  reason: {
    fontSize: "14px",
  },
}));

/**
 * Method to check if the date is greater than today
 * @param {string} date
 * @returns {boolean}
 */
const checkDateIsGreaterToday = date => {
  const today = moment(new Date()).format("YYYY-MM-DD");
  return moment(date).isSameOrAfter(today);
};

const AppointmentItem = ({
  date,
  time,
  reason,
  idAppointment,
  showDate,
  showCancelation,
  onClickCancelAppointment,
}) => {
  const classes = useStyles();
  const showButtonCancel = showCancelation && checkDateIsGreaterToday(date);
  return (
    <Grid
      container
      alignItems="stretch"
      className={classes.ctn}
      direction="row"
      justify="space-between"
    >
      <Grid item md={4} xl={3} xs={4}>
        <Paper className={classes.paperHourOrDate} elevation={0}>
          <Typography
            align="center"
            className={classes.fontHour}
            component="h2"
            variant="h5"
          >
            {time} hs
          </Typography>
        </Paper>
      </Grid>
      <Grid item md={8} xl={9} xs={8}>
        <Paper className={classes.paperTimeDescription}>
          <Typography component="h3" variant="h5">
            {showDate && moment(date).format("DD/MM/YYYY")}
          </Typography>
          <Typography component="p" className={classes.reason}>
            {reason}
          </Typography>
          {showButtonCancel && (
            <DialogConfirmation
              text="Puedes volver a reservar el turno desde esta misma página"
              title="¿Estás seguro de cancelar el turno?"
              onClickConfirm={() => onClickCancelAppointment(idAppointment)}
            />
          )}
        </Paper>
      </Grid>
    </Grid>
  );
};

export default function AppointmentList({
  appointments,
  showDate = true,
  showCancelation = false,
  onClickCancelAppointment,
}) {
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
