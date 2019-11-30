import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { Grid } from "@material-ui/core";
import moment from "moment";

const useStyles = makeStyles(theme => ({
    ctn: {
        margin: '20px 0',
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
    }
}));


const AppointmentItem = ({ date, time, reason }) => {
    const classes = useStyles();
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
                        {moment(date).format("DD/MM/YYYY")}
                    </Typography>
                    <Typography component="p">
                        {reason}
                    </Typography>
                </Paper>
            </Grid>
        </Grid>
    );
}

export default function AppointmentList({ appointments }) {
    return appointments.map((app, index) => <AppointmentItem key={index} date={app.date} time={app.time} reason={app.reason} />);
}