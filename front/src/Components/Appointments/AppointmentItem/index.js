import React from "react";
import PropTypes from "prop-types";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import { Grid } from "@material-ui/core";
import { DialogConfirmation } from "../../Notifications";
import moment from "moment";
import useStyles from "./styles";

const AppointmentItem = ({ date, time, reason, idAppointment, showDate, showCancelation, onClickCancelAppointment }) => {

    /**
     * Method to check if the date is greater than today
     * @param {string} date
     * @returns {boolean}
     */
    const checkDateIsGreaterToday = date => {
        const today = moment(new Date()).format("YYYY-MM-DD");
        return moment(date).isSameOrAfter(today);
    };

    const classes = useStyles();
    const showButtonCancel = showCancelation && checkDateIsGreaterToday(date);

    return (
        <Grid container alignItems="stretch" className={classes.ctn} direction="row" justify="space-between">
            <Grid item md={4} xl={3} xs={4}>
                <Paper className={classes.paperHourOrDate} elevation={0}>
                    <Typography align="center" className={classes.fontHour} component="h2" variant="h5">
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

AppointmentItem.propTypes = {
    date: PropTypes.string.isRequired,
    time: PropTypes.string.isRequired,
    reason: PropTypes.string.isRequired,
    idAppointment: PropTypes.number.isRequired,
    showDate: PropTypes.bool,
    showCancelation: PropTypes.bool,
    onClickCancelAppointment: PropTypes.func,
};

export default AppointmentItem;