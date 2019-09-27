import React from 'react';
import { Link } from 'react-router-dom';
import logoimage from '../../../assets/images/logo.svg';

export default class Header extends React.PureComponent {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link className="navbar-brand" to="/">
          <img src={logoimage} className="logo_app" alt="VetOn, veterinaria online" />
          <span className="subtitle_app">veterinaria online</span>
        </Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarVeton">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarVeton">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item active">
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item active">
              <Link className="nav-link" to="/contact">
                Contacto
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
