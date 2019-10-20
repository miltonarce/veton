import React from "react";
import PropTypes from "prop-types";

const Alert = ({ message, type }) => (
  <div className="container">
    <div className={`alert alert-${type}`} role="alert">
      {message}
    </div>
  </div>
);

export default Alert;

Alert.propTypes = {
  message: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired
};
