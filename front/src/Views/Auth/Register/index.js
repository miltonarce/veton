import React, { useState } from "react";
import { Grid, Paper, CssBaseline, Typography } from "@material-ui/core";
import { RolSelect, RegisterUserForm , RegisterVeterinaryForm } from "../../../Components/Auth";
import useStyles from "./styles";

const Register = () => {
  const classes = useStyles();
  const [values, setValues] = useState({
    isLoading: false,
    hasError: null,
    openError: false,
    id_role: 4,
  });

  const handleOnRolSelected = id_role => {
    setValues({ ...values, id_role });
  };

  return (
    <section className={classes.Content}>
      <CssBaseline />
      <Grid container alignItems="center" direction="row" justify="center">
        <Grid
          item
          lg={6}
          md={6}
          style={{
            marginTop: "100px",
            marginBottom: "200px",
          }}
          xl={5}
          xs={10}
        >
          <Paper className={classes.PaperLogin}>
            <Grid
              container
              alignItems="center"
              direction="row"
              justify="center"
            >
              <Grid item xs={10} component="figure">
                <img
                  alt="Vet On, veterinaria online"
                  src="assets/Logo.svg"
                />
              </Grid>
            </Grid>
            <Grid item xs={12}>
              <Typography
                gutterBottom
                className={classes.TitleRegister}
                color="secondary"
                variant="body2"
                component="h1"
              >
                Registro
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography className={classes.TitlesForm} component="h2">
                Seleccione su tipo de usuario{" "}
              </Typography>
              <RolSelect
                initialValue={values.id_role}
                onRolSelected={handleOnRolSelected}
                onSetNext={() => true}
              />
            </Grid>
            <Grid item xs={12} component="section">
              <Typography className={classes.TitlesForm} component="h2">
                Complete los siguientes datos
              </Typography>
              {values.id_role === 4 ? (
                <RegisterUserForm idRole={values.id_role} />
              ) : (
                  <RegisterVeterinaryForm idRole={values.id_role} />
                )}
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    </section>
  );
};

export default Register;
