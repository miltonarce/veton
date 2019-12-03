import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import {
  Modal,
  Fade,
  Backdrop,
  Tabs,
  Tab,
  Typography,
  Box,
  Grid,
} from "@material-ui/core";
import {AssignmentOutlined} from "@material-ui/icons";

const useStyles = makeStyles(theme => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    backgroundColor: "#fff",
    borderRadius: "23px",
    // padding: theme.spacing(2, 4, 3),
    outline: "none",
    minWidth: "500px",
    maxWidth: "700px",
  },
  root: {
    flexGrow: 1,
  },

  title: {
    color: "#5C2299",
    margin: 0,
    marginBottom: "1rem",
  },
  filas: {
    marginBottom: "1rem",
  },
  tabs: {
    borderBottom: "1px solid #5c2299",
  },
}));

const TabPanel = props => {
  const {children, value, index, ...other} = props;

  return (
    <Typography
      aria-labelledby={`scrollable-auto-tab-${index}`}
      component="div"
      hidden={value !== index}
      id={`scrollable-auto-tabpanel-${index}`}
      role="tabpanel"
      {...other}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </Typography>
  );
};

const ModalConsultation = props => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const {data} = props;

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Modal
      closeAfterTransition
      aria-describedby="transition-modal-consultation"
      aria-labelledby="transition-modal-consultation-detail"
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
      className={classes.modal}
      open={props.open}
      onClose={props.close}
    >
      <Fade in={props.open}>
        <div className={classes.paper}>
          <Tabs
            centered
            className={classes.tabs}
            indicatorColor="primary"
            textColor="primary"
            value={value}
            onChange={handleChange}
          >
            <Tab aria-label="Consultation" icon={<AssignmentOutlined />} />
          </Tabs>
          <TabPanel index={0} value={value}>
            <Grid
              container
              alignItems="center"
              direction="row"
              justify="center"
            >
              <Grid item xs={12}>
                <h4 className={classes.title}>
                  DATOS GENERALES DE LA CONSULTA
                </h4>
              </Grid>
              <Grid item className={classes.filas} xs={12}>
                <Grid
                  container
                  alignItems="center"
                  direction="row"
                  justify="center"
                >
                  <Grid itemx xs={4}>
                    <Grid xs={12}>
                      <Typography color="secondary" component="p">
                        #ID CONSULTA
                      </Typography>
                    </Grid>
                    <Grid xs={12}>{data.id_consultation}</Grid>
                  </Grid>
                  <Grid itemx xs={4}>
                    <Grid xs={12}>
                      <Typography color="secondary" component="p">
                        FECHA DE CONSULTA
                      </Typography>
                    </Grid>
                    <Grid xs={12}>{data.created_at}</Grid>
                  </Grid>
                  <Grid itemx xs={4}>
                    <Grid xs={12}>
                      <Typography color="secondary" component="p">
                        ULTIMA ACTUALIZACIÓN
                      </Typography>
                    </Grid>
                    <Grid xs={12}>{data.updated_at}</Grid>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item className={classes.filas} xs={12}>
                <Grid xs={12}>
                  <Typography color="secondary" component="p">
                    AFLICCIONES
                  </Typography>
                </Grid>
                <Grid xs={12}>{data.afflictions_procedures}</Grid>
              </Grid>
              <Grid item className={classes.filas} xs={12}>
                <Grid xs={12}>
                  <Typography color="secondary" component="p">
                    COMENTARIOS
                  </Typography>
                </Grid>
                <Grid xs={12}>{data.comments}</Grid>
              </Grid>
            </Grid>
          </TabPanel>
        </div>
      </Fade>
    </Modal>
  );
};

export default ModalConsultation;
