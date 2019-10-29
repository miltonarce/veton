import React from "react";
import { Link, withRouter } from "react-router-dom";
import { AppBar, Toolbar, Typography, Button } from '@material-ui/core';
import { Home, AccountCircle } from "@material-ui/icons";
import { styled } from '@material-ui/core/styles';


import SearchBox from "../../../Components/Forms/SearchBox";

const Logo = styled(Typography)({
  width: '121px',
  height: '42px',
  backgroundImage: "url('assets/Logo.png')",
  fontSize: 0,
})
const ContentLogo = styled('div')({
  flexGrow: 1,
})

const ContentLink = styled(Link)({
  marginRight: "2rem",
  textDecoration: "none",
  color: "white",
})
const ContentIcon = styled('div')({
  marginRight: ".5rem",
})


class Header extends React.Component {
  render() {
    const {
      onSearch,
      location: { pathname }
    } = this.props;
    return (
      <AppBar position="static">
        <Toolbar>
          <ContentLogo>
            <Logo variant="h1" noWrap>Vet On</Logo>
          </ContentLogo>
          <ContentLink to="/veterinary">
            <Button color="inherit" ><ContentIcon><Home /></ContentIcon> Inicio</Button>
          </ContentLink>
          <ContentLink to="/veterinary/profile">
            <Button color="inherit" ><ContentIcon><AccountCircle /></ContentIcon> Perfil</Button>
          </ContentLink>
        </Toolbar>
      </AppBar>
      // <nav className="navbar-veton navbar navbar-expand-lg navbar-light bg-light">
      //   <Link className="navbar-brand" to="/veterinary">
      //     <img
      //       alt="VetOn, veterinaria online"
      //       className="logo_app"
      //       src="assets/Logo.svg"
      //     />
      //   </Link>
      //   <SearchBox placeholder="Buscar" onSearch={onSearch} />
      //   <button
      //     className="navbar-toggler"
      //     data-target="#navbarVeton"
      //     data-toggle="collapse"
      //     type="button"
      //   >
      //     <span className="navbar-toggler-icon" />
      //   </button>
      //   <div className="collapse navbar-collapse" id="navbarVeton">
      //     <ul className="navbar-nav ml-auto">
      //       <li className="nav-item">
      //         <Link
      //           className={this.getClassForLink(pathname, "/veterinary")}
      //           to="/veterinary"
      //         >
      //           <i className="material-icons">home</i>
      //           Inicio
      //         </Link>
      //       </li>
      //       <li className="nav-item">
      //         <Link
      //           className={this.getClassForLink(
      //             pathname,
      //             "/veterinary/profile"
      //           )}
      //           to="/veterinary/profile"
      //         >
      //           <i className="material-icons">account_circle</i>
      //           Perfil
      //         </Link>
      //       </li>
      //     </ul>
      //   </div>
      // </nav>
    );
  }

  /**
   * Method to check if the current path (location) is active
   * @param {string} pathname
   * @param {string} link
   * @returns {string} CSS Class
   */
  getClassForLink(pathname, link) {
    const defaultClass = "nav-link nav-link-veton";
    return pathname === link ? `${defaultClass} active` : defaultClass;
  }
}

export default withRouter(props => <Header {...props} />);
