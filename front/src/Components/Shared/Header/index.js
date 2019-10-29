import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withRouter } from "react-router-dom";
import { AppBar, Toolbar, Typography, Button } from '@material-ui/core';
import { Home, Language, Pets, AccountCircle } from "@material-ui/icons";
import { styled } from '@material-ui/core/styles';

import SearchBox from "../../Forms/SearchBox";

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



class Header extends Component {
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
          <ContentLink className={this.getClassForLink(pathname, "/user")} to="/user">
            <Button color="inherit" ><ContentIcon><Home /></ContentIcon> Inicio</Button>
          </ContentLink>
          <ContentLink className={this.getClassForLink(pathname, "/user/option")} to="/user/option">
            <Button color="inherit" ><ContentIcon><Language /></ContentIcon> Opción</Button>
          </ContentLink>
          <ContentLink className={this.getClassForLink(pathname, "/user/pets")} to="/user/pets">
            <Button color="inherit" ><ContentIcon><Pets /></ContentIcon> Mascotas</Button>
          </ContentLink>
          <ContentLink className={this.getClassForLink(pathname, "/user/profile")} to="/user/profile">
            <Button color="inherit" ><ContentIcon><AccountCircle /></ContentIcon> Perfil</Button>
          </ContentLink>

        </Toolbar>
      </AppBar>
      // <nav className="navbar-veton navbar navbar-expand-lg navbar-light bg-light">
      //   <Link className="navbar-brand" to="/user">
      //     <img
      //       src="assets/Logo.svg"
      //       className="logo_app"
      //       alt="VetOn, veterinaria online"
      //     />
      //   </Link>
      //   <SearchBox placeholder="Buscar" onSearch={onSearch} />
      //   <button
      //     className="navbar-toggler"
      //     type="button"
      //     data-toggle="collapse"
      //     data-target="#navbarVeton"
      //   >
      //     <span className="navbar-toggler-icon"></span>
      //   </button>
      //   <div className="collapse navbar-collapse" id="navbarVeton">
      //     <ul className="navbar-nav ml-auto">
      //       <li className="nav-item">
      //         <Link
      //           className={this.getClassForLink(pathname, "/user")}
      //           to="/user"
      //         >
      //           <i className="material-icons">home</i>
      //           Inicio
      //         </Link>
      //       </li>
      //       <li className="nav-item">
      //         <Link
      //           className={this.getClassForLink(pathname, "/user/option")}
      //           to="/user/option"
      //         >
      //           <i className="material-icons">language</i>
      //           Opción
      //         </Link>
      //       </li>
      //       <li className="nav-item">
      //         <Link
      //           className={this.getClassForLink(pathname, "/user/pets")}
      //           to="/user/pets"
      //         >
      //           <i className="material-icons">pets</i>
      //           Mascotas
      //         </Link>
      //       </li>
      //       <li className="nav-item">
      //         <Link
      //           className={this.getClassForLink(pathname, "/user/profile")}
      //           to="/user/profile"
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
