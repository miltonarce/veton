import React from "react";
import {Link, withRouter} from "react-router-dom";
import {AppBar, Toolbar, Typography, Button} from "@material-ui/core";
import {Home, AccountCircle} from "@material-ui/icons";
import {styled} from "@material-ui/core/styles";
import Autocomplete from "../../../Components/Autocomplete";

const Logo = styled(Typography)({
  width: "121px",
  height: "42px",
  backgroundImage: "url('assets/Logo.png')",
  fontSize: 0,
});
const ContentLogo = styled("div")({
  flexGrow: 1,
});

const ContentLink = styled(Link)({
  marginRight: "2rem",
  textDecoration: "none",
  color: "white",
});
const ContentIcon = styled("div")({
  marginRight: ".5rem",
});

const ContentAutocomplete = styled("div")({
  backgroundColor: "#fff",
  borderRadius: "23px",
  padding: "0 10px",
});

const Header = ({onUserSelected}) => (
  <AppBar position="static">
    <Toolbar>
      <ContentLogo>
        <Logo noWrap variant="h1">
          Vet On
        </Logo>
      </ContentLogo>
      <ContentAutocomplete>
        <Autocomplete placeholder="Buscar usuarios" onUserSelected={onUserSelected} />
      </ContentAutocomplete>
      <ContentLink to="/veterinary">
        <Button color="inherit">
          <ContentIcon>
            <Home />
          </ContentIcon>{" "}
          Inicio
        </Button>
      </ContentLink>
      <ContentLink to="/veterinary/profile">
        <Button color="inherit">
          <ContentIcon>
            <AccountCircle />
          </ContentIcon>{" "}
          Perfil
        </Button>
      </ContentLink>
    </Toolbar>
  </AppBar>
);

export default withRouter(props => <Header {...props} />);
