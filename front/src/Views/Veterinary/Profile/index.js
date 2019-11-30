import React from "react";
import {Container, CssBaseline, Grid, Paper} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";

import TitlePages from "../../../Components/TitlePages";

const useStyles = makeStyles(() => ({
  Main: {
    marginTop: "2rem",
  },
  Paper: {
    borderRadius: "23px",
    padding: "2rem",
  },
}));

const Profile = () => {
  const classes = useStyles();

  return (
    <>
      <CssBaseline />
      <Container fixed>
        <TitlePages
          subtitle="Aquí podra editar su veterinaria."
          title="Perfil del veterinaria Pepito"
        />
        <Grid
          container
          alignItems="center"
          className={classes.Main}
          direction="row"
          justify="center"
          spacing={2}
        >
          <Grid item md={6} xs={12}>
            <Paper className={classes.Paper}>asdasdasd</Paper>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default Profile;
