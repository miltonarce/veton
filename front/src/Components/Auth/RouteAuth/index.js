import React from "react";
import { Route, Redirect } from "react-router-dom";
import PropTypes from "prop-types";

const RouteAuth = ({ auth, component: Component, render, ...props }) => (
  <Route
    {...props}
    render={routeProps => {
      if (!auth) {
        return <Redirect to="/" />;
      }
      if (Component !== undefined) {
        return <Component {...routeProps} />;
      }
      if (render !== undefined) {
        return render(routeProps);
      }
    }}
  />
);

RouteAuth.propTypes = {
  auth: PropTypes.bool,
  component: PropTypes.func,
  render: PropTypes.func,
};

export default RouteAuth;
