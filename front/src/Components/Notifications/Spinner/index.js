import React from "react";
import { Paper, CssBaseline } from "@material-ui/core";
import useStyles from "./styles";

const Spinner = props => {
  const classes = useStyles(props);

  return (
    <>
      <CssBaseline />
      <div className={classes.root}>
        <Paper className={classes.paper}>
          <img
            alt="Vet On, veterinaria online"
            className={classes.Logo}
            src="/assets/Logo.svg"
          />
          <img
            alt="Cargando..."
            className={classes.Spinner}
            src="/assets/spinner.svg"
          />
        </Paper>
      </div>
    </>
  );
};

export default Spinner;
