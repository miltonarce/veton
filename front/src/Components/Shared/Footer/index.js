import React from "react";
import { Container, Grid, Link } from "@material-ui/core";
import useStyles from "./styles";

const Footer = () => {
  const classes = useStyles();

  return (
    <footer className={classes.Footer}>
      <Container fixed>
        <Grid
          container
          alignItems="center"
          direction="row"
          justify="space-between"
        >
          <Grid item md={3} xs={12}>
            <Grid
              container
              alignItems="center"
              direction="row"
              justify="center"
            >
              <img
                alt="VetOn, veterinaria online"
                className={classes.Logo}
                src="/assets/Logo2.png"
              />
            </Grid>
          </Grid>
          <Grid item md={3} xs={12}>
            <Grid
              container
              alignItems="center"
              direction="row"
              justify="center"
            >
              <ul className={classes.Rs}>
                <li>
                  <Link className={classes.Link} href="https://www.facebook.com/veton">
                    <img alt="Red social FB" src="/assets/facebook.png" />
                  </Link>
                </li>
                <li>
                  <Link className={classes.Link} href="https://www.twitter.com/veton">
                    <img alt="Red social TW" src="/assets/twitter.png" />
                  </Link>
                </li>
                <li>
                  <Link className={classes.Link} href="https://www.instagram.com/veton">
                    <img alt="Red social IG" src="/assets/instagram.png" />
                  </Link>
                </li>
              </ul>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </footer>
  );
};

export default Footer;
