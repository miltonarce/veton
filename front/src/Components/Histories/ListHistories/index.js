import React, { useContext } from "react";
import {
  Card,
  Tab,
  Tabs,
  Grid,
  Button,
} from "@material-ui/core";
import { EditOutlined } from "@material-ui/icons";
import { Link } from "react-router-dom";
import History from "../History";
import {ListConsultations} from "../../Consultations";
import { AppContext } from "../../../Store";
import TabPanel from "../TabPanel";
import useStyles from "./styles";

const a11yProps = index => ({
  id: `vertical-tab-${index}`,
  "aria-controls": `vertical-tabpanel-${index}`,
});

const ListHistories = ({ histories }) => {
  const {
    auth: { user },
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
        component="aside"
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
            component="section"
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
