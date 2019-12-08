import React, { useContext } from "react";
import {
  Container,
  CssBaseline,
  Grid,
  Typography,
  Paper,
} from "@material-ui/core";
import TitlePages from "../../../Components/Shared/TitlePages";
import { AppContext } from "../../../Store";
import useStyles from "./styles";

const Profile = () => {
  const classes = useStyles();
  const {
    auth: { user },
  } = useContext(AppContext);

  return (
    <>
      <CssBaseline />
      <Container fixed>
        <TitlePages
          subtitle="Aquí podra editar su perfil de usuario."
          title="Perfil de usuario"
        />
        <Grid
          container
          alignItems="center"
          className={classes.Main}
          direction="row"
          justify="center"
          spacing={3}
        >
          <Grid item xs={12}>
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
                        src={
                          user.image
                            ? `http://api.veton/imgs/${user.image}`
                            : "/assets/no-image.png"
                        }
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
                              className={classes.UserName}
                              component="h3"
                              variant="h3"
                            >
                              {user.name && user.last_name
                                ? `${user.name} ${user.last_name}`
                                : "Sin nombre registrado."}
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
                              <Grid item xs={3}>
                                <Grid item xs={12}>
                                  <Typography color="secondary" component="p">
                                    DNI
                                  </Typography>
                                </Grid>
                                <Grid item xs={12}>
                                  {user.dni}
                                </Grid>
                              </Grid>
                              <Grid item xs={5}>
                                <Grid item xs={12}>
                                  <Typography color="secondary" component="p">
                                    EMAIL
                                  </Typography>
                                </Grid>
                                <Grid item xs={12}>
                                  {user.email}
                                </Grid>
                              </Grid>
                              <Grid item xs={4}>
                                <Grid item xs={12}>
                                  <Typography color="secondary" component="p">
                                    CUMPLEAÑOS
                                  </Typography>
                                </Grid>
                                <Grid item xs={12}>
                                  {user.birthday}
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
