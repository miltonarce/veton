import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import {
  Container,
  Grid,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Avatar,
} from "@material-ui/core";

const styles = makeStyles({
  Footer: {
    width: "100%",
    height: "200px",
    background: "#4E4E4E",
    marginTop: "1rem",
  },
  Logo: {
    width: "140px",
  },
  Rs: {
    "& p": {
      color: "#CBCBCB",
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
          <Grid item xs={4}>
            <img
              alt="Logo veton"
              className={classes.Logo}
              src="/assets/Logo2.png"
            />
          </Grid>
          <Grid item xs={2}>
            <List>
              <ListItem>
                <ListItemText
                  className={classes.Rs}
                  secondary="Encontranos en:"
                />
              </ListItem>
              <ListItem>
                <ListItemAvatar>
                  <img alt="Red social FB" src="/assets/facebook.png" />
                </ListItemAvatar>
                <ListItemText className={classes.Rs} secondary="/vetOnline" />
              </ListItem>
              <ListItem>
                <ListItemAvatar>
                  <img alt="Red social TW" src="/assets/twitter.png" />
                </ListItemAvatar>
                <ListItemText className={classes.Rs} secondary="/vetOn" />
              </ListItem>
              <ListItem>
                <ListItemAvatar>
                  <img alt="Red social IG" src="/assets/instagram.png" />
                </ListItemAvatar>
                <ListItemText className={classes.Rs} secondary="/vetOnline24" />
              </ListItem>
            </List>
          </Grid>
        </Grid>
      </Container>
    </footer>
  );
};

export default Footer;
