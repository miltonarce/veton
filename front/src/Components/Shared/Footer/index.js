import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import {Container, Grid} from "@material-ui/core";

const styles = makeStyles({
  Footer: {
    width: "100%",
    minheight: "200px",
    background: "#4E4E4E",
    marginTop: "1rem",
    paddingBottom: "20px",
    paddingTop: "20px",
    left: 0,
    bottom: 0,
  },
  Logo: {
    width: "140px",
  },
  TitleRs: {
    marginLeft: "70px",
    color: "#CBCBCB",
  },
  Rs: {
    color: "#CBCBCB",
    listStyle: "none",
    "& li": {
      display: "inline-block",
      marginLeft: "30px",
      marginTop: "10px",
      "& img": {
        verticalAlign: "middle",
      },
      "& span": {
        verticalAlign: "sub",
        marginLeft: "10px",
      },
    },
  },
});

const Footer = () => {
  const classes = styles();

  return (
    <footer className={classes.Footer}>
      <Container fixed>
        <Grid
          container
          alignItems="center"
          direction="row"
          justify="space-between"
        >
          <Grid item md={4} xs={12}>
            <Grid
              container
              alignItems="center"
              direction="row"
              justify="center"
            >
              <img
                alt="Logo veton"
                className={classes.Logo}
                src="/assets/Logo2.png"
              />
            </Grid>
          </Grid>
          <Grid item md={5} xs={12}>
            <p className={classes.TitleRs}>Encontranos en:</p>
            <ul className={classes.Rs}>
              <li>
                <img alt="Red social FB" src="/assets/facebook.png" />
                <span>/vetOnline</span>
              </li>
              <li>
                <img alt="Red social TW" src="/assets/twitter.png" />
                <span>/vetOn</span>
              </li>
              <li>
                <img alt="Red social IG" src="/assets/instagram.png" />
                <span>/vetOnline24</span>
              </li>
            </ul>
          </Grid>
        </Grid>
      </Container>
    </footer>
  );
};

export default Footer;
