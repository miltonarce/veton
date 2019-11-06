import React from "react";
import {Link, withRouter} from "react-router-dom";

import {AppBar, Toolbar, Typography, Button} from "@material-ui/core";
import {Home, Pets, AccountCircle} from "@material-ui/icons";
import {withStyles} from "@material-ui/core/styles";

const styles = {
  Appbar: {
    background: "white",
  },
  Logo: {
    width: "121px",
    height: "42px",
    backgroundImage: "url('assets/Logo.png')",
    fontSize: 0,
  },
  ContentLogo: {flexGrow: 1},
  ContentLink: {
    marginRight: "2rem",
    textDecoration: "none",
    color: "#999999",
  },
  ContentIcon: {marginRight: ".5rem"},
};

const Header = ({classes}) => (
  <AppBar position="static">
    <Toolbar className={classes.Appbar}>
      <div className={classes.ContentLogo}>
        <Typography noWrap className={classes.Logo} variant="h1">
          Vet On
        </Typography>
      </div>
      <Link className={classes.ContentLink} to="/user">
        <Button color="inherit">
          <div className={classes.ContentIcon}>
            <Home />
          </div>{" "}
          Inicio
        </Button>
      </Link>
      <Link className={classes.ContentLink} to="/user/pets">
        <Button color="inherit">
          <div className={classes.ContentIcon}>
            <Pets />
          </div>{" "}
          Mascotas
        </Button>
      </Link>
      <Link className={classes.ContentLink} to="/user/profile">
        <Button color="inherit">
          <div className={classes.ContentIcon}>
            <AccountCircle />
          </div>{" "}
          Perfil
        </Button>
      </Link>
    </Toolbar>
  </AppBar>
);

export default withStyles(styles)(withRouter(props => <Header {...props} />));
