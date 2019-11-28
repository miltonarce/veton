import React, {useContext} from "react";
import PropTypes from "prop-types";
import SwipeableViews from "react-swipeable-views";
import {makeStyles, useTheme} from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

import Consultation from "../Consultation";
import {AppContext} from "../../Store";

const TabPanel = props => {
  const {children, value, index, ...other} = props;

  return (
    <Typography
      aria-labelledby={`full-width-tab-${index}`}
      component="div"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      role="tabpanel"
      {...other}
    >
      <Box p={3}>{children}</Box>
    </Typography>
  );
};

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

const a11yProps = index => ({
  id: `full-width-tab-${index}`,
  "aria-controls": `full-width-tabpanel-${index}`,
});

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    width: 500,
  },
}));

const ListConsultations = ({consultations}) => {
  const classes = useStyles();
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = index => {
    setValue(index);
  };

  const {
    auth: {user},
  } = useContext(AppContext);

  return (
    <div className={classes.root}>
      <AppBar color="default" position="static">
        <Tabs
          aria-label="full width tabs"
          indicatorColor="primary"
          textColor="primary"
          value={value}
          variant="scrollable"
          onChange={handleChange}
        >
          {consultations.map((consultation, index) => (
            <Tab
              key={index}
              label={`#ID CONSULTA ${consultation.id_consultation}`}
              {...a11yProps(index)}
            />
          ))}
        </Tabs>
      </AppBar>
      <SwipeableViews
        axis={theme.direction === "rtl" ? "x-reverse" : "x"}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        {consultations.map((consultation, index) => (
          <TabPanel
            key={index}
            dir={theme.direction}
            index={index}
            value={value}
          >
            <Consultation dataConsultation={consultation} user={user} />
          </TabPanel>
        ))}
      </SwipeableViews>
    </div>
  );
};

export default ListConsultations;
