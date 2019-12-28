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
import {
  Pets,
  AccountCircle,
  StoreOutlined,
  HomeOutlined,
} from "@material-ui/icons";
import { withStyles } from "@material-ui/core/styles";
import styles from "./styles";

const Header = ({ classes }) => {
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
            <Link className={classes.ContentLink} to="/user">
              <HomeOutlined className={classes.Icons} />
              Inicio
            </Link>
            <Link className={classes.ContentLink} to="/user/appointments">
              <StoreOutlined className={classes.Icons} />
              Turnos
            </Link>
            <Link className={classes.ContentLink} to="/user/pets">
              <Pets className={classes.Icons} />
              Mascotas
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
                <Link className={classes.ContentLink} to="/user/profile">
                  <MenuItem onClick={handleClose}>Perfil</MenuItem>
                </Link>
                <Link className={classes.ContentLink} to="/">
                  <MenuItem onClick={() => {
                    localStorage.clear();
                    handleClose();
                  }}>Salir</MenuItem>
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
