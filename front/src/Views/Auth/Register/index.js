import React, {useState} from "react";
import {Grid, Paper, CssBaseline, Button, Typography} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";

import RolSelect from "../../../Components/Forms/RolSelect";
import FormRegisterUser from "../../../Components/Forms/FormRegisterUser";
import FormRegistarVeterinary from "../../../Components/Forms/FormRegisterVeterinary";

const styles = makeStyles({
  Content: {
    height: "100vh",
    overflowY: "auto",
    display: "flex",
    backgroundImage: "url('assets/pattern-veton.jpg')",
    backgroundSize: "cover",
  },
  PaperLogin: {
    padding: "2rem",
    borderRadius: "23px",
  },
  TitleRegister: {
    padding: "1rem",
    textAlign: "center",
    fontSize: "2rem",
  },
  TitlesForm: {
    textAlign: "center",
    margin: "2rem",
    color: "#5c2299",
    fontWeight: 500,
  },
});

const Register = () => {
  const classes = styles();
  const [values, setValues] = useState({
    isLoading: false,
    hasError: null,
    openError: false,
    id_role: 4,
  });

  const handleOnRolSelected = id_role => {
    setValues({...values, id_role});
  };

  return (
    <div className={classes.Content}>
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
          xl={6}
          xs={10}
        >
          <Paper className={classes.PaperLogin}>
            <Grid
              container
              alignItems="center"
              direction="row"
              justify="center"
            >
              <Grid item xs={12}>
                <img
                  alt="Logo vet On, veterinaria online"
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
              >
                Registro
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography className={classes.TitlesForm} component="h3">
                Seleccione su tipo de usuario{" "}
              </Typography>
              <RolSelect
                initialValue={values.id_role}
                onRolSelected={handleOnRolSelected}
                onSetNext={() => true}
              />
            </Grid>
            <Grid item xs={12}>
              <Typography className={classes.TitlesForm} component="h3">
                Complete los siguientes datos
              </Typography>
              {values.id_role === 4 ? (
                <FormRegisterUser idRole={values.id_role} />
              ) : (
                <FormRegistarVeterinary idRole={values.id_role} />
              )}
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};

export default Register;
