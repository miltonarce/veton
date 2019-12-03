import React, {useContext} from "react";
import {makeStyles, useTheme} from "@material-ui/core/styles";
import {Typography, CssBaseline, Grid, Tooltip} from "@material-ui/core";
import {
  AssignmentOutlined,
  BugReportOutlined,
  ColorizeOutlined,
  EditOutlined,
} from "@material-ui/icons";

import Consultation from "../Consultation";
import {AppContext} from "../../Store";

const useStyles = makeStyles(theme => ({
  headerConsult: {
    border: "2px solid #5c2299",
    borderRadius: "23px",
    borderStyle: "dashed",
    padding: "10px",
    marginTop: "1rem",
    color: "#5c2299",
  },
  centerElements: {
    textAlign: "center",
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

export default ListConsultations;
