import React from "react";
import {
  Modal,
  Fade,
  Backdrop,
  Tabs,
  Tab,
  Typography,
  Grid,
} from "@material-ui/core";
import { AssignmentOutlined } from "@material-ui/icons";
import TabPanel from "../TabPanel";
import useStyles from "./styles";

const ModalConsultation = props => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const { data } = props;
  const handleChange = (event, newValue) => setValue(newValue);

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
                  <Grid item xs={4}>
                    <Grid item xs={12}>
                      <Typography color="secondary" component="p">
                        #ID CONSULTA
                      </Typography>
                    </Grid>
                    <Grid item xs={12}>{data.id_consultation}</Grid>
                  </Grid>
                  <Grid item xs={4}>
                    <Grid item xs={12}>
                      <Typography color="secondary" component="p">
                        FECHA DE CONSULTA
                      </Typography>
                    </Grid>
                    <Grid item xs={12}>{data.created_at}</Grid>
                  </Grid>
                  <Grid item xs={4}>
                    <Grid item xs={12}>
                      <Typography color="secondary" component="p">
                        ULTIMA ACTUALIZACIÓN
                      </Typography>
                    </Grid>
                    <Grid item xs={12}>{data.updated_at}</Grid>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item className={classes.filas} xs={12}>
                <Grid item xs={12}>
                  <Typography color="secondary" component="p">
                    AFLICCIONES
                  </Typography>
                </Grid>
                <Grid item xs={12}>{data.afflictions_procedures}</Grid>
              </Grid>
              <Grid item className={classes.filas} xs={12}>
                <Grid item xs={12}>
                  <Typography color="secondary" component="p">
                    COMENTARIOS
                  </Typography>
                </Grid>
                <Grid item xs={12}>{data.comments}</Grid>
              </Grid>
            </Grid>
          </TabPanel>
        </div>
      </Fade>
    </Modal>
  );
};

export default ModalConsultation;
