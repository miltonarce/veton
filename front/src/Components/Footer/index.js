import React from "react";
import PropTypes from "prop-types";

const Footer = ({ subtitle }) => (
  <footer className="py-4 bg-dark text-white-50">
    <div className="container text-center">
      <small>{subtitle}</small>
    </div>
  </footer>
);

Footer.propTypes = {
  subtitle: PropTypes.string.isRequired
};

export default Footer;
