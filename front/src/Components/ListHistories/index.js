import React, {useContext} from "react";
import PropTypes from "prop-types";
import {makeStyles} from "@material-ui/core/styles";
import {
  Card,
  Tab,
  Tabs,
  Typography,
  Box,
  Grid,
  Button,
} from "@material-ui/core";
import {EditOutlined} from "@material-ui/icons";
import {Link} from "react-router-dom";

import History from "../History";
import ListConsultations from "../ListConsultations";
import {AppContext} from "../../Store";

const TabPanel = props => {
  const {children, value, index, ...other} = props;
  return (
    <Typography
      aria-labelledby={`vertical-tab-${index}`}
      component="div"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
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
  id: `vertical-tab-${index}`,
  "aria-controls": `vertical-tabpanel-${index}`,
});

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    display: "flex",
    borderRadius: "23px",
  },
  tabs: {
    borderRight: `1px solid ${theme.palette.divider}`,
  },
  title: {
    color: "#5C2299",
    marginBottom: 0,
  },
  ContentLink: {
    textDecoration: "none",
  },
  panelTab: {
    width: "100%",
  },
  button: {
    paddingLeft: "20px",
    paddingRight: "20px",
    marginLeft: "1rem",
  },
  first: {
    marginTop: "-.5rem",
    marginBottom: "1rem",
  },
  second: {
    marginTop: "2rem",
  },
}));

const ListHistories = ({histories}) => {
  const {
    auth: {user},
  } = useContext(AppContext);
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Card className={classes.root}>
      <Tabs
        aria-label="Vertical tabs"
        className={classes.tabs}
        orientation="vertical"
        value={value}
        variant="scrollable"
        onChange={handleChange}
      >
        {histories.map((history, index) => (
          <Tab
            key={index}
            label={`#ID HISTORIA ${history.id_history}`}
            {...a11yProps(index)}
          />
        ))}
      </Tabs>
      {histories.map((history, index) => (
        <TabPanel
          key={index}
          className={classes.panelTab}
          index={index}
          value={value}
        >
          <Grid
            container
            alignItems="flex-start"
            direction="row"
            justify="center"
          >
            <Grid item className={classes.first} xs={12}>
              <Grid
                container
                alignItems="center"
                direction="row"
                justify="space-between"
              >
                <h3 className={classes.title}>Historia</h3>
                {user.id_role === 3 ? (
                  <div>
                    <Link
                      className={classes.ContentLink}
                      to={`/veterinary/edit-history/${history.id_history}`}
                    >
                      <Button
                        className={classes.button}
                        color="primary"
                        size="small"
                        startIcon={<EditOutlined />}
                        type="submit"
                        variant="contained"
                      >
                        Editar Historia
                      </Button>
                    </Link>
                  </div>
                ) : (
                  ""
                )}
              </Grid>
            </Grid>
            <Grid item xs={12}>
              <History dataHistory={history} user={user} />
            </Grid>
            <Grid item className={classes.second} xs={12}>
              <Grid
                container
                alignItems="center"
                direction="row"
                justify="space-between"
              >
                <h3 className={classes.title}>Consultas</h3>
                {user.id_role === 3 ? (
                  <div>
                    <Link
                      className={classes.ContentLink}
                      to={`/veterinary/add-consultation/${history.id_history}`}
                    >
                      <Button
                        className={classes.button}
                        color="secondary"
                        size="small"
                        type="submit"
                        variant="contained"
                      >
                        Agregar Consulta
                      </Button>
                    </Link>
                  </div>
                ) : (
                  ""
                )}
              </Grid>
              {history.consultations.length > 0 ? (
                <div>
                  <ListConsultations consultations={history.consultations} />
                </div>
              ) : (
                <p>No hay consultas registradas.</p>
              )}
            </Grid>
          </Grid>
        </TabPanel>
      ))}
    </Card>
  );
};

export default ListHistories;
