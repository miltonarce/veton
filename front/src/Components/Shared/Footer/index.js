import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import {Container, Grid, Link} from "@material-ui/core";

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
    paddingLeft: 0,
    "& li": {
      display: "inline-block",
      marginLeft: "30px",
      marginTop: "10px",
      "& img": {
        verticalAlign: "middle",
        display: "block",
        margin: "7px auto",
      },
      "& span": {
        verticalAlign: "sub",
        marginLeft: "10px",
      },
    },
  },
  Link: {
    width: "40px",
    height: "40px",
    borderRadius: "80px",
    background: "#6b6565",
    display: "inline-block",
    "&:hover": {
      background: "#7a7171",
      cursor: "pointer",
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
          <Grid item md={3} xs={12}>
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
          <Grid item md={3} xs={12}>
            <Grid
              container
              alignItems="center"
              direction="row"
              justify="center"
            >
              <ul className={classes.Rs}>
                <li>
                  <Link className={classes.Link} to="www.facebook.com/veton">
                    <img alt="Red social FB" src="/assets/facebook.png" />
                  </Link>
                </li>
                <li>
                  <Link className={classes.Link} to="www.twitter.com/veton">
                    <img alt="Red social TW" src="/assets/twitter.png" />
                  </Link>
                </li>
                <li>
                  <Link className={classes.Link} to="www.instagram.com/veton">
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
