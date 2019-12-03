import React from "react";
import {
  Container,
  CssBaseline,
  Grid,
  Typography,
  Paper,
} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";

import TitlePages from "../../../Components/TitlePages";

const useStyles = makeStyles(() => ({
  Main: {
    marginTop: "2rem",
  },
  Paper: {
    borderRadius: "23px",
    padding: "1.5rem",
    height: "auto",
  },
  ContentCardUserProfile: {
    marginTop: ".5rem",
  },
  ContentImage: {
    position: "relative",
    height: "8.56rem",
  },
  ImageUser: {
    top: "-0.7rem",
    width: "9.75rem",
    height: "10rem",
    position: "absolute",
    boxShadow: "0px 3px 11px 5px rgba(0, 0, 0, 0.16)",
    borderRadius: "123px",
    left: "2rem", 
  },
  BusinessName: {
    color: "#4E4E4E",
    fontSize: "1.87rem",
    fontWeight: 600,
    marginBottom: ".2 rem",
  },
  Content: {
    margin: ".75rem",
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
          title="Perfil de veterinaria"
        />
        <Grid
          container
          alignItems="center"
          className={classes.Main}
          direction="row"
          justify="center"
          spacing={3}
        >
          <Grid item md={12} xs={12}>
            <Grid
              container
              alignItems="center"
              direction="row"
              justify="space-between"
              spacing={2}
            >
              <Grid item className={classes.ContentCardUserProfile} xs={10}>
                <Paper className={classes.Paper}>
                  <Grid
                    container
                    alignItems="center"
                    className={classes.Paper}
                    direction="row"
                    justify="space-between"
                    spacing={4}
                  >
                    <Grid item className={classes.ContentImage} xs={2}>
                      <img
                        alt=""
                        className={classes.ImageUser}
                        src="http://api.veton/imgs/maskkotas.jpg"
                      />
                    </Grid>
                    <Grid item className={classes.Paper} xs={9}>
                      <Grid
                        container
                        alignItems="center"
                        className={classes.Content}
                        direction="row"
                        justify="flex-start"
                        spacing={4}
                      >
                        <Grid item xs={8}>
                          <Grid item xs={12}>
                            <Typography
                              className={classes.BusinessName}
                              component="h3"
                              variant="h3"
                            >
                              Maskkotas SA
                            </Typography>
                          </Grid>
                          <Grid item xs={12}>
                            <Grid
                              container
                              alignItems="center"
                              direction="row"
                              justify="flex-start"
                              spacing={4}
                            >
                              <Grid item xs={4}>
                                <Grid item xs={12}>
                                  <Typography color="secondary" component="p">
                                    CUIT_CUIL
                                  </Typography>
                                </Grid>
                                <Grid item xs={12}>
                                  12345678
                                </Grid>
                              </Grid>
                              <Grid item xs={4}>
                                <Grid item xs={12}>
                                  <Typography color="secondary" component="p">
                                    TELEFONO
                                  </Typography>
                                </Grid>
                                <Grid item xs={12}>
                                  123456789
                                </Grid>
                              </Grid>
                              <Grid item xs={4}>
                                <Grid item xs={12}>
                                  <Typography color="secondary" component="p">
                                    TELEFONO2
                                  </Typography>
                                </Grid>
                                <Grid item xs={12}>
                                  123456789
                                </Grid>
                              </Grid>
                              <Grid item xs={4}>
                                <Grid item xs={12}>
                                  <Typography color="secondary" component="p">
                                    DIRECCION
                                  </Typography>
                                </Grid>
                                <Grid item xs={12}>
                                  Calle falsa 123
                                </Grid>
                              </Grid>
                              <Grid item xs={4}>
                                <Grid item xs={12}>
                                  <Typography color="secondary" component="p">
                                    ENTRE CALLES
                                  </Typography>
                                </Grid>
                                <Grid item xs={12}>
                                  Calle siempre viva y Elm street
                                </Grid>
                              </Grid>
                            </Grid>
                          </Grid>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                </Paper>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default Profile;
