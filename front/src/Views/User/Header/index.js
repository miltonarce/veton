import React from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import Logo from '../../../assets/images/Logo.png';
import SearchBox from '../../../Components/Forms/SearchBox';
import './index.scss';

class Header extends React.PureComponent {
  render() {
    const {
      onSearch,
      location: { pathname },
    } = this.props;
    return (
      <nav className="navbar-veton navbar navbar-expand-lg navbar-light bg-light">
        <Link className="navbar-brand" to="/user">
          <img src={Logo} className="logo_app" alt="VetOn, veterinaria online" />
        </Link>
        <SearchBox placeholder="Buscar" onSearch={onSearch} />
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarVeton">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarVeton">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link className={this.getClassForLink(pathname, '/user')} to="/user">
                <i className="material-icons">home</i>
                Inicio
              </Link>
            </li>
            <li className="nav-item">
              <Link className={this.getClassForLink(pathname, '/user/option')} to="/user/option">
                <i className="material-icons">language</i>
                Opción
              </Link>
            </li>
            <li className="nav-item">
              <Link className={this.getClassForLink(pathname, '/user/pets')} to="/user/pets">
                <i className="material-icons">pets</i>
                Mascotas
              </Link>
            </li>
            <li className="nav-item">
              <Link className={this.getClassForLink(pathname, '/user/profile')} to="/user/profile">
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
    const defaultClass = 'nav-link nav-link-veton';
    return pathname === link ? `${defaultClass} active` : defaultClass;
  }
}

export default withRouter(props => <Header {...props} />);
