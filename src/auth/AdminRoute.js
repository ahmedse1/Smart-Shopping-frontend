import React from "react";
import { Route, Redirect } from "react-router-dom";

const AuthRoute = ({ component: Component, isAuthenticated, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props =>
        localStorage.getItem("userType") === "admin" ? (
          <Component {...props} />
        ) : (
          <Redirect from="/:anything" to="/login" />
        )
      }
    />
  );
};

export default AuthRoute;
