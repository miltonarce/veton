import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { Link } from "react-router-dom";

import History from "../../Components/History";
import ListConsultations from "../../Components/ListConsultations";
import { AppContext } from '../../Store';

const TabPanel = props => {
  const { children, value, index, ...other } = props;
  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      <Box p={3}>{children}</Box>
    </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

const a11yProps = index => {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    display: 'flex',
    height: 524,
  },
  tabs: {
    borderRight: `1px solid ${theme.palette.divider}`,
  },
}));

const ListHistories = ({ histories }) => {

  const { auth: { logged, user } } = useContext(AppContext);
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        className={classes.tabs}
      >
        {histories.map((history, index) => (<Tab label={`#ID HISTORIA ${history.id_history}`} {...a11yProps(index)} />))}
      </Tabs>
      {histories.map((history, index) => (
        <TabPanel value={value} index={index}>
          <History dataHistory={history} user={user} />
          <h3>Consultas</h3>
          {user.id_role === 3 ?
            <Link to={`/veterinary/add-consultation/${history.id_history}`}>
              Agregar Consulta
                  </Link> : ''}
          {
            history.consultations.length > 0 ?
              (<div>
                <ListConsultations consultations={history.consultations} />
              </div>) :
              (
                <p>No hay consultas registradas.</p>
              )}
        </TabPanel>
      ))}
    </div>
  );
}

export default ListHistories;