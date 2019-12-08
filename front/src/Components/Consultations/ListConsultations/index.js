import React, { useContext } from "react";
import PropTypes from "prop-types";
import { CssBaseline, Grid, Tooltip } from "@material-ui/core";
import { AssignmentOutlined, BugReportOutlined, ColorizeOutlined } from "@material-ui/icons";
import Consultation from "../Consultation";
import { AppContext } from "../../../Store";
import useStyles from "./styles";

const ListConsultations = ({ consultations }) => {
  const classes = useStyles();
  const { auth: { user } } = useContext(AppContext);

  return (
    <>
      <CssBaseline />
      <Grid container alignItems="center" direction="row" justify="flex-start">
        <Grid item xs={user.id_role === 3 ? 10 : 12}>
          <div className={classes.headerConsult}>
            <Grid
              container
              alignItems="center"
              direction="row"
              justify="center"
            >
              <Grid item className={classes.centerElements} xs={4}>
                <Tooltip title="Consultas">
                  <AssignmentOutlined />
                </Tooltip>
              </Grid>
              <Grid item className={classes.centerElements} xs={4}>
                <Tooltip title="Vacunas">
                  <ColorizeOutlined />
                </Tooltip>
              </Grid>
              <Grid item className={classes.centerElements} xs={4}>
                <Tooltip title="Desparasitantes">
                  <BugReportOutlined />
                </Tooltip>
              </Grid>
            </Grid>
          </div>
        </Grid>
        <Grid item xs={12}>
          {consultations.map((consultation, index) => (
            <Consultation
              key={index}
              dataConsultation={consultation}
              user={user}
            />
          ))}
        </Grid>
      </Grid>
    </>
  );
};

Consultation.propTypes = {
  consultations: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};

export default ListConsultations;
