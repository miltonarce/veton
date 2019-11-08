import React, {useState} from "react";
import {Link, withRouter} from "react-router-dom";

import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Container,
  Menu,
  MenuItem,
} from "@material-ui/core";
import {Home, Pets, AccountCircle} from "@material-ui/icons";
import {withStyles} from "@material-ui/core/styles";
import Auth from "../../../Services/Auth";

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
  ButtonLogout: {
    color: "#999999",
  },
  ContentLink: {
    marginRight: "2rem",
    textDecoration: "none",
    color: "#999999",
  },
  ContentIcon: {marginRight: ".5rem"},
  ContainerFlex: {
    display: "flex",
    position: "relative",
    alignItems: "center",
  },
};

const Header = ({classes}) => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = async () => {
    setAnchorEl(null);
    const {data} = await Auth.logout();

    console.log(data);
  };

  return (
    <AppBar position="static">
      <Toolbar className={classes.Appbar}>
        <Container fixed className={classes.ContainerFlex}>
          <div className={classes.ContentLogo}>
            <Typography noWrap className={classes.Logo} variant="h1">
              Vet On
            </Typography>
          </div>
          {/* <Link className={classes.ContentLink} to="/user">
            <Button color="inherit">
              <div className={classes.ContentIcon}>
                <Home />
              </div>{" "}
              Inicio
            </Button>
          </Link> */}
          <Link className={classes.ContentLink} to="/user/pets">
            <Button color="inherit">
              <div className={classes.ContentIcon}>
                <Pets />
              </div>{" "}
              Mascotas
            </Button>
          </Link>
          <div className={classes.ContentLink}>
            <div>
              <AccountCircle
                aria-controls="simple-menu"
                aria-haspopup="true"
                className={classes.ContentIcon}
                onClick={handleClick}
              />
            </div>
            <Menu
              keepMounted
              anchorEl={anchorEl}
              id="simple-menu"
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              {/* <Link className={classes.ContentLink} to="/user/profile">
                <MenuItem onClick={handleClose}>Perfil</MenuItem>
              </Link> */}
              <Link className={classes.ContentLink} to="/">
                <MenuItem onClick={handleClose}>Logout</MenuItem>
              </Link>
            </Menu>
          </div>
        </Container>
      </Toolbar>
    </AppBar>
  );
};

export default withStyles(styles)(withRouter(props => <Header {...props} />));
