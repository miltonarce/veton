import React, { useState, useEffect } from "react";
import AppointmentList from "../AppointmentList";
import moment from "moment";
import { CircularProgress } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import NavigateNextOutlined from '@material-ui/icons/NavigateNextOutlined';
import NavigateBeforeOutlined from '@material-ui/icons/NavigateBeforeOutlined';
import Api from "../../Services/Api";

import "moment/locale/es";

moment.locale("es");

const ONE_DAY = 1;
const DAYS = 'days';

const useStyles = makeStyles(() => ({
    title: {
        color: 'rgb(254, 48, 144)',
        textAlign: 'center',
        marginTop: '37px',
    },
    icons: {
        color: '#fff',
    },
    listHours: {
        padding: '10px',
        borderRadius: '0 0 18px 18px',
        backgroundColor: '#fff',
        textAlign: 'center',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
    },
    ctnDateSelection: {
        padding: '10px',
        backgroundColor: 'rgb(254, 48, 144)',
        borderRadius: '18px 18px 0 0',
        textAlign: 'center',
        fontWeight: 600,
        fontSize: '18px',
        color: '#fff',
        display: 'flex',
        justifyContent: 'space-between',
    }
}));

const AppointmentListWithDate = ({ idVet }) => {
    const classes = useStyles();
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [loading, setLoading] = useState(false);
    const [appointments, setAppointments] = useState([]);
    const [error, setError] = useState(null);

    //Fetch appointments when change date
    useEffect(() => {
        const date = moment(selectedDate).format("YYYY-MM-DD");
        getAppointmentsByDate(date);
    }, [selectedDate]);

    /**
     * Method to handle before day
     * @returns {void}
     */
    const handleBeforeDay = () => {
        const dateBefore = moment(selectedDate).subtract(ONE_DAY, DAYS);
        setSelectedDate(dateBefore);
    }

    /**
     * Method to handle next day
     * @returns {void}
     */
    const handleNextDay = () => {
        const dateNext = moment(selectedDate).add(ONE_DAY, DAYS);
        setSelectedDate(dateNext);
    }

    /**
     * Method to fetch appointments by date by vet
     * @param {date} date
     * @returns Promise
     */
    const getAppointmentsByDate = async date => {
        try {
            setLoading(true);
            const { data } = await Api.appointments.fetchByVet(idVet, date);
            if (data.success) {
                setAppointments(data.data);
                setError(null);
            } else {
                console.log('err');
                setError('Se produjo un error al obtener los turnos del día');
            }
            setLoading(false);
        } catch (err) {
            setLoading(false);
            setError('Se produjo un error al obtener los turnos del día');
        }
    }

    return (
        <div>
            <h2 className={classes.title}>Turnos del día de hoy</h2>
            <div className={classes.ctnDateSelection}>
                <IconButton aria-label="before" className={classes.icons} onClick={handleBeforeDay}>
                    <NavigateBeforeOutlined />
                </IconButton>
                <p style={{userSelect: 'none'}}>{moment(selectedDate).format('LL')}</p>
                <IconButton aria-label="next" className={classes.icons} onClick={handleNextDay}>
                    <NavigateNextOutlined />
                </IconButton>
            </div>
            <div className={classes.listHours}>
                {!loading && appointments.length > 0 && <AppointmentList showDate={false} appointments={appointments} />}
                {loading && <CircularProgress />}
                {!loading && error && <p>{error}</p>}
                {!loading && appointments.length === 0 && <p>Sin turnos</p>}
            </div>
        </div>
    );

}

export default AppointmentListWithDate;