import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { Grid } from "@material-ui/core";
import moment from "moment";
import DialogConfirmation from "../DialogConfirmation";

const useStyles = makeStyles(theme => ({
    ctn: {
        margin: '8px 0',
    },
    paperTimeDescription: {
        padding: theme.spacing(3, 2),
        backgroundColor: '#FE3090',
        color: "#fff",
        borderRadius: '23px',
        height: '100%',
        userSelect: 'none'
    },
    paperHourOrDate: {
        backgroundColor: "#fff",
        color: "#FE3090",
        padding: theme.spacing(3, 2),
        borderRadius: 0,
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        userSelect: 'none',
    },
    fontHour: {
        fontWeight: 800,
        userSelect: 'none',
        fontSize: '16px',
    }
}));

/**
 * Method to check if the date is greater than today
 * @param {string} date
 * @returns {boolean}
 */
const checkDateIsGreaterToday = date => {
    const today = moment(new Date()).format("YYYY-MM-DD");
    return moment(date).isSameOrAfter(today);
}

const AppointmentItem = ({ date, time, reason, idAppointment, showDate, showCancelation, onClickCancelAppointment }) => {
    const classes = useStyles();
    const showButtonCancel = showCancelation && checkDateIsGreaterToday(date);
    return (
        <Grid
            className={classes.ctn}
            container
            direction="row"
            justify="space-between"
            alignItems="stretch"
        >
            <Grid item xs={4} md={4} xl={3}>
                <Paper className={classes.paperHourOrDate} elevation={0}>
                    <Typography variant="h5" component="h2" align="center" className={classes.fontHour}>
                        {time} hs
                    </Typography>
                </Paper>
            </Grid>
            <Grid item xs={8} md={8} xl={9}>
                <Paper className={classes.paperTimeDescription}>
                    <Typography variant="h5" component="h3">
                        {showDate && moment(date).format("DD/MM/YYYY")}
                    </Typography>
                    <Typography component="p">
                        {reason}
                    </Typography>
                    {showButtonCancel && <DialogConfirmation 
                    title="¿Estás seguro de cancelar el turno?" 
                    text="Puedes volver a reservar el turno desde esta misma página" 
                    onClickConfirm={() => onClickCancelAppointment(idAppointment)} />}
                </Paper>
            </Grid>
        </Grid>
    );
}

export default function AppointmentList({ appointments, showDate = true, showCancelation = false, onClickCancelAppointment }) {
    return appointments.map((app, index) => <AppointmentItem key={index} date={app.date} time={app.time} reason={app.reason} idAppointment={app.id_appointment} showDate={showDate} showCancelation={showCancelation} onClickCancelAppointment={onClickCancelAppointment} />);
}