import React, { useState } from "react";
import { Link, withRouter } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  Typography,
  Container,
  Menu,
  MenuItem,
} from "@material-ui/core";
import { Home, AccountCircle } from "@material-ui/icons";
import { withStyles } from "@material-ui/core/styles";
import Autocomplete from "../../../Users/Autocomplete";
import styles from "./styles";

const Header = ({onUserSelected, classes}) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const handleClick = event => setAnchorEl(event.currentTarget);
  const handleClose = () => setAnchorEl(null);

  return (
    <AppBar position="static">
      <nav>
        <Toolbar className={classes.Appbar}>
          <Container fixed className={classes.ContainerFlex}>
            <div className={classes.ContentLogo}>
              <Typography noWrap className={classes.Logo} variant="h1">
                Vet On
              </Typography>
            </div>
            <div className={classes.ContentAutocomplete}>
              <Autocomplete
                placeholder="Buscar pacientes"
                onUserSelected={onUserSelected}
              />
            </div>
            <div className={classes.Div} />
            <Link className={classes.ContentLink} to="/veterinary">
              <Home className={classes.Icons} />
              Inicio
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
                <Link className={classes.ContentLink} to="/veterinary/profile">
                  <MenuItem onClick={handleClose}>Perfil</MenuItem>
                </Link>
                <Link className={classes.ContentLink} to="/">
                  <MenuItem onClick={handleClose}>Salir</MenuItem>
                </Link>
              </Menu>
            </div>
          </Container>
        </Toolbar>
      </nav>
    </AppBar>
  );
};

export default withStyles(styles)(withRouter(props => <Header {...props} />));
