import React from "react";
import { Link, withRouter } from "react-router-dom";

import SearchBox from "../../../Components/Forms/SearchBox";

class Header extends React.Component {
  render() {
    const {
      onSearch,
      location: { pathname }
    } = this.props;
    return (
      <nav className="navbar-veton navbar navbar-expand-lg navbar-light bg-light">
        <Link className="navbar-brand" to="/veterinary">
          <img
            alt="VetOn, veterinaria online"
            className="logo_app"
            src="assets/Logo.svg"
          />
        </Link>
        <SearchBox placeholder="Buscar" onSearch={onSearch} />
        <button
          className="navbar-toggler"
          data-target="#navbarVeton"
          data-toggle="collapse"
          type="button"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarVeton">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link
                className={this.getClassForLink(pathname, "/veterinary")}
                to="/veterinary"
              >
                <i className="material-icons">home</i>
                Inicio
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={this.getClassForLink(
                  pathname,
                  "/veterinary/profile"
                )}
                to="/veterinary/profile"
              >
                <i className="material-icons">account_circle</i>
                Perfil
              </Link>
            </li>
          </ul>
        </div>
      </nav>
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
